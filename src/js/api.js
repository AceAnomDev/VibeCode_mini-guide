// ══════════════════════════════════════
//  TRICKS CONTENT
// ══════════════════════════════════════
function renderTricks(){
  const el = document.getElementById('tricksContent');
  if(el.dataset.rendered) { showSections('#tricksContent'); return; }
  el.dataset.rendered = '1';

  let h = infoHero('🚀', 'Фишки программиста', 'Git, регулярки, паттерны и советы для продуктивности', ['Git','Regex','Паттерны','Алгоритмы','Продуктивность']);
  h += progressBar();
  h += toc(['Git — Основы и трюки','Git — Продвинутое','Регулярные выражения','SSH и безопасность','Паттерны проектирования','Big O сложность','Debugging трюки','Продуктивность разработчика']);

  // 1 - Git basics
  h += `<div class="section" id="s1">
    <div class="section-header"><span class="section-num">01</span><h2>Git — Основы и ежедневные команды</h2></div>
    <p class="section-desc">Git — обязательный инструмент каждого разработчика. Эти команды используются каждый день.</p>
    ${codeBlock(`# Настройка (один раз)
git config --global user.name "Имя Фамилия"
git config --global user.email "you@example.com"
git config --global core.editor "code --wait"   # VS Code как редактор

# Старт проекта
git init                           # создать новый репозиторий
git clone https://github.com/x/y  # клонировать

# Базовый рабочий цикл
git status                         # что изменилось?
git add file.txt                   # добавить в индекс
git add .                          # добавить всё
git add -p                         # интерактивно выбрать куски
git commit -m "feat: add login"    # зафиксировать
git commit --amend                 # исправить последний коммит

# Ветки
git branch                         # список веток
git branch feature/auth            # создать ветку
git checkout feature/auth          # переключиться
git checkout -b feature/auth       # создать + переключиться
git switch -c feature/auth         # современный синтаксис
git merge feature/auth             # слить в текущую
git branch -d feature/auth         # удалить ветку

# Удалённый репозиторий
git push origin main               # отправить
git pull                           # получить изменения
git fetch --all                    # получить без слияния`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>Конвенция коммитов: <code>feat:</code> новое, <code>fix:</code> баг, <code>docs:</code> документация, <code>refactor:</code> рефакторинг. Один коммит = одна логическая задача.</span></div>
  </div>`;

  // 2 - Git advanced
  h += `<div class="section" id="s2">
    <div class="section-header"><span class="section-num">02</span><h2>Git — Продвинутые трюки</h2></div>
    <p class="section-desc">Команды, которые спасают в сложных ситуациях и делают историю красивой.</p>
    ${codeBlock(`# Откат изменений
git restore file.txt               # отменить изменения в файле
git restore --staged file.txt      # убрать из индекса
git reset --soft HEAD~1            # отменить коммит (изменения остаются)
git reset --hard HEAD~1            # отменить коммит + изменения (опасно!)
git revert abc1234                 # создать коммит-отмену (безопаснее reset)

# Stash — временно спрятать изменения
git stash                          # спрятать
git stash push -m "WIP: auth"      # с именем
git stash pop                      # применить + удалить
git stash list                     # список
git stash apply stash@{1}          # применить без удаления

# Полезные трюки
git log --oneline --graph --all    # красивый граф веток
git log --author="Анна" --since="2 weeks ago"
git diff HEAD~3                    # что изменилось за 3 коммита
git blame file.txt                 # кто написал каждую строку
git bisect start                   # бинарный поиск бага в истории

# Rebase вместо merge (чистая история)
git rebase main                    # перенести ветку на верхушку main
git rebase -i HEAD~3               # интерактивный rebase (редактировать 3 коммита)
# В редакторе: pick/squash/reword/drop

# Полезный .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
git rm --cached .env               # убрать из git уже добавленный .env`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span><code>git stash</code> — незаменим когда нужно срочно переключиться. <code>git rebase -i</code> перед пушем — хороший тон: делает историю читаемой.</span></div>
  </div>`;

  // 3 - Regex
  h += `<div class="section" id="s3">
    <div class="section-header"><span class="section-num">03</span><h2>Регулярные выражения</h2></div>
    <p class="section-desc">Regex — мощный язык для поиска и замены текста. Работают в большинстве языков, редакторов и утилит.</p>
    ${codeBlock(`# Символы и классы
.          # любой символ (кроме \n)
\d         # цифра [0-9]
\w         # буква, цифра или _ [a-zA-Z0-9_]
\s         # пробел, таб, перенос
\D \W \S   # противоположные (не цифра/слово/пробел)
[abc]      # один из символов a, b, c
[^abc]     # любой кроме a, b, c
[a-z]      # буква от a до z

# Квантификаторы
*          # 0 или более
+          # 1 или более
?          # 0 или 1 (опционально)
{3}        # ровно 3
{2,5}      # от 2 до 5
{3,}       # 3 или более
*? +? ??   # ленивые (минимально возможное)

# Границы
^          # начало строки
$          # конец строки
\b         # граница слова
\B         # не граница слова

# Группы и захват
(abc)      # группа захвата
(?:abc)    # группа без захвата
(?P<name>abc) # именованная группа
a|b        # a или b

# Примеры
^\d{10}$                       # ровно 10 цифр
[\w.-]+@[\w.-]+\.\w{2,}       # email (упрощённый)
https?://[\w./%-]+             # URL
\b\d{4}-\d{2}-\d{2}\b         # дата YYYY-MM-DD
#[0-9a-fA-F]{6}               # HEX цвет`, 'bash', 'regex')}
    ${codeBlock(`# Использование в Python
import re

text = "Телефон: +7-900-123-45-67"

# Поиск
match = re.search(r'\\+?[\\d-]{10,}', text)
if match:
    print(match.group())      # +7-900-123-45-67

# Все совпадения
emails = "a@x.com, b@y.org"
found = re.findall(r'[\\w.]+@[\\w.]+', emails)

# Замена
clean = re.sub(r'\\s+', ' ', "много   пробелов")
print(clean)  # много пробелов

# Разбивка
parts = re.split(r'[,;\\s]+', "a, b; c  d")
print(parts)  # ['a', 'b', 'c', 'd']`, 'python', 'python')}
    <div class="explain"><span class="explain-icon">💡</span><span>Сайт для тестирования: regex101.com — объясняет каждую часть. В Python используй r-строки r"\\d+" чтобы избежать двойного экранирования.</span></div>
  </div>`;

  // 4 - SSH
  h += `<div class="section" id="s4">
    <div class="section-header"><span class="section-num">04</span><h2>SSH и безопасная работа</h2></div>
    <p class="section-desc">SSH — стандарт для удалённой работы с серверами. Ключи безопаснее паролей.</p>
    ${codeBlock(`# Генерация SSH ключей
ssh-keygen -t ed25519 -C "you@example.com"
# Создаёт: ~/.ssh/id_ed25519 (приватный) и id_ed25519.pub (публичный)

# Добавить публичный ключ на сервер
ssh-copy-id user@server.com
# Или вручную:
cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys

# Подключение
ssh user@192.168.1.100             # по IP
ssh -p 2222 user@server.com        # нестандартный порт
ssh -i ~/.ssh/work_key user@server # конкретный ключ

# ~/.ssh/config — настройки для быстрого подключения
Host myserver
    HostName 192.168.1.100
    User admin
    Port 2222
    IdentityFile ~/.ssh/work_key

# Теперь можно: ssh myserver

# SSH туннели
ssh -L 8080:localhost:80 user@server    # проксировать порт
ssh -D 1080 user@server                 # SOCKS прокси

# Копирование файлов
scp file.txt user@server:/path/         # загрузить
scp user@server:/path/file.txt .        # скачать
rsync -avz ./local/ user@server:/path/  # синхронизация`, 'bash', 'bash')}
    <div class="explain"><span class="explain-icon">💡</span><span>ed25519 — современный алгоритм, безопаснее RSA. ~/.ssh/config значительно упрощает работу с несколькими серверами. Никогда не передавай приватный ключ!</span></div>
  </div>`;

  // 5 - Design patterns
  h += `<div class="section" id="s5">
    <div class="section-header"><span class="section-num">05</span><h2>Паттерны проектирования</h2></div>
    <p class="section-desc">Паттерны — проверенные решения типичных задач. Знать их язык важно для работы в команде и на собеседованиях.</p>
    <div class="tips-grid">
      <div class="tip-card"><div class="tip-card-title">🏭 Singleton</div><p>Один экземпляр класса на всю программу. Используется для логгеров, конфигов, пулов соединений.</p></div>
      <div class="tip-card"><div class="tip-card-title">🏗️ Factory</div><p>Создание объектов через метод, а не new. Позволяет изменить тип создаваемого объекта без изменения кода.</p></div>
      <div class="tip-card"><div class="tip-card-title">👀 Observer</div><p>Подписка на события. Объект сообщает подписчикам об изменениях. Основа React state, EventEmitter.</p></div>
      <div class="tip-card"><div class="tip-card-title">🎭 Decorator</div><p>Добавление поведения без изменения класса. Используется в Python (@decorator), middleware в Express.</p></div>
      <div class="tip-card"><div class="tip-card-title">📋 Strategy</div><p>Семейство алгоритмов, взаимозаменяемых во время выполнения. Разные стратегии сортировки, оплаты.</p></div>
      <div class="tip-card"><div class="tip-card-title">🔌 Adapter</div><p>Интерфейс для несовместимых классов. Обёртка над legacy-кодом или сторонней библиотекой.</p></div>
    </div>
    ${codeBlock(`# Observer Pattern на Python
class EventEmitter:
    def __init__(self):
        self._listeners = {}

    def on(self, event, callback):
        self._listeners.setdefault(event, []).append(callback)
        return self  # chaining

    def emit(self, event, *args):
        for cb in self._listeners.get(event, []):
            cb(*args)

# Использование
emitter = EventEmitter()
emitter.on('login', lambda user: print(f"🔑 Вошёл: {user}"))
emitter.on('login', lambda user: print(f"📧 Письмо → {user}"))

emitter.emit('login', 'alice@example.com')
# 🔑 Вошёл: alice@example.com
# 📧 Письмо → alice@example.com`, 'python', 'python')}
    <div class="explain"><span class="explain-icon">💡</span><span>SOLID принципы: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Каждый паттерн помогает соблюдать один из них.</span></div>
  </div>`;

  // 6 - Big O
  h += `<div class="section" id="s6">
    <div class="section-header"><span class="section-num">06</span><h2>Big O — Сложность алгоритмов</h2></div>
    <p class="section-desc">Big O описывает как растёт время/память алгоритма с ростом данных. Важно для собеседований и оптимизации.</p>
    <div class="tips-grid">
      <div class="tip-card"><div class="tip-card-title">⚡ O(1) — Константа</div><p>Не зависит от размера. Доступ к массиву по индексу, хэш-таблица, pop/push стека.</p></div>
      <div class="tip-card"><div class="tip-card-title">📈 O(log n) — Логарифм</div><p>Вдвое меньше данных каждый шаг. Бинарный поиск, сбалансированные деревья.</p></div>
      <div class="tip-card"><div class="tip-card-title">📊 O(n) — Линейная</div><p>Один проход по данным. Линейный поиск, сумма массива, поиск максимума.</p></div>
      <div class="tip-card"><div class="tip-card-title">📐 O(n log n) — Квазилинейная</div><p>Merge sort, Quick sort, Heap sort. Оптимально для сортировок.</p></div>
      <div class="tip-card"><div class="tip-card-title">⚠️ O(n²) — Квадратичная</div><p>Вложенные циклы. Bubble sort, Selection sort. Медленно на больших данных.</p></div>
      <div class="tip-card"><div class="tip-card-title">🚫 O(2ⁿ) — Экспоненциальная</div><p>Рекурсивный Фибоначчи без мемоизации. Растёт невероятно быстро.</p></div>
    </div>
    ${codeBlock(`# Примеры сложности

# O(1) — доступ по индексу
def get_first(arr): return arr[0]

# O(n) — линейный поиск
def find(arr, target):
    for x in arr:                    # n итераций
        if x == target: return True
    return False

# O(n²) — пузырьковая сортировка
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):              # n
        for j in range(n - i - 1): # n
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# O(n log n) — сортировка слиянием
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # log n уровней
    right = merge_sort(arr[mid:])
    return merge(left, right)       # n на каждом уровне

# Оптимизация через мемоизацию: O(2ⁿ) → O(n)
from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)`, 'python', 'python')}
    <div class="explain"><span class="explain-icon">💡</span><span>Структуры данных и их сложность: list lookup O(n), dict/set lookup O(1). Выбор правильной структуры данных важнее оптимизации кода.</span></div>
  </div>`;

  // 7 - Debugging
  h += `<div class="section" id="s7">
    <div class="section-header"><span class="section-num">07</span><h2>Debugging — Трюки для отладки</h2></div>
    <p class="section-desc">Умение отлаживать код — один из важнейших навыков. Эти приёмы помогут находить баги быстрее.</p>
    ${codeBlock(`# Python — pdb (встроенный отладчик)
import pdb
pdb.set_trace()    # поставить точку остановки
# Или в Python 3.7+:
breakpoint()       # то же самое

# Команды pdb:
# n (next) — следующая строка
# s (step) — зайти внутрь функции
# c (continue) — продолжить до следующего breakpoint
# p variable — вывести переменную
# pp variable — pretty print
# l — показать код вокруг
# q — выйти

# JavaScript — debugger в коде
function buggyFunc(data) {
    debugger;  // остановится в DevTools
    return data.filter(x => x > 0);
}

# Полезные print-техники
# Python: f-строки с метаданными
x = [1, 2, 3]
print(f"{x=}")      # x=[1, 2, 3]  ← Python 3.8+
print(f"{len(x)=}") # len(x)=3

# Временное профилирование
import time
start = time.perf_counter()
# ... код ...
print(f"Время: {time.perf_counter() - start:.4f}s")

# Трассировка стека
import traceback
try:
    risky_code()
except Exception:
    traceback.print_exc()  # полный стек`, 'python', 'python')}
    <div class="tips-grid" style="margin-top:14px">
      <div class="tip-card"><div class="tip-card-title">🔎 Бинарный поиск бага</div><p>Закомментируй половину кода. Баг остался? Он в первой половине. Повторяй. Это всегда работает.</p></div>
      <div class="tip-card"><div class="tip-card-title">🦆 Rubber Duck</div><p>Объясни код вслух воображаемой утке. Пока объясняешь — сам понимаешь где ошибка. Реально работает.</p></div>
      <div class="tip-card"><div class="tip-card-title">📝 Логировать, не принтить</div><p>Используй logging вместо print. Уровни DEBUG/INFO/WARNING/ERROR. Можно фильтровать без правки кода.</p></div>
      <div class="tip-card"><div class="tip-card-title">🔄 Воспроизвести минимально</div><p>Создай минимальный пример воспроизводящий баг. Часто в процессе создания уже найдёшь причину.</p></div>
    </div>
    <div class="explain"><span class="explain-icon">💡</span><span>Инструменты: Chrome DevTools (F12), Python debugger (pdb/ipdb), VS Code Debugger (F5). Научись ставить точки останова — это в разы быстрее print-отладки.</span></div>
  </div>`;

  // 8 - Productivity
  h += `<div class="section" id="s8">
    <div class="section-header"><span class="section-num">08</span><h2>Продуктивность разработчика</h2></div>
    <p class="section-desc">Инструменты, привычки и трюки которые реально ускоряют работу.</p>
    ${codeBlock(`# Полезные CLI-утилиты
# Установка через brew (mac) или apt/pacman (linux)

fzf           # нечёткий поиск в файлах и истории
bat           # cat с подсветкой синтаксиса
eza           # современная замена ls
ripgrep (rg)  # быстрее grep
fd            # быстрее find
jq            # обработка JSON в терминале
httpie (http) # удобнее curl
tldr          # упрощённые man-страницы

# Примеры использования
rg "TODO" --type py          # поиск TODO в .py файлах
fd -e js -x prettier --write # форматировать все .js
cat data.json | jq '.users[].name'  # достать поле из JSON
http POST api.example.com/login username=admin password=secret
echo "SELECT * FROM users" | xargs -I{} psql -c {}

# Zsh плагины (oh-my-zsh)
# z — умный cd (запоминает директории)
z projects    # перейдёт в ~/work/my-projects если был там

# Полезные алиасы в ~/.bashrc / ~/.zshrc
alias g='git'
alias gs='git status'
alias gp='git push'
alias dc='docker compose'
alias k='kubectl'
alias py='python3'`, 'bash', 'bash')}
    <div class="tips-grid" style="margin-top:14px">
      <div class="tip-card"><div class="tip-card-title">⏰ Pomodoro</div><p>25 минут фокуса, 5 минут перерыв. Работает лучше всего когда задачи заранее сформулированы.</p></div>
      <div class="tip-card"><div class="tip-card-title">📓 Dev Journal</div><p>Веди дневник: что делал, что не получилось, как решил. Обращаться к нему через месяц — бесценно.</p></div>
      <div class="tip-card"><div class="tip-card-title">🌐 Offline-режим</div><p>Часть самых продуктивных сессий — без интернета. Уведомления и Twitter ждут. Код нет.</p></div>
      <div class="tip-card"><div class="tip-card-title">🤖 Dotfiles</div><p>Храни ~/.bashrc, .vimrc, settings.json в git-репозитории. Новая машина — git clone и ты дома.</p></div>
    </div>
    <div class="explain"><span class="explain-icon">💡</span><span>Главное правило: автоматизируй всё что делаешь больше двух раз. Shell-скрипт, Makefile, CI/CD — неважно как, важно что рутина не занимает время.</span></div>
  </div>`;

  h += booksSection(["The Pragmatic Programmer — Hunt & Thomas","Designing Data-Intensive Applications — Kleppmann","Clean Architecture — Robert Martin","Introduction to Algorithms — CLRS","System Design Interview — Alex Xu","Grokking Algorithms — Aditya Bhargava"]);

  el.innerHTML = h;
  hljs.highlightAll();
  addCopyButtons();
  showSections('#tricksContent');
  setTimeout(()=>{ const f=document.getElementById('progressFill'); if(f) f.style.width='100%'; }, 200);
}