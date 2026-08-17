export const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Dark mode (default) ── */
  .fo-root {
    --bg:          #07090F;
    --bg-card:     #0C1018;
    --bg-deep:     #070A10;
    --bg-terminal: #070A10;
    --bg-term-bar: #0A0E19;
    --border:      #1A2235;
    --border-deep: #141C2E;
    --text:        #CBD5E1;
    --text-muted:  #475569;
    --text-dim:    #334155;
    --text-dimmer: #1E2A3E;
    --accent:      #818CF8;
    --accent-bg:   rgba(99,102,241,0.12);
    --accent-bdr:  rgba(99,102,241,0.25);
    --accent-glow: rgba(99,102,241,0.28);
    --zone-hover:  rgba(99,102,241,0.05);
    --path-bg:     rgba(99,102,241,0.08);
    --path-bdr:    rgba(99,102,241,0.18);
    --warn-bg:     rgba(251,191,36,0.07);
    --warn-bdr:    rgba(251,191,36,0.18);
    --warn-text:   #FCD34D;
    --log-divider: rgba(255,255,255,0.025);

    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 20px;
    transition: background 0.3s, color 0.3s;
  }

  /* ── Light mode ── */
  .fo-root.light {
    --bg:          #F1F5F9;
    --bg-card:     #FFFFFF;
    --bg-deep:     #F8FAFC;
    --bg-terminal: #F1F5F9;
    --bg-term-bar: #E2E8F0;
    --border:      #CBD5E1;
    --border-deep: #E2E8F0;
    --text:        #0F172A;
    --text-muted:  #64748B;
    --text-dim:    #94A3B8;
    --text-dimmer: #CBD5E1;
    --accent:      #6366F1;
    --accent-bg:   rgba(99,102,241,0.08);
    --accent-bdr:  rgba(99,102,241,0.3);
    --accent-glow: rgba(99,102,241,0.2);
    --zone-hover:  rgba(99,102,241,0.04);
    --path-bg:     rgba(99,102,241,0.06);
    --path-bdr:    rgba(99,102,241,0.2);
    --warn-bg:     rgba(251,191,36,0.1);
    --warn-bdr:    rgba(251,191,36,0.3);
    --warn-text:   #92400E;
    --log-divider: rgba(0,0,0,0.06);
  }

  /* ── Theme toggle ── */
  .fo-theme-btn {
    position: fixed;
    top: 17px;
    right: 130px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.3s;
    z-index: 999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  .fo-theme-btn:hover {
    border-color: var(--accent);
    box-shadow: 0 0 12px var(--accent-glow);
  }

  /* ── Header ── */
  .fo-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--accent-bg);
    border: 1px solid var(--accent-bdr);
    color: var(--accent);
    padding: 5px 16px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
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
    margin-bottom: 14px;
  }
  .fo-root.light .fo-title {
    background: linear-gradient(130deg, #1E293B 30%, #6366F1 100%);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .fo-sub {
    color: var(--text-muted);
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
    gap: 20px;
    width: 100%;
    max-width: 580px;
  }

  /* ── Cards ── */
  .fo-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 18px;
    width: 100%;
    margin-bottom: 0;
    transition: background 0.3s, border-color 0.3s;
  }

  /* ── Drop zone ── */
  .fo-zone {
    border: 2px dashed var(--border);
    border-radius: 12px;
    padding: 20px 28px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    user-select: none;
  }
  .fo-zone:hover, .fo-zone.hover {
    border-color: var(--accent);
    background: var(--zone-hover);
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
    color: var(--text);
    margin-bottom: 4px;
  }
  .fo-zone-hint {
    font-size: 12px;
    color: var(--text-dim);
  }

  /* ── Selected path ── */
  .fo-path {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 9px 14px;
    background: var(--path-bg);
    border: 1px solid var(--path-bdr);
    border-radius: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--accent);
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
    box-shadow: 0 0 28px var(--accent-glow);
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
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-muted);
    margin-top: 8px;
  }
  .fo-btn-ghost:hover {
    border-color: var(--text-dim);
    color: var(--text);
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
    color: var(--accent);
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
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Log terminal ── */
  .fo-terminal {
    background: var(--bg-terminal);
    border: 1px solid var(--border-deep);
    border-radius: 10px;
    overflow: hidden;
  }
  .fo-terminal-bar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    background: var(--bg-term-bar);
    border-bottom: 1px solid var(--border-deep);
  }
  .fo-dot { width: 9px; height: 9px; border-radius: 50%; }
  .fo-dot-r { background: #EF4444; }
  .fo-dot-y { background: #EAB308; }
  .fo-dot-g { background: #22C55E; }
  .fo-terminal-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--text-dim);
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
  .fo-log-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .fo-log-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    line-height: 1.5;
    padding: 3px 0;
    border-bottom: 1px solid var(--log-divider);
  }
  .fo-log-row:last-child { border-bottom: none; }
  .fo-log-prefix { flex-shrink: 0; font-weight: 500; }
  .fo-log-ok   .fo-log-prefix { color: #4ADE80; }
  .fo-log-err  .fo-log-prefix { color: #F87171; }
  .fo-log-skip .fo-log-prefix { color: #FBBF24; }
  .fo-log-info .fo-log-prefix { color: #64748B; }
  .fo-log-ok   .fo-log-msg { color: #4ADE80; }
  .fo-log-err  .fo-log-msg { color: #F87171; }
  .fo-log-skip .fo-log-msg { color: #FBBF24; }
  .fo-log-info .fo-log-msg { color: var(--text-muted); }

  .fo-log-empty {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--text-dimmer);
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
    background: var(--bg-deep);
    border: 1px solid var(--border-deep);
    border-radius: 10px;
    padding: 10px 8px;
    text-align: center;
    transition: background 0.3s;
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
    color: var(--text-dim);
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
    color: var(--text-dim);
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
    background: var(--bg-deep);
    border: 1px solid var(--border-deep);
    border-radius: 8px;
    font-size: 12px;
    color: var(--text-muted);
    transition: border-color 0.15s, background 0.3s;
  }
  .fo-cat:hover { border-color: var(--border); color: var(--text); }
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
    background: var(--warn-bg);
    border: 1px solid var(--warn-bdr);
    border-radius: 10px;
    font-size: 12px;
    color: var(--warn-text);
    margin-top: 12px;
    line-height: 1.6;
  }

  /* ── Progress bar ── */
  .fo-progress-wrap {
    height: 3px;
    background: var(--border-deep);
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
    margin-top: 28px;
    font-size: 14px;
    color: var(--text-dim);
    text-align: center;
    padding-bottom: 20px;
  }
  .fo-footer a {
    color: var(--text-dim);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  .fo-footer a:hover {
    color: var(--accent);
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .fo-root { padding: 16px 12px; }
    .fo-badge { font-size: 9px; padding: 4px 10px; margin-bottom: 10px; }
    .fo-title { font-size: clamp(24px, 7vw, 32px); margin-bottom: 10px; }
    .fo-sub { font-size: 12px; max-width: 280px; margin-bottom: 20px; }
    .fo-cols { gap: 14px; max-width: 100%; }
    .fo-card { padding: 14px; border-radius: 14px; }
    .fo-zone { padding: 16px 14px; }
    .fo-zone-icon { font-size: 28px; }
    .fo-zone-label { font-size: 14px; }
    .fo-cats { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
    .fo-stat-n { font-size: 18px; }
    .fo-stats { gap: 6px; }
    .fo-stat { padding: 8px 4px; }
    .fo-log-body { max-height: 120px; }
    .fo-footer { font-size: 12px; margin-top: 20px; }
    .fo-theme-btn { top: 12px; right: 12px; width: 34px; height: 34px; font-size: 16px; }
  }

  @media (max-width: 400px) {
    .fo-title { font-size: 22px; }
    .fo-zone-icon { font-size: 24px; }
    .fo-cats { grid-template-columns: 1fr 1fr; }
    .fo-btn { font-size: 13px; padding: 10px; }
  }
`;