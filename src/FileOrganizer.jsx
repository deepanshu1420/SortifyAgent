import { useState, useRef, useEffect } from "react";
import { CAT_META } from "./constants";
import { getCategory } from "./utils";
import { CSS } from "./styles";

const logPrefix = { ok: "✔", err: "✖", skip: "⚠", info: "ℹ" };

export default function FileOrganizer() {
  const [phase, setPhase]           = useState("idle");
  const [folderName, setFolderName] = useState("");
  const [logs, setLogs]             = useState([]);
  const [stats, setStats]           = useState({ moved: 0, skipped: 0, failed: 0 });
  const [progress, setProgress]     = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [isDark, setIsDark]         = useState(true);
  const logRef   = useRef(null);
  const isChrome = typeof window !== "undefined" && "showDirectoryPicker" in window;

  const addLog = (type, msg) =>
    setLogs(prev => [...prev, { type, msg, id: Math.random() }]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logs]);

  const reset = () => {
    setPhase("idle");
    setFolderName("");
    setLogs([]);
    setStats({ moved: 0, skipped: 0, failed: 0 });
    setProgress(0);
    setTotalFiles(0);
  };

  const organize = async () => {
    if (!isChrome) return;

    let dirHandle;
    try {
      dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    } catch (e) {
      if (e.name === "AbortError") return;
      setPhase("error");
      addLog("err", "Could not open folder: " + e.message);
      return;
    }

    setFolderName(dirHandle.name);
    setPhase("running");
    setLogs([]);
    setStats({ moved: 0, skipped: 0, failed: 0 });
    setProgress(0);

    const entries = [];
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "file") entries.push({ name, handle });
    }

    setTotalFiles(entries.length);

    if (entries.length === 0) {
      addLog("info", "Folder is empty — nothing to organize.");
      setPhase("done");
      return;
    }

    let moved = 0, skipped = 0, failed = 0;

    for (let i = 0; i < entries.length; i++) {
      const { name, handle } = entries[i];

      if (name.startsWith(".")) {
        addLog("skip", `Hidden file skipped → ${name}`);
        skipped++;
        setStats({ moved, skipped, failed });
        setProgress(Math.round(((i + 1) / entries.length) * 100));
        continue;
      }

      const category = getCategory(name);

      if (!category) {
        addLog("skip", `No extension, skipped → ${name}`);
        skipped++;
        setStats({ moved, skipped, failed });
        setProgress(Math.round(((i + 1) / entries.length) * 100));
        continue;
      }

      try {
        const subDir    = await dirHandle.getDirectoryHandle(category, { create: true });
        const file      = await handle.getFile();
        const buffer    = await file.arrayBuffer();
        const newHandle = await subDir.getFileHandle(name, { create: true });
        const writable  = await newHandle.createWritable();
        await writable.write(buffer);
        await writable.close();
        await dirHandle.removeEntry(name);
        addLog("ok", `[${category}] ${name}`);
        moved++;
      } catch (err) {
        addLog("err", `Failed → ${name}: ${err.message}`);
        failed++;
      }

      setStats({ moved, skipped, failed });
      setProgress(Math.round(((i + 1) / entries.length) * 100));
      await new Promise(r => setTimeout(r, 18));
    }

    setPhase("done");
  };

  return (
    <>
      <style>{CSS}</style>
      <div className={`fo-root${isDark ? "" : " light"}`}>

        {/* ── Theme Toggle ── */}
        <button
          className="fo-theme-btn"
          onClick={() => setIsDark(prev => !prev)}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <div className="fo-badge">⚡ File System Access API</div>
        <h1 className="fo-title">Sortify Agent</h1>
        <p className="fo-sub">
          Pick any folder on your PC — Images, Documents,<br />
          Videos and more get sorted into subfolders instantly.
        </p>

        <div className="fo-cols">

          {/* ── Box 1: Main control ── */}
          <div className="fo-card">
            {phase === "idle" && (
              <>
                <div className="fo-zone" onClick={isChrome ? organize : undefined}>
                  <span className="fo-zone-icon">📂</span>
                  <p className="fo-zone-label">
                    {isChrome ? "Click to pick a folder" : "Browser not supported"}
                  </p>
                  <p className="fo-zone-hint">
                    {isChrome
                      ? "Works on D:\\ or any drive — your choice"
                      : "Use Google Chrome or Microsoft Edge"}
                  </p>
                </div>

                {!isChrome && (
                  <div className="fo-warn">
                    ⚠️&nbsp; File System Access API requires <strong>Chrome</strong> or <strong>Edge</strong>. Firefox does not support it yet.
                  </div>
                )}

                {isChrome && (
                  <button className="fo-btn fo-btn-primary" onClick={organize}>
                    Select Folder &amp; Organize
                  </button>
                )}
              </>
            )}

            {(phase === "running" || phase === "done" || phase === "error") && (
              <>
                <div className="fo-path">
                  📁&nbsp; <span style={{ opacity: 0.7 }}>Selected:</span>&nbsp; {folderName}
                </div>

                {phase === "running" && (
                  <div className="fo-progress-wrap">
                    <div className="fo-progress-bar" style={{ width: `${progress}%` }} />
                  </div>
                )}

                <div className={`fo-status ${
                  phase === "running" ? "fo-status-running" :
                  phase === "done"    ? "fo-status-done"    : "fo-status-error"
                }`} style={{ marginTop: 10 }}>
                  {phase === "running" && <div className="fo-spinner" />}
                  {phase === "running" && `Organizing… ${progress}% (${stats.moved + stats.skipped + stats.failed} / ${totalFiles} files)`}
                  {phase === "done"    && `✓ Done! All ${totalFiles} files processed.`}
                  {phase === "error"   && "Something went wrong. Check logs below."}
                </div>

                <div className="fo-terminal">
                  <div className="fo-terminal-bar">
                    <div className="fo-dot fo-dot-r" />
                    <div className="fo-dot fo-dot-y" />
                    <div className="fo-dot fo-dot-g" />
                    <span className="fo-terminal-title">organizer — {folderName}</span>
                  </div>
                  <div className="fo-log-body" ref={logRef}>
                    {logs.length === 0
                      ? <div className="fo-log-empty">// waiting for files...</div>
                      : logs.map(l => (
                          <div key={l.id} className={`fo-log-row fo-log-${l.type}`}>
                            <span className="fo-log-prefix">{logPrefix[l.type]}</span>
                            <span className="fo-log-msg">{l.msg}</span>
                          </div>
                        ))
                    }
                  </div>
                </div>

                <div className="fo-stats">
                  <div className="fo-stat fo-stat-moved">
                    <div className="fo-stat-n">{stats.moved}</div>
                    <div className="fo-stat-l">Moved</div>
                  </div>
                  <div className="fo-stat fo-stat-skip">
                    <div className="fo-stat-n">{stats.skipped}</div>
                    <div className="fo-stat-l">Skipped</div>
                  </div>
                  <div className="fo-stat fo-stat-fail">
                    <div className="fo-stat-n">{stats.failed}</div>
                    <div className="fo-stat-l">Failed</div>
                  </div>
                </div>

                {phase === "done" && (
                  <button className="fo-btn fo-btn-ghost" onClick={reset}>
                    ↩ Organize another folder
                  </button>
                )}
              </>
            )}
          </div>

          {/* ── Box 2: Categories ── */}
          <div className="fo-card">
            <p className="fo-sec-label">What goes where</p>
            <div className="fo-cats">
              {Object.entries(CAT_META).map(([name, { icon, color }]) => (
                <div className="fo-cat" key={name}>
                  <div className="fo-cat-dot" style={{ background: color }} />
                  {icon} {name}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Footer ── */}
        <footer className="fo-footer">
          Developed with ❤️ by{" "}
          <a href="https://github.com/deepanshu1420" target="_blank" rel="noreferrer">
            Deepanshu Sharma
          </a>
        </footer>

      </div>
    </>
  );
}