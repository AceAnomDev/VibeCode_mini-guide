// ── Open Language ──
function openLang(langKey){
  if(window.innerWidth < 700)
    document.getElementById("sidebar").classList.remove("show");

  document.querySelectorAll('.chat-item').forEach(item =>
    item.classList.toggle('active', item.dataset.lang === langKey));

  const names = {
    python:"Python", js:"JavaScript", java:"Java", c:"C / C++",
    go:"Go", php:"PHP", ts:"TypeScript", rust:"Rust",
    swift:"Swift", kotlin:"Kotlin", ruby:"Ruby", csharp:"C#"
  };

  setBreadcrumb(`🗂️ Языки › ${names[langKey]||langKey}`);

  const content = document.getElementById("content");
  const generator = langs[langKey];
  if(!generator) return;
  content.innerHTML = generator();
  hljs.highlightAll();
  addCopyButtons();
  showSections('#content');
  content.scrollTo(0, 0);
  setTimeout(()=>{ const f=document.getElementById("progressFill"); if(f) f.style.width="100%"; }, 200);
}