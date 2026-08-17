export const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .fo-root {
    min-height: 100vh;
    background: #07090F;
    color: #CBD5E1;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 20px;
  }

  /* ── Header ── */
  .fo-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.25);
    color: #818CF8;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .fo-title {
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.05;
    background: linear-gradient(130deg, #E2E8F0 30%, #818CF8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 12px;
  }

  .fo-sub {
    color: #475569;
    font-size: 13px;
    text-align: center;
    max-width: 340px;
    line-height: 1.6;
    margin-bottom: 28px;
  }

  /* ── Single column layout ── */
  .fo-cols {
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;
    max-width: 580px;
  }

  /* ── Cards ── */
  .fo-card {
    background: #0C1018;
    border: 1px solid #1A2235;
    border-radius: 16px;
    padding: 18px;
    width: 100%;
    margin-bottom: 0;
  }

  /* ── Drop zone ── */
  .fo-zone {
    border: 2px dashed #1A2235;
    border-radius: 12px;
    padding: 20px 28px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    user-select: none;
  }
  .fo-zone:hover, .fo-zone.hover {
    border-color: #6366F1;
    background: rgba(99,102,241,0.05);
  }

  .fo-zone-icon {
    font-size: 36px;
    margin-bottom: 8px;
    display: block;
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }

  .fo-zone-label {
    font-size: 15px;
    font-weight: 600;
    color: #CBD5E1;
    margin-bottom: 4px;
  }
  .fo-zone-hint {
    font-size: 12px;
    color: #334155;
  }

  /* ── Selected path ── */
  .fo-path {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 9px 14px;
    background: rgba(99,102,241,0.08);
    border: 1px solid rgba(99,102,241,0.18);
    border-radius: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: #818CF8;
    word-break: break-all;
  }

  /* ── Button ── */
  .fo-btn {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    margin-top: 12px;
    letter-spacing: 0.3px;
  }
  .fo-btn-primary {
    background: linear-gradient(135deg, #6366F1, #8B5CF6);
    color: #fff;
    box-shadow: 0 0 28px rgba(99,102,241,0.28);
  }
  .fo-btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(99,102,241,0.45);
  }
  .fo-btn-primary:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .fo-btn-ghost {
    background: #0C1018;
    border: 1px solid #1A2235;
    color: #64748B;
    margin-top: 8px;
  }
  .fo-btn-ghost:hover {
    border-color: #334155;
    color: #94A3B8;
  }

  /* ── Status bar ── */
  .fo-status {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .fo-status-running {
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.2);
    color: #818CF8;
  }
  .fo-status-done {
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.2);
    color: #4ADE80;
  }
  .fo-status-error {
    background: rgba(239,68,68,0.08);
    border: 1px solid rgba(239,68,68,0.2);
    color: #F87171;
  }

  .fo-spinner {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(99,102,241,0.3);
    border-top-color: #818CF8;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Log terminal ── */
  .fo-terminal {
    background: #070A10;
    border: 1px solid #141C2E;
    border-radius: 10px;
    overflow: hidden;
  }
  .fo-terminal-bar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    background: #0A0E19;
    border-bottom: 1px solid #141C2E;
  }
  .fo-dot { width: 9px; height: 9px; border-radius: 50%; }
  .fo-dot-r { background: #EF4444; }
  .fo-dot-y { background: #EAB308; }
  .fo-dot-g { background: #22C55E; }
  .fo-terminal-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #334155;
    margin-left: 6px;
  }

  .fo-log-body {
    max-height: 140px;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .fo-log-body::-webkit-scrollbar { width: 3px; }
  .fo-log-body::-webkit-scrollbar-thumb { background: #1A2235; border-radius: 4px; }

  .fo-log-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 3px 0;
    border-bottom: 1px solid rgba(255,255,255,0.025);
  }
  .fo-log-row:last-child { border-bottom: none; }
  .fo-log-prefix { flex-shrink: 0; font-weight: 500; }
  .fo-log-ok   .fo-log-prefix { color: #4ADE80; }
  .fo-log-err  .fo-log-prefix { color: #F87171; }
  .fo-log-skip .fo-log-prefix { color: #FBBF24; }
  .fo-log-info .fo-log-prefix { color: #64748B; }
  .fo-log-ok   .fo-log-msg { color: #86EFAC; }
  .fo-log-err  .fo-log-msg { color: #FCA5A5; }
  .fo-log-skip .fo-log-msg { color: #FDE68A; }
  .fo-log-info .fo-log-msg { color: #475569; }

  .fo-log-empty {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #1E2A3E;
    text-align: center;
    padding: 20px 0;
  }

  /* ── Stats ── */
  .fo-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-top: 10px;
  }
  .fo-stat {
    background: #070A10;
    border: 1px solid #141C2E;
    border-radius: 10px;
    padding: 10px 8px;
    text-align: center;
  }
  .fo-stat-n {
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 4px;
  }
  .fo-stat-l {
    font-size: 9px;
    color: #334155;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
  }
  .fo-stat-moved  .fo-stat-n { color: #4ADE80; }
  .fo-stat-skip   .fo-stat-n { color: #FBBF24; }
  .fo-stat-fail   .fo-stat-n { color: #F87171; }

  /* ── Categories reference ── */
  .fo-sec-label {
    font-size: 11px;
    font-weight: 600;
    color: #334155;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .fo-cats {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 7px;
  }
  .fo-cat {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    background: #070A10;
    border: 1px solid #141C2E;
    border-radius: 8px;
    font-size: 12px;
    color: #475569;
    transition: border-color 0.15s;
  }
  .fo-cat:hover { border-color: #1E2A3E; color: #64748B; }
  .fo-cat-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── Browser warning ── */
  .fo-warn {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 14px;
    background: rgba(251,191,36,0.07);
    border: 1px solid rgba(251,191,36,0.18);
    border-radius: 10px;
    font-size: 12px;
    color: #FCD34D;
    margin-top: 12px;
    line-height: 1.6;
  }

  /* ── Progress bar ── */
  .fo-progress-wrap {
    height: 3px;
    background: #141C2E;
    border-radius: 10px;
    margin-top: 10px;
    overflow: hidden;
  }
  .fo-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    border-radius: 10px;
    transition: width 0.3s ease;
  }

  /* ── Footer ── */
  .fo-footer {
    margin-top: 100px;
    font-size: 14px;
    color: #334155;
    text-align: center;
    padding-bottom: 12px;
  }
  .fo-footer a {
    color: #334155;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  .fo-footer a:hover {
    color: #818CF8;
  }
`;