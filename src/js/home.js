// ══════════════════════════════════════
//  LINUX / VIM / VSCODE CONTENT
// ══════════════════════════════════════
function renderLinux(){
  const el = document.getElementById('linuxContent');
  if(el.dataset.rendered) { showSections('#linuxContent'); return; }
  el.dataset.rendered = '1';

  let h = infoHero('🐧', 'Linux / Vim / VS Code', 'Инструменты настоящего разработчика', ['Терминал','Vim','VS Code','Горячие клавиши']);
  h += progressBar();
  h += toc(['Linux — Навигация','Linux — Файлы и права','Linux — Процессы и сеть','Linux — Продвинутое','Vim — Режимы','Vim — Команды','VS Code — Горячие клавиши','VS Code — Полезные трюки']);

  // 1
  h += `<div class="section" id="s1">
    <div class="section-header"><span class="section-num">01</span><h2>Linux — Навигация по файловой системе</h2></div>
    <p class="section-desc">Основные команды для ориентации в файловой системе. Знание этих команд — база любого разработчика.</p>
    ${codeBlock(`# Где я нахожусь?
pwd                        # /home/user/projects

# Список файлов
ls                         # простой список
ls -la                     # подробный + скрытые файлы
ls -lh                     # читаемые размеры (KB, MB)
ls --color=auto *.py       # только .py файлы

# Переход
cd /var/log                # абсолютный путь
cd ~/projects              # ~ = домашняя директория
cd ..                      # на уровень выше
cd -                       # вернуться назад (предыдущая директория)
cd                         # перейти в домашнюю

# Создание директорий
mkdir myproject
mkdir -p a/b/c             # создать с промежуточными
rmdir empty_dir            # удалить пустую`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>Tab — автодополнение пути. Двойной Tab — показать все варианты. Ctrl+L — очистить экран (быстрее чем <code>clear</code>).</span></div>
  </div>`;

  // 2
  h += `<div class="section" id="s2">
    <div class="section-header"><span class="section-num">02</span><h2>Linux — Файлы, права и поиск</h2></div>
    <p class="section-desc">Копирование, перемещение, удаление файлов. Права доступа и поиск по файловой системе.</p>
    ${codeBlock(`# Файловые операции
cp file.txt backup.txt             # копировать
cp -r folder/ backup_folder/       # копировать папку
mv old.txt new.txt                 # переименовать/переместить
rm file.txt                        # удалить файл
rm -rf folder/                     # удалить папку (осторожно!)
touch newfile.txt                  # создать пустой файл

# Просмотр содержимого
cat file.txt                       # вывести всё
less file.txt                      # постраничный просмотр (q — выход)
head -n 20 file.txt                # первые 20 строк
tail -f /var/log/syslog            # следить за логом в реальном времени

# Права доступа
chmod +x script.sh                 # сделать исполняемым
chmod 755 script.sh                # rwxr-xr-x
chown user:group file.txt          # сменить владельца

# Поиск
find . -name "*.py"                # найти .py файлы
find . -newer file.txt             # файлы новее file.txt
grep -r "TODO" ./src               # искать в файлах
grep -n "error" app.log            # с номерами строк`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>chmod 755 = rwxr-xr-x: владелец всё, группа и остальные — только чтение и запуск. <code>find . -name "*.js" | xargs grep "import"</code> — мощная комбинация.</span></div>
  </div>`;

  // 3
  h += `<div class="section" id="s3">
    <div class="section-header"><span class="section-num">03</span><h2>Linux — Процессы и сеть</h2></div>
    <p class="section-desc">Управление процессами, мониторинг системы и базовые сетевые команды.</p>
    ${codeBlock(`# Процессы
ps aux                             # список всех процессов
ps aux | grep python               # найти процесс
kill 1234                          # остановить процесс по PID
kill -9 1234                       # принудительно
pkill python                       # убить по имени
top                                # интерактивный монитор (q — выход)
htop                               # улучшенный top (нужно установить)

# Фоновые процессы
./script.sh &                      # запустить в фоне
jobs                               # список фоновых задач
fg 1                               # вернуть задачу 1 на передний план
Ctrl+Z                             # приостановить текущий процесс
nohup ./server.sh &                # продолжать после закрытия терминала

# Сеть
ping google.com                    # проверить доступность
curl https://api.example.com       # HTTP запрос
curl -X POST -d '{"key":"val"}' URL # POST запрос
wget https://example.com/file.zip  # скачать файл
ss -tulnp                          # открытые порты
netstat -tulnp                     # то же (старый вариант)
ssh user@192.168.1.100             # подключиться по SSH`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>Ctrl+C — остановить текущий процесс. Ctrl+Z — приостановить. <code>kill -9</code> — крайняя мера, процесс не успеет сохранить данные.</span></div>
  </div>`;

  // 4
  h += `<div class="section" id="s4">
    <div class="section-header"><span class="section-num">04</span><h2>Linux — Продвинутые приёмы</h2></div>
    <p class="section-desc">Конвейеры, перенаправление, переменные окружения и удобные трюки для работы в терминале.</p>
    ${codeBlock(`# Конвейеры и перенаправление
ls -la | grep "^d"                 # только директории
cat access.log | sort | uniq -c | sort -rn  # топ строк
command > output.txt               # перезаписать файл
command >> output.txt              # дописать в файл
command 2>&1 | tee log.txt         # stdout+stderr в файл и экран

# Полезные команды
history                            # история команд
!200                               # выполнить команду #200
Ctrl+R                             # поиск в истории
alias ll='ls -la'                  # создать алиас
echo $PATH                         # переменная окружения
export MY_VAR="hello"              # задать переменную
env | grep MY_VAR                  # проверить

# Архивы
tar -czf archive.tar.gz folder/    # создать архив
tar -xzf archive.tar.gz            # распаковать
zip -r archive.zip folder/         # создать zip
unzip archive.zip                  # распаковать zip

# Дисковое пространство
df -h                              # свободное место на дисках
du -sh ./folder                    # размер папки
du -sh * | sort -rh | head -10     # топ-10 самых больших`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>Ctrl+R — незаменимый поиск в истории команд. <code>!!</code> — повторить последнюю команду. <code>sudo !!</code> — повторить с правами root.</span></div>
  </div>`;

  // 5 - Vim modes
  h += `<div class="section" id="s5">
    <div class="section-header"><span class="section-num">05</span><h2>Vim — Режимы работы</h2></div>
    <p class="section-desc">Vim — модальный редактор. Понимание режимов — ключ к его освоению. Сначала странно, потом невозможно от него отказаться.</p>
    <div class="tips-grid">
      <div class="tip-card"><div class="tip-card-title">⚪ Normal (обычный)</div><p>Режим по умолчанию. Навигация, копирование, удаление. Нажми <kbd>Esc</kbd> чтобы войти.</p></div>
      <div class="tip-card"><div class="tip-card-title">✏️ Insert (вставка)</div><p>Ввод текста. Войти: <kbd>i</kbd> перед курсором, <kbd>a</kbd> после, <kbd>o</kbd> новая строка ниже.</p></div>
      <div class="tip-card"><div class="tip-card-title">🔍 Visual (выделение)</div><p>Выделение текста. <kbd>v</kbd> — посимвольно, <kbd>V</kbd> — по строкам, <kbd>Ctrl+V</kbd> — блок.</p></div>
      <div class="tip-card"><div class="tip-card-title">: Command (команды)</div><p>Сохранение, выход, замена. Войти: <kbd>:</kbd> из Normal режима.</p></div>
    </div>
    ${codeBlock(`# Открыть файл
vim file.txt

# Выход из Vim (самый частый вопрос 😄)
:q            # выйти (если нет изменений)
:q!           # выйти без сохранения
:w            # сохранить
:wq или ZZ    # сохранить и выйти
:x            # сохранить (только если есть изменения) и выйти

# Смена режимов
i             # вставка перед курсором
a             # вставка после курсора
I             # вставка в начало строки
A             # вставка в конец строки
o             # новая строка ниже + вставка
O             # новая строка выше + вставка
Esc           # вернуться в Normal`, 'vim', 'vim')}
    <div class="explain"><span class="explain-icon">💡</span><span>Vim открыт на каждом Linux/macOS сервере. Уметь выйти из него и сделать правку — минимум необходимых знаний для разработчика.</span></div>
  </div>`;

  // 6 - Vim commands
  h += `<div class="section" id="s6">
    <div class="section-header"><span class="section-num">06</span><h2>Vim — Навигация и редактирование</h2></div>
    <p class="section-desc">Горячие клавиши Vim делают редактирование молниеносным. Цель — не тянуться к мышке.</p>
    ${subLabel('⌨️','Навигация')}
    ${shortcutTable([
      ['h j k l', 'Влево / вниз / вверх / вправо'],
      ['w / b', 'Следующее / предыдущее слово'],
      ['0 / $', 'Начало / конец строки'],
      ['gg / G', 'Начало / конец файла'],
      ['Ctrl+D / Ctrl+U', 'Пол-экрана вниз / вверх'],
      ['% ', 'Перейти к парной скобке'],
      [':42', 'Перейти на строку 42'],
    ])}
    ${subLabel('✂️','Редактирование')}
    ${shortcutTable([
      ['dd', 'Удалить строку (вырезать)'],
      ['yy', 'Скопировать строку'],
      ['p / P', 'Вставить после / перед курсором'],
      ['u / Ctrl+R', 'Отменить / повторить'],
      ['ciw', 'Изменить слово под курсором'],
      ['di(', 'Удалить содержимое скобок'],
      ['. (точка)', 'Повторить последнее действие'],
      ['>> / <<', 'Отступ вправо / влево'],
    ])}
    ${subLabel('🔍','Поиск и замена')}
    ${codeBlock(`/pattern          # поиск вперёд (n — следующее, N — предыдущее)
?pattern          # поиск назад
*                 # искать слово под курсором
:%s/old/new/g     # заменить все вхождения в файле
:%s/old/new/gc    # заменить с подтверждением
:s/old/new/g      # заменить в текущей строке

# Несколько файлов
:e other.txt      # открыть файл
:split file.txt   # разделить горизонтально
:vsplit file.txt  # разделить вертикально
Ctrl+W + h/j/k/l  # переключение между окнами`, 'vim', 'vim')}
    <div class="explain"><span class="explain-icon">💡</span><span>Команды Vim составные: <code>3dd</code> = удалить 3 строки, <code>5j</code> = вниз 5 строк, <code>d$</code> = удалить до конца строки. Это язык, а не набор горячих клавиш.</span></div>
  </div>`;

  // 7 - VS Code shortcuts
  h += `<div class="section" id="s7">
    <div class="section-header"><span class="section-num">07</span><h2>VS Code — Горячие клавиши</h2></div>
    <p class="section-desc">Знание этих сочетаний минимум утраивает скорость работы в VS Code. Windows/Linux и Mac немного различаются.</p>
    ${subLabel('🔧','Основные (Win/Linux → Mac)')}
    ${shortcutTable([
      ['Ctrl+P → ⌘P', 'Быстрый поиск файла'],
      ['Ctrl+Shift+P → ⌘⇧P', 'Палитра команд (Command Palette)'],
      ['Ctrl+` → ⌃`', 'Открыть/закрыть терминал'],
      ['Ctrl+/ → ⌘/', 'Закомментировать строку / блок'],
      ['Alt+↑↓ → ⌥↑↓', 'Переместить строку вверх/вниз'],
      ['Shift+Alt+↓ → ⇧⌥↓', 'Дублировать строку'],
      ['Ctrl+D → ⌘D', 'Выделить следующее совпадение'],
      ['Ctrl+Shift+L → ⌘⇧L', 'Выделить все совпадения'],
    ])}
    ${subLabel('✨','Редактирование')}
    ${shortcutTable([
      ['Ctrl+Space', 'IntelliSense / автодополнение'],
      ['F12', 'Перейти к определению'],
      ['Alt+F12', 'Посмотреть определение (Peek)'],
      ['Shift+F12', 'Все ссылки на символ'],
      ['F2', 'Переименовать символ (рефакторинг)'],
      ['Ctrl+Shift+K', 'Удалить строку'],
      ['Ctrl+Enter', 'Вставить строку ниже'],
      ['Ctrl+Shift+Enter', 'Вставить строку выше'],
    ])}
    ${subLabel('🪟','Окна и панели')}
    ${shortcutTable([
      ['Ctrl+B', 'Показать/скрыть сайдбар'],
      ['Ctrl+\\', 'Разделить редактор'],
      ['Ctrl+1/2/3', 'Фокус на 1/2/3 группе'],
      ['Ctrl+Tab', 'Переключение между вкладками'],
      ['Ctrl+W', 'Закрыть вкладку'],
      ['Ctrl+Z / Ctrl+Y', 'Отменить / повторить'],
    ])}
    <div class="explain"><span class="explain-icon">💡</span><span>Самая важная комбинация — <kbd>Ctrl+Shift+P</kbd>. Из палитры команд можно сделать буквально всё: установить тему, изменить язык файла, форматировать, запустить задачу.</span></div>
  </div>`;

  // 8 - VS Code tricks
  h += `<div class="section" id="s8">
    <div class="section-header"><span class="section-num">08</span><h2>VS Code — Полезные трюки</h2></div>
    <p class="section-desc">Функции, о которых многие не знают, но которые экономят часы времени.</p>
    <div class="tips-grid">
      <div class="tip-card"><div class="tip-card-title">🖱️ Мультикурсор</div><p><kbd>Alt+Click</kbd> — добавить курсор. <kbd>Ctrl+Alt+↓</kbd> — курсор ниже. Правь несколько мест одновременно.</p></div>
      <div class="tip-card"><div class="tip-card-title">🔍 Regex в поиске</div><p><kbd>Ctrl+H</kbd> → включи <kbd>.*</kbd>. Можно искать с группами: <code>(foo)(bar)</code> → заменить на <code>$2$1</code>.</p></div>
      <div class="tip-card"><div class="tip-card-title">📦 Snippets</div><p>Ctrl+Shift+P → "Snippets". Создай свои сниппеты для повторяющихся блоков кода с <code>$1</code>, <code>$2</code> для точек ввода.</p></div>
      <div class="tip-card"><div class="tip-card-title">🔗 Remote SSH</div><p>Расширение Remote-SSH позволяет работать с файлами на удалённом сервере прямо в VS Code как будто они локальные.</p></div>
      <div class="tip-card"><div class="tip-card-title">🎯 Emmet</div><p>Встроен в VS Code. <code>div.card>h2+p</code> + Tab развернёт в полный HTML. Ускоряет вёрстку в разы.</p></div>
      <div class="tip-card"><div class="tip-card-title">⚡ settings.json</div><p>Ctrl+Shift+P → "Open User Settings JSON". Прямое редактирование конфига быстрее UI настроек.</p></div>
    </div>
    ${codeBlock(`// Полезные настройки в settings.json
{
  "editor.formatOnSave": true,          // форматировать при сохранении
  "editor.tabSize": 2,                  // размер таба
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', monospace",
  "editor.minimap.enabled": false,      // убрать миникарту
  "editor.wordWrap": "on",             // перенос строк
  "files.autoSave": "onFocusChange",   // автосохранение
  "terminal.integrated.defaultProfile.linux": "zsh",
  "editor.bracketPairColorization.enabled": true,
  "editor.stickyScroll.enabled": true  // закреплять текущий scope
}`, 'json', 'settings.json')}
    <div class="explain"><span class="explain-icon">💡</span><span>Топ расширения: ESLint, Prettier, GitLens, GitHub Copilot, REST Client, Docker, Thunder Client, Error Lens, Path Intellisense.</span></div>
  </div>`;

  h += booksSection(["The Linux Command Line — William Shotts","Linux Bible — Christopher Negus","How Linux Works — Brian Ward","Practical Vim — Drew Neil","Pro Git — Scott Chacon"]);

  el.innerHTML = h;
  hljs.highlightAll();
  addCopyButtons();
  showSections('#linuxContent');
  setTimeout(()=>{ const f=document.getElementById('progressFill'); if(f) f.style.width='100%'; }, 200);
}