// ── Scroll to section (TOC navigation) ──
function scrollToSection(id){
  const containers = ['content','linuxContent','tricksContent'];
  for(const cId of containers){
    const container = document.getElementById(cId);
    if(!container) continue;
    const rect = container.getBoundingClientRect();
    if(rect.width > 0 && rect.height > 0){
      const target = container.querySelector('#'+id);
      if(target){
        container.scrollTo({ top: target.offsetTop - 16, behavior: 'smooth' });
        target.style.outline = '2px solid var(--accent)';
        target.style.outlineOffset = '8px';
        target.style.borderRadius = '12px';
        setTimeout(()=>{ target.style.outline=''; target.style.outlineOffset=''; }, 1200);
        return;
      }
    }
  }
}

// ── Back to top ──
function setupScrollListeners(){
  const containers = ['content','linuxContent','tricksContent'];
  containers.forEach(cId => {
    const el = document.getElementById(cId);
    if(!el) return;
    el.addEventListener('scroll', () => {
      const btn = document.getElementById('backToTopBtn');
      if(!btn) return;
      btn.classList.toggle('visible', el.scrollTop > 320);
    });
  });
}

function scrollToTop(){
  const containers = ['content','linuxContent','tricksContent'];
  for(const cId of containers){
    const el = document.getElementById(cId);
    if(!el) continue;
    const rect = el.getBoundingClientRect();
    if(rect.width > 0 && rect.height > 0 && el.scrollTop > 0){
      el.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }
}

document.addEventListener('DOMContentLoaded', setupScrollListeners);

// ── Search ──
document.getElementById('searchBar').addEventListener('input', function(){
  const val = this.value.toLowerCase();
  document.querySelectorAll('.chat-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(val) ? 'flex' : 'none';
  });
});

// ── Click on lang items ──
document.querySelectorAll('.chat-item').forEach(item => {
  item.addEventListener('click', () => {
    showView('languages');
    openLang(item.dataset.lang);
  });
});