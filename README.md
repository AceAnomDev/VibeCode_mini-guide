<svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&amp;family=Inter:wght@400;500&amp;display=swap');
    </style>
    <!-- Dark background gradient like site -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d0d0d"/>
      <stop offset="100%" style="stop-color:#111827"/>
    </linearGradient>
    <!-- Purple glow for VibeCode text -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a78bfa"/>
      <stop offset="50%" style="stop-color:#c4b5fd"/>
      <stop offset="100%" style="stop-color:#818cf8"/>
    </linearGradient>
    <!-- Glow filter -->
    <filter id="glow" x="-20%" y="-50%" width="140%" height="200%">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Subtle glow for penguin -->
    <filter id="penguinGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Wave mask -->
    <clipPath id="waveClip">
      <rect width="900" height="220"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="900" height="220" fill="url(#bg)" rx="12"/>

  <!-- Subtle grid lines -->
  <g opacity="0.04" stroke="#a78bfa" stroke-width="1">
    <line x1="0" y1="40" x2="900" y2="40"/>
    <line x1="0" y1="80" x2="900" y2="80"/>
    <line x1="0" y1="120" x2="900" y2="120"/>
    <line x1="0" y1="160" x2="900" y2="160"/>
    <line x1="0" y1="200" x2="900" y2="200"/>
    <line x1="150" y1="0" x2="150" y2="220"/>
    <line x1="300" y1="0" x2="300" y2="220"/>
    <line x1="450" y1="0" x2="450" y2="220"/>
    <line x1="600" y1="0" x2="600" y2="220"/>
    <line x1="750" y1="0" x2="750" y2="220"/>
  </g>

  <!-- Purple glow blob center -->
  <ellipse cx="450" cy="110" rx="200" ry="80" fill="#7c3aed" opacity="0.07" filter="url(#glow)"/>

  <!-- Linux Tux penguin (inline SVG path approximation, colored white/grey like devicons) -->
  <!-- Tux body - simplified iconic shape -->
  <g transform="translate(310, 42) scale(0.72)" filter="url(#penguinGlow)">
    <!-- Body -->
    <ellipse cx="55" cy="105" rx="38" ry="48" fill="#1a1a1a"/>
    <!-- White belly -->
    <ellipse cx="55" cy="112" rx="24" ry="34" fill="#f0f0f0"/>
    <!-- Head -->
    <circle cx="55" cy="48" r="28" fill="#1a1a1a"/>
    <!-- Eyes -->
    <circle cx="45" cy="44" r="5" fill="white"/>
    <circle cx="65" cy="44" r="5" fill="white"/>
    <circle cx="46" cy="44" r="2.5" fill="#1a1a1a"/>
    <circle cx="66" cy="44" r="2.5" fill="#1a1a1a"/>
    <!-- Beak -->
    <polygon points="55,54 48,60 62,60" fill="#f97316"/>
    <!-- Feet -->
    <ellipse cx="42" cy="155" rx="12" ry="6" fill="#f97316" transform="rotate(-15, 42, 155)"/>
    <ellipse cx="68" cy="155" rx="12" ry="6" fill="#f97316" transform="rotate(15, 68, 155)"/>
    <!-- Wings -->
    <ellipse cx="22" cy="100" rx="10" ry="28" fill="#1a1a1a" transform="rotate(-10, 22, 100)"/>
    <ellipse cx="88" cy="100" rx="10" ry="28" fill="#1a1a1a" transform="rotate(10, 88, 100)"/>
  </g>

  <!-- VibeCode text -->
  <text
    x="450"
    y="125"
    text-anchor="middle"
    font-family="Orbitron, 'Space Grotesk', monospace"
    font-size="72"
    font-weight="900"
    fill="url(#textGrad)"
    filter="url(#glow)"
    letter-spacing="3"
  >VibeCode</text>

  <!-- Subtitle -->
  <text
    x="450"
    y="162"
    text-anchor="middle"
    font-family="Inter, sans-serif"
    font-size="15"
    font-weight="400"
    fill="#9ca3af"
    letter-spacing="1"
  >Your Interactive Programming Reference for Beginners</text>

  <!-- Bottom accent line -->
  <rect x="350" y="185" width="200" height="2" rx="1" fill="url(#textGrad)" opacity="0.6"/>

  <!-- Corner decorations -->
  <g opacity="0.15" stroke="#a78bfa" stroke-width="1.5" fill="none">
    <polyline points="15,35 15,15 35,15"/>
    <polyline points="865,35 865,15 845,15"/>
    <polyline points="15,185 15,205 35,205"/>
    <polyline points="865,185 865,205 845,205"/>
  </g>
</svg>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=VibeCode&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Your%20Interactive%20Programming%20Reference%20for%20Beginners&descAlignY=60&descSize=18" width="100%"/>
</p>

<p align="center">
  <a href="https://AceAnomDev.github.io/VibeCode_mini-guide/">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=7C3AED&center=true&vCenter=true&multiline=true&width=600&height=100&lines=🐧+Interactive+Programming+Guide;💡+From+Zero+to+Dev+Hero;🚀+Code.+Learn.+Repeat." alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Language-Multi-blueviolet?style=for-the-badge&logo=polywork&logoColor=white" />
  <img src="https://img.shields.io/badge/Level-Beginner_Friendly-orange?style=for-the-badge&logo=bookstack&logoColor=white" />
  <img src="https://img.shields.io/badge/Theme-Dark_Mode-1a1a2e?style=for-the-badge&logo=nightwatch&logoColor=white" />
</p>

<br/>

---

## 🌟 What is VibeCode?

> **VibeCode** is a sleek, dark-themed interactive mini-guide for beginner developers.  
> No fluff — just clean references, real code examples, and developer tips that actually matter.

Whether you're writing your first `Hello, World!` or trying to remember that one `git` command — **VibeCode has you covered**.

---

## 🗂️ Sections

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://img.shields.io/badge/📁-Programming_Languages-FFD700?style=for-the-badge" /><br/><br/>
      <b>9+ Languages covered</b><br/>
      <sub>Python · JavaScript · Java · Go · Rust · C# and more</sub><br/><br/>
      Real code snippets for every language. Learn syntax, patterns and best practices fast.
    </td>
    <td align="center" width="33%">
      <img src="https://img.shields.io/badge/🐧-Linux_/_Vim_/_VS_Code-4EC9B0?style=for-the-badge" /><br/><br/>
      <b>Dev Tools & Environment</b><br/>
      <sub>Terminal · Vim · VS Code · Hotkeys</sub><br/><br/>
      Master your workspace. Become a keyboard wizard. Ship faster.
    </td>
    <td align="center" width="33%">
      <img src="https://img.shields.io/badge/🚀-Developer_Tips-FF6B6B?style=for-the-badge" /><br/><br/>
      <b>Pro Knowledge Base</b><br/>
      <sub>Git · Regex · Design Patterns · Algorithms</sub><br/><br/>
      The stuff they don't teach in tutorials but every dev needs to know.
    </td>
  </tr>
</table>

---

## 💻 Languages Covered

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" />
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />
</p>

---

## 🛠️ Tools & Tech

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" />
</p>

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/AceAnomDev/VibeCode_mini-guide.git

# Navigate into the project
cd VibeCode_mini-guide

# Open in your browser
open index.html
# or just visit 👇
```

<p align="center">
  <a href="https://AceAnomDev.github.io/VibeCode_mini-guide/">
    <img src="https://img.shields.io/badge/🌐_Visit_Live_Site-7C3AED?style=for-the-badge&logoColor=white" height="45"/>
  </a>
</p>

---

## 📁 Project Structure

```
VibeCode_mini-guide/
├── 📄 index.html          # Main entry point
├── 🎨 style.css           # Dark theme styling
├── ⚡ script.js           # Interactivity & navigation
├── 📁 sections/
│   ├── languages.html     # Programming languages reference
│   ├── linux-vim-vscode.html  # Dev tools guide
│   └── dev-tips.html      # Pro developer tips
└── 📁 assets/             # Icons & images
```

---

## ✨ Features

- 🌙 **Dark mode by default** — easy on the eyes, day or night
- ⚡ **Zero dependencies** — pure HTML, CSS & JS, loads instantly
- 📱 **Responsive design** — works on all screen sizes
- 🔍 **Quick reference** — find what you need in seconds
- 💡 **Beginner-friendly** — clear explanations with real examples
- 🧩 **Modular sections** — jump to exactly what you need

---

## 🤝 Contributing

Contributions are what make the open-source community amazing. Any contributions you make are **greatly appreciated**!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request** 🎉

---

## 📊 Stats

<p align="center">
  <img src="https://img.shields.io/github/stars/AceAnomDev/VibeCode_mini-guide?style=for-the-badge&color=FFD700&logo=star" />
  <img src="https://img.shields.io/github/forks/AceAnomDev/VibeCode_mini-guide?style=for-the-badge&color=4EC9B0" />
  <img src="https://img.shields.io/github/issues/AceAnomDev/VibeCode_mini-guide?style=for-the-badge&color=FF6B6B" />
  <img src="https://img.shields.io/github/last-commit/AceAnomDev/VibeCode_mini-guide?style=for-the-badge&color=7C3AED" />
</p>

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%"/>
</p>

<p align="center">
  Made with 🖤 by <a href="https://github.com/AceAnomDev"><b>AceAnomDev</b></a><br/>
  <sub>⭐ Star this repo if it helped you on your dev journey!</sub>
</p>
