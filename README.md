<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VibeCode — README</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0f1117;
  --bg2: #161820;
  --sidebar: #13141a;
  --card: #1c1e27;
  --border: #2a2d3a;
  --text: #e2e4f0;
  --muted: #7a7e96;
  --accent: #7c6bff;
  --accent2: #56cfb2;
  --accent3: #ff7c6b;
  --tag-bg: #7c6bff22;
  --tag-text: #a89dff;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── SCANLINE OVERLAY ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
  pointer-events: none;
  z-index: 1000;
}

/* ── GRID BG ── */
.grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
}

.grid-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, #7c6bff18, transparent 70%),
              radial-gradient(ellipse 60% 40% at 80% 100%, #56cfb215, transparent 70%);
}

/* ── CONTAINER ── */
.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px 80px;
  position: relative;
  z-index: 1;
}

/* ── HEADER / HERO ── */
.hero {
  text-align: center;
  padding: 72px 20px 48px;
  position: relative;
}

.hero-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, #7c6bff22 0%, transparent 70%);
  pointer-events: none;
}

.ascii-logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(5px, 1.2vw, 11px);
  line-height: 1.25;
  color: var(--accent);
  opacity: 0;
  animation: fadeDown 0.8s 0.1s ease forwards;
  text-shadow: 0 0 20px var(--accent);
  letter-spacing: 0.02em;
  white-space: pre;
  display: inline-block;
}

.hero-subtitle {
  font-size: 15px;
  color: var(--muted);
  margin-top: 20px;
  opacity: 0;
  animation: fadeUp 0.7s 0.5s ease forwards;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
}

.hero-subtitle span {
  color: var(--accent2);
}

/* ── BADGES ── */
.badges-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
  opacity: 0;
  animation: fadeUp 0.7s 0.7s ease forwards;
}

.badge-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 30px;
  border: 1px solid var(--border);
  background: var(--card);
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
  cursor: default;
}

.badge-pill:hover {
  border-color: var(--accent);
  color: var(--tag-text);
  transform: translateY(-2px);
}

.badge-pill .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.b-html .dot { background: #E34F26; }
.b-css .dot { background: #1572B6; }
.b-js .dot { background: #F7DF1E; }
.b-pages .dot { background: #fff; }
.b-langs .dot { background: var(--accent); }
.b-status .dot { background: #28c840; box-shadow: 0 0 6px #28c840; animation: pulse-dot 2s infinite; }

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ── DIVIDER ── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
  margin: 36px 0;
  opacity: 0;
  animation: fadeIn 0.6s 1s ease forwards;
}

/* ── SECTION TITLE ── */
.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent2);
  margin-bottom: 20px;
}

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ── FEATURE CARDS ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 16px;
}

@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr; }
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px 18px;
  cursor: default;
  position: relative;
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(.25,.8,.25,1), border-color 0.22s, box-shadow 0.22s;
  opacity: 0;
}

.card.show { animation: cardIn 0.5s ease forwards; }

@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.22s;
}

.card:hover { transform: translateY(-5px); }
.card:hover::before { opacity: 1; }

.card-langs::before { background: linear-gradient(135deg, #7c6bff15, transparent 60%); }
.card-linux::before { background: linear-gradient(135deg, #56cfb215, transparent 60%); }
.card-tricks::before { background: linear-gradient(135deg, #ff7c6b15, transparent 60%); }

.card-langs:hover { border-color: #7c6bff66; box-shadow: 0 10px 32px #7c6bff1a; }
.card-linux:hover { border-color: #56cfb266; box-shadow: 0 10px 32px #56cfb21a; }
.card-tricks:hover { border-color: #ff7c6b66; box-shadow: 0 10px 32px #ff7c6b1a; }

.card-icon { font-size: 32px; margin-bottom: 12px; }
.card-name { font-size: 14px; font-weight: 800; margin-bottom: 5px; }
.card-desc { font-size: 12px; color: var(--muted); line-height: 1.6; }
.card-count {
  display: inline-block;
  margin-top: 10px;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--tag-bg);
  color: var(--tag-text);
  font-family: 'JetBrains Mono', monospace;
}

/* ── PREVIEW WINDOW ── */
.preview-window {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  animation: fadeUp 0.7s 0.2s ease forwards;
}

.win-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #0d0f16;
  border-bottom: 1px solid var(--border);
}

.win-dots { display: flex; gap: 6px; }
.win-dots span { width: 11px; height: 11px; border-radius: 50%; }
.wd-r { background: #ff5f57; }
.wd-y { background: #febc2e; }
.wd-g { background: #28c840; }

.win-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
}

.win-body {
  padding: 24px 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.9;
}

.wl { display: block; }
.c-purple { color: var(--accent); }
.c-green  { color: var(--accent2); }
.c-red    { color: var(--accent3); }
.c-muted  { color: var(--muted); }
.c-yellow { color: #febc2e; }
.c-text   { color: var(--text); }

.typing::after {
  content: '▌';
  animation: blink 1s infinite;
  color: var(--accent2);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── STRUCTURE BLOCK ── */
.structure-block {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 2;
  opacity: 0;
  animation: fadeUp 0.6s 0.1s ease forwards;
}

.structure-block .tree-line { display: flex; align-items: center; gap: 8px; }
.tree-icon { font-size: 16px; }
.tree-name { font-weight: 700; color: var(--text); }
.tree-comment { color: var(--muted); font-size: 12px; margin-left: 4px; }
.tree-connector { color: var(--border); }

/* ── DEPLOY STEPS ── */
.deploy-steps { display: flex; flex-direction: column; gap: 16px; }

.step {
  display: flex;
  gap: 16px;
  opacity: 0;
  animation: slideRight 0.5s ease forwards;
}

.step-num {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--tag-bg);
  border: 1px solid var(--accent)44;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--accent);
  flex-shrink: 0;
  font-family: 'JetBrains Mono', monospace;
}

.step-body { flex: 1; }
.step-title { font-size: 14px; font-weight: 800; margin-bottom: 8px; }

.code-block {
  background: #0d0f16;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.code-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 12px;
  background: #0a0c12;
  border-bottom: 1px solid var(--border);
}

.code-lang { font-size: 10px; font-weight: 700; color: var(--muted); font-family: 'JetBrains Mono', monospace; letter-spacing: .05em; text-transform: uppercase; }

.code-block pre {
  padding: 14px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  line-height: 1.75;
  overflow-x: auto;
  color: var(--text);
}

.code-block pre .kw { color: var(--accent); font-weight: 600; }
.code-block pre .str { color: var(--accent2); }
.code-block pre .cmt { color: var(--muted); }
.code-block pre .flag { color: var(--accent3); }

/* ── STACK TABLE ── */
.stack-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  opacity: 0;
  animation: fadeUp 0.6s 0.1s ease forwards;
}

.stack-table th {
  text-align: left;
  padding: 10px 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.stack-table td {
  padding: 11px 16px;
  border-bottom: 1px solid var(--border)88;
  vertical-align: middle;
}

.stack-table tr:last-child td { border-bottom: none; }

.stack-table tr:hover td {
  background: var(--tag-bg);
}

.stack-table .layer {
  font-weight: 700;
  color: var(--tag-text);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  border-radius: 6px;
  background: var(--tag-bg);
  border: 1px solid var(--accent)22;
  font-size: 12px;
  font-weight: 600;
  color: var(--tag-text);
}

/* ── FEATURES CHECKLIST ── */
.checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  opacity: 0;
  animation: fadeUp 0.6s 0.1s ease forwards;
}

@media (max-width: 500px) {
  .checklist { grid-template-columns: 1fr; }
}

.check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 600;
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}

.check-item:hover {
  border-color: var(--accent2)55;
  transform: translateX(3px);
}

.check-icon {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #56cfb222;
  border: 1px solid #56cfb244;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

/* ── LANG PILLS ── */
.lang-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  opacity: 0;
  animation: fadeUp 0.6s 0.1s ease forwards;
}

.lang-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 30px;
  background: var(--card);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 700;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
  cursor: default;
}

.lang-pill:hover {
  border-color: var(--accent)66;
  background: var(--tag-bg);
  transform: translateY(-2px);
}

.lang-pill img {
  width: 18px;
  height: 18px;
}

/* ── FOOTER ── */
.footer {
  text-align: center;
  padding: 48px 0 24px;
  opacity: 0;
  animation: fadeUp 0.7s 0.3s ease forwards;
}

.footer-title {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.footer-sub {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 20px;
}

.star-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 30px;
  background: var(--tag-bg);
  border: 1px solid var(--accent)44;
  color: var(--tag-text);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  text-decoration: none;
}

.star-btn:hover {
  background: var(--accent)33;
  border-color: var(--accent)88;
  transform: scale(1.04);
}

/* ── SCROLL REVEAL ── */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ── CUSTOM SCROLLBAR ── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent)66; }

/* ── CARD wrapper ── */
.section-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

</style>
</head>
<body>

<div class="grid-bg"></div>

<div class="container">

  <!-- ── HERO ── -->
  <div class="hero">
    <div class="hero-glow"></div>
    <div class="ascii-logo">██╗   ██╗██╗██████╗ ███████╗ ██████╗ ██████╗ ██████╗ ███████╗
██║   ██║██║██╔══██╗██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║██████╔╝█████╗  ██║     ██║   ██║██║  ██║█████╗  
╚██╗ ██╔╝██║██╔══██╗██╔══╝  ██║     ██║   ██║██║  ██║██╔══╝  
 ╚████╔╝ ██║██████╔╝███████╗╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝</div>

    <p class="hero-subtitle">Интерактивный справочник по программированию&nbsp;/ <span>для начинающих</span></p>

    <div class="badges-row">
      <div class="badge-pill b-html"><div class="dot"></div>HTML5</div>
      <div class="badge-pill b-css"><div class="dot"></div>CSS3</div>
      <div class="badge-pill b-js"><div class="dot"></div>JavaScript</div>
      <div class="badge-pill b-pages"><div class="dot"></div>GitHub Pages</div>
      <div class="badge-pill b-langs"><div class="dot"></div>12 языков</div>
      <div class="badge-pill b-status"><div class="dot"></div>Live</div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── PREVIEW ── -->
  <div class="reveal">
    <div class="section-title">📸 Превью</div>
    <div class="preview-window">
      <div class="win-bar">
        <div class="win-dots">
          <span class="wd-r"></span>
          <span class="wd-y"></span>
          <span class="wd-g"></span>
        </div>
        <div class="win-title">⌨️ VibeCode — localhost</div>
        <div style="width:60px"></div>
      </div>
      <div class="win-body">
        <span class="wl"><span class="c-muted">// Добро пожаловать в</span></span>
        <span class="wl"><span class="c-purple">const</span> <span class="c-text">app</span> <span class="c-muted">=</span> <span class="c-green">"VibeCode"</span><span class="c-muted">;</span></span>
        <span class="wl">&nbsp;</span>
        <span class="wl"><span class="c-purple">const</span> <span class="c-text">features</span> <span class="c-muted">=</span> <span class="c-muted">{</span></span>
        <span class="wl">&nbsp; <span class="c-yellow">languages</span><span class="c-muted">:</span> <span class="c-red">12</span><span class="c-muted">,</span> <span class="c-muted">// Python, JS, Java, Go, Rust...</span></span>
        <span class="wl">&nbsp; <span class="c-yellow">linux</span><span class="c-muted">:</span>     <span class="c-green">"terminal + vim + vscode"</span><span class="c-muted">,</span></span>
        <span class="wl">&nbsp; <span class="c-yellow">tricks</span><span class="c-muted">:</span>    <span class="c-green">"git + regex + patterns"</span><span class="c-muted">,</span></span>
        <span class="wl">&nbsp; <span class="c-yellow">theme</span><span class="c-muted">:</span>     <span class="c-green">"dark | light"</span><span class="c-muted">,</span></span>
        <span class="wl">&nbsp; <span class="c-yellow">syntax</span><span class="c-muted">:</span>    <span class="c-green">"highlight.js"</span></span>
        <span class="wl"><span class="c-muted">};</span></span>
        <span class="wl">&nbsp;</span>
        <span class="wl"><span class="c-muted">// Запуск...</span></span>
        <span class="wl"><span class="c-yellow">console</span><span class="c-muted">.</span><span class="c-purple">log</span><span class="c-muted">(</span><span class="c-green">"Ready to learn!"</span><span class="c-muted">);</span> <span class="typing"></span></span>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── SECTIONS ── -->
  <div class="reveal">
    <div class="section-title">✨ Разделы</div>
    <div class="cards-grid">
      <div class="card card-langs">
        <div class="card-icon">🗂️</div>
        <div class="card-name">Языки программирования</div>
        <div class="card-desc">Python, JS, Java, Go, Rust, C#, PHP, TS, Swift, Kotlin, Ruby, C/C++</div>
        <div class="card-count">12 × 10 тем</div>
      </div>
      <div class="card card-linux">
        <div class="card-icon">🐧</div>
        <div class="card-name">Linux / Vim / VS Code</div>
        <div class="card-desc">Терминал, навигация, файлы, процессы, редакторы и горячие клавиши</div>
        <div class="card-count" style="background:#56cfb222;color:#56cfb2;">8 тем</div>
      </div>
      <div class="card card-tricks">
        <div class="card-icon">🚀</div>
        <div class="card-name">Фишки разработчика</div>
        <div class="card-desc">Git, Regex, SSH, паттерны, Big O, дебаг, советы по продуктивности</div>
        <div class="card-count" style="background:#ff7c6b22;color:#ff7c6b;">8 тем</div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── FEATURES ── -->
  <div class="reveal">
    <div class="section-title">⚡ Фичи интерфейса</div>
    <div class="checklist">
      <div class="check-item"><div class="check-icon">✓</div>Подсветка синтаксиса</div>
      <div class="check-item"><div class="check-icon">✓</div>Тёмная / светлая тема</div>
      <div class="check-item"><div class="check-icon">✓</div>Копирование кода одним кликом</div>
      <div class="check-item"><div class="check-icon">✓</div>Навигация по содержанию</div>
      <div class="check-item"><div class="check-icon">✓</div>Анимации при появлении</div>
      <div class="check-item"><div class="check-icon">✓</div>Адаптивная вёрстка (mobile)</div>
      <div class="check-item"><div class="check-icon">✓</div>Модальные окна книг</div>
      <div class="check-item"><div class="check-icon">✓</div>Поиск по языкам</div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── STRUCTURE ── -->
  <div class="reveal">
    <div class="section-title">📁 Структура проекта</div>
    <div class="structure-block">
      <div class="tree-line"><span style="color:var(--accent);font-weight:800;">vibecode/</span></div>
      <div class="tree-line"><span class="tree-connector">│</span></div>
      <div class="tree-line"><span class="tree-connector">├──</span> <span class="tree-icon">📄</span> <span class="tree-name">index.html</span> <span class="tree-comment"># Разметка и структура приложения</span></div>
      <div class="tree-line"><span class="tree-connector">├──</span> <span class="tree-icon">🎨</span> <span class="tree-name">style.css</span> <span class="tree-comment"># Стили, темы, анимации, адаптив</span></div>
      <div class="tree-line"><span class="tree-connector">├──</span> <span class="tree-icon">⚙️</span> <span class="tree-name">app.js</span> <span class="tree-comment"># Логика, контент (12 языков), книги</span></div>
      <div class="tree-line"><span class="tree-connector">└──</span> <span class="tree-icon">📖</span> <span class="tree-name" style="color:var(--accent2);">README</span> <span class="tree-comment"># Этот файл</span></div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── DEPLOY ── -->
  <div class="reveal">
    <div class="section-title">🚀 Деплой на GitHub Pages</div>
    <div class="deploy-steps">

      <div class="step" style="animation-delay: 0.05s">
        <div class="step-num">01</div>
        <div class="step-body">
          <div class="step-title">Создай репозиторий и запушь</div>
          <div class="code-block">
            <div class="code-topbar"><span class="code-lang">bash</span></div>
            <pre><span class="kw">git</span> init
<span class="kw">git</span> add .
<span class="kw">git</span> commit <span class="flag">-m</span> <span class="str">"feat: initial commit"</span>
<span class="kw">git</span> branch <span class="flag">-M</span> main
<span class="kw">git</span> remote add origin https://github.com/<span class="str">&lt;username&gt;</span>/<span class="str">&lt;repo&gt;</span>.git
<span class="kw">git</span> push <span class="flag">-u</span> origin main</pre>
          </div>
        </div>
      </div>

      <div class="step" style="animation-delay: 0.15s">
        <div class="step-num">02</div>
        <div class="step-body">
          <div class="step-title">Включи GitHub Pages</div>
          <div class="code-block">
            <div class="code-topbar"><span class="code-lang">settings</span></div>
            <pre><span class="cmt">Репозиторий → Settings → Pages</span>
  <span class="kw">└──</span> Source: Deploy from a branch
        <span class="kw">└──</span> Branch: <span class="str">main</span>  /  <span class="str">(root)</span>
              <span class="kw">└──</span> Save ✅</pre>
          </div>
        </div>
      </div>

      <div class="step" style="animation-delay: 0.25s">
        <div class="step-num">03</div>
        <div class="step-body">
          <div class="step-title">Открой сайт (~1–2 мин)</div>
          <div class="code-block">
            <div class="code-topbar"><span class="code-lang">url</span></div>
            <pre><span class="str">https://</span><span class="kw">&lt;username&gt;</span><span class="str">.github.io/</span><span class="kw">&lt;repo&gt;</span><span class="str">/</span></pre>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ── STACK ── -->
  <div class="reveal">
    <div class="section-title">🛠️ Стек</div>
    <div class="section-card">
      <table class="stack-table">
        <thead>
          <tr>
            <th>Слой</th>
            <th>Технология</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="layer">Разметка</td><td><span class="tech-tag">HTML5 семантический</span></td></tr>
          <tr><td class="layer">Стили</td><td><span class="tech-tag">CSS3</span> <span style="color:var(--muted);font-size:12px;margin-left:6px;">переменные · анимации · grid · flex</span></td></tr>
          <tr><td class="layer">Логика</td><td><span class="tech-tag">Vanilla JS ES6+</span></td></tr>
          <tr><td class="layer">Подсветка</td><td><span class="tech-tag">highlight.js 11.9</span></td></tr>
          <tr><td class="layer">Иконки</td><td><span class="tech-tag">Devicons CDN</span></td></tr>
          <tr><td class="layer">Шрифты</td><td><span class="tech-tag">JetBrains Mono</span> <span class="tech-tag" style="margin-left:4px;">Manrope</span></td></tr>
          <tr><td class="layer">Хостинг</td><td><span class="tech-tag" style="background:#28c84022;color:#28c840;border-color:#28c84044;">GitHub Pages — free</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── LANGUAGES ── -->
  <div class="reveal">
    <div class="section-title">📚 Поддерживаемые языки</div>
    <div class="lang-pills">
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg">Python</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">JavaScript</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">TypeScript</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg">Java</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg">C / C++</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg">C#</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg">Go</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg">Rust</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg">PHP</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg">Swift</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg">Kotlin</div>
      <div class="lang-pill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg">Ruby</div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ── FOOTER ── -->
  <div class="footer">
    <div class="footer-title">⌨️ VibeCode</div>
    <p class="footer-sub">Сделано с ❤️ и ☕ · MIT License</p>
    <a class="star-btn" href="#" onclick="return false">⭐ Поставить звезду</a>
  </div>

</div>

<script>
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        // Stagger children steps
        entry.target.querySelectorAll('.step').forEach((s, idx) => {
          s.style.animationDelay = (idx * 0.12) + 's';
          s.style.animationName = 'slideRight';
          s.style.animationDuration = '0.5s';
          s.style.animationFillMode = 'forwards';
        });
        // Stagger cards
        entry.target.querySelectorAll('.card').forEach((c, idx) => {
          c.style.animationDelay = (idx * 0.1) + 's';
          c.classList.add('show');
        });
      }, 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>

</body>
</html>
