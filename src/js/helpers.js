// ── Copy buttons ──
function addCopyButtons(){
  document.querySelectorAll('.code-wrap').forEach(wrap => {
    const btn = wrap.querySelector('.copy-btn');
    const code = wrap.querySelector('code');
    if(btn && code){
      btn.onclick = () => {
        navigator.clipboard.writeText(code.innerText);
        btn.textContent = '✅ Скопировано';
        setTimeout(() => btn.textContent = '📋 Скопировать', 1500);
      };
    }
  });
}

// ── Animations ──
function showSections(selector){
  const root = selector ? document.querySelector(selector) : document;
  root.querySelectorAll('.section').forEach((sec,i)=>{
    setTimeout(()=>sec.classList.add('show'), i*80);
  });
}

// ── Builders ──
function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function codeBlock(code, langClass, langLabel){
  return `<div class="code-wrap">
    <div class="code-topbar">
      <div class="code-dots"><span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span></div>
      <span class="code-lang-tag">${langLabel}</span>
      <button class="copy-btn">📋 Скопировать</button>
    </div>
    <pre><code class="${langClass}">${escapeHtml(code)}</code></pre>
  </div>`;
}

function section(num, title, desc, code, explain, langClass, langLabel){
  return `<div class="section" id="s${num}">
    <div class="section-header">
      <span class="section-num">${String(num).padStart(2,'0')}</span>
      <h2>${title}</h2>
    </div>
    <p class="section-desc">${desc}</p>
    ${codeBlock(code, langClass, langLabel)}
    <div class="explain"><span class="explain-icon">💡</span><span>${explain}</span></div>
  </div>`;
}

function hero(icon, name, subtitle, badges){
  const b = badges.map(b=>`<span class="badge">${b}</span>`).join('');
  return `<div class="lang-hero"><img src="${icon}"><div><h1>${name}</h1><p>${subtitle}</p><div class="badges">${b}</div></div></div>`;
}

function infoHero(icon, name, subtitle, badges){
  const b = badges.map(b=>`<span class="badge">${b}</span>`).join('');
  return `<div class="info-hero"><div class="info-hero-icon">${icon}</div><div><h1>${name}</h1><p>${subtitle}</p><div class="badges" style="margin-top:8px">${b}</div></div></div>`;
}

function toc(items){
  const links = items.map((it,i)=>`<li><a href="javascript:void(0)" onclick="scrollToSection('s${i+1}')">${it}</a></li>`).join('');
  return `<div class="toc"><div class="toc-title">📋 Содержание</div><ul class="toc-list">${links}</ul></div>`;
}

function progressBar(){ return `<div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>`; }

function shortcutTable(rows){
  const trs = rows.map(r=>`<tr><td><kbd>${r[0]}</kbd></td><td>${r[1]}</td></tr>`).join('');
  return `<table class="shortcut-table"><thead><tr><th>Сочетание</th><th>Действие</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function subLabel(icon, text){
  return `<div class="sub-section-label">${icon} ${text}</div>`;
}