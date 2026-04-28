// ── View management ──
let currentView = 'home';

function goHome(){
  currentView = 'home';
  document.getElementById('homeScreen').style.display = 'flex';
  document.getElementById('langView').classList.remove('active');
  document.getElementById('linuxView').classList.remove('active');
  document.getElementById('tricksView').classList.remove('active');
  document.getElementById('sidebar').classList.add('hidden');
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('menuBtn').style.display = 'none';
  document.getElementById('floatingMenu').style.display = 'none';
  document.getElementById('headerNav').innerHTML = '<span class="header-title" onclick="goHome()">⌨️ VibeCode</span>';
  document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
}

function showView(view){
  currentView = view;
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('langView').classList.remove('active');
  document.getElementById('linuxView').classList.remove('active');
  document.getElementById('tricksView').classList.remove('active');
  document.getElementById('sidebar').classList.add('hidden');
  document.getElementById('menuBtn').style.display = 'none';
  document.getElementById('floatingMenu').style.display = 'none';

  if(view === 'languages'){
    document.getElementById('langView').classList.add('active');
    document.getElementById('sidebar').classList.remove('hidden');
    document.getElementById('menuBtn').style.display = 'flex';
    if(window.innerWidth < 700) document.getElementById('floatingMenu').style.display = 'flex';
    setBreadcrumb('🗂️ Языки программирования');
  } else if(view === 'linux'){
    document.getElementById('linuxView').classList.add('active');
    setBreadcrumb('🐧 Linux / Vim / VS Code');
    renderLinux();
  } else if(view === 'tricks'){
    document.getElementById('tricksView').classList.add('active');
    setBreadcrumb('🚀 Фишки разработчика');
    renderTricks();
  }
}

function setBreadcrumb(label){
  document.getElementById('headerNav').innerHTML =
    `<div class="breadcrumb">
      <span class="breadcrumb-home" onclick="goHome()">⌨️ VibeCode</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-cur">${label}</span>
    </div>`;
}