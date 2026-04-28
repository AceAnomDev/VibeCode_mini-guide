// ── Theme ──
if(localStorage.theme==="light") document.body.classList.add("light");
function toggleTheme(){
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.theme = isLight ? "light" : "dark";
  document.getElementById("themeBtn").textContent = isLight ? "🌞" : "🌙";
}
if(localStorage.theme==="light") document.getElementById("themeBtn").textContent="🌞";

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("show");
}