// ══════════════════════════════════════
//  BOOK DATABASE — все книги
// ══════════════════════════════════════
const BOOK_DB = {

  // ── Python ──────────────────────────────────────────────
  "Python Crash Course — Eric Matthes": {
    author: "Eric Matthes", emoji: "🐍", tags: ["Python", "Для начинающих"],
    desc: "Лучшая книга для старта с Python. За первую половину изучаешь язык, за вторую — строишь три реальных проекта: игру, визуализацию данных и веб-приложение. Чёткая структура и доступный язык делают её идеальной точкой входа."
  },
  "Automate the Boring Stuff — Al Sweigart": {
    author: "Al Sweigart", emoji: "🤖", tags: ["Python", "Автоматизация", "Бесплатно"],
    desc: "Практическая книга о том, как использовать Python для автоматизации рутины: работа с файлами и папками, Excel/PDF/Word, веб-скрейпинг, рассылка писем, управление компьютером. Бесплатная на сайте automatetheboringstuff.com. Меняет взгляд на ежедневные задачи."
  },
  "Fluent Python — Luciano Ramalho": {
    author: "Luciano Ramalho", emoji: "🌊", tags: ["Python", "Продвинутый"],
    desc: "Одна из лучших книг по Python для тех, кто уже знает основы. Раскрывает идиомы языка: протоколы данных, итераторы, генераторы, декораторы, конкурентность. После прочтения начинаешь писать настоящий питоновский код."
  },
  "Learning Python — Mark Lutz": {
    author: "Mark Lutz", emoji: "📘", tags: ["Python", "Основы", "Исчерпывающий"],
    desc: "Самая полная книга по основам Python — более 1500 страниц. Подробно разбирает каждую конструкцию языка снизу вверх: типы, функции, классы, модули, исключения. Подходит как учебник и как справочник."
  },
  "Python Tricks — Dan Bader": {
    author: "Dan Bader", emoji: "🎩", tags: ["Python", "Трюки", "Best practices"],
    desc: "Коллекция конкретных приёмов для написания лучшего Python-кода: замыкания, декораторы, структуры данных, ООП, строки, работа с файлами. Лёгкий читаемый стиль. Хорошо переводит с джуниора на мидла."
  },

  // ── JavaScript ──────────────────────────────────────────
  "Eloquent JavaScript — Marijn Haverbeke": {
    author: "Marijn Haverbeke", emoji: "📜", tags: ["JavaScript", "Бесплатно"],
    desc: "Элегантное погружение в JavaScript и программирование в целом. Сочетает теорию с практическими проектами: игры, парсеры, рисование на Canvas, HTTP-сервер. Бесплатная на eloquentjavascript.net. Прекрасный стиль изложения."
  },
  "You Don't Know JS — Kyle Simpson": {
    author: "Kyle Simpson", emoji: "🔬", tags: ["JavaScript", "Глубоко", "Бесплатно"],
    desc: "Серия из 6 книг, которая вскрывает механику JavaScript изнутри: замыкания, прототипы, this, типы, async/await, ES6+. После неё JS перестаёт казаться магией. Бесплатная на GitHub. Обязательна для серьёзного фронтенд-разработчика."
  },
  "JavaScript: The Definitive Guide": {
    author: "David Flanagan", emoji: "📗", tags: ["JavaScript", "Справочник"],
    desc: "Монументальный справочник по JavaScript от O'Reilly — более 700 страниц. Охватывает весь язык от синтаксиса до Web API, Node.js и TypeScript. Хорошая настольная книга для поиска деталей и глубокого понимания стандарта."
  },
  "JavaScript Good Parts — Douglas Crockford": {
    author: "Douglas Crockford", emoji: "✨", tags: ["JavaScript", "Классика"],
    desc: "Небольшая, но культовая книга. Crockford выбирает лучшие части JavaScript и объясняет, почему некоторые фичи языка лучше избегать. Обязательна к прочтению для понимания философии JS и его опасных мест."
  },
  "JavaScript & JQuery — Jon Duckett": {
    author: "Jon Duckett", emoji: "🎨", tags: ["JavaScript", "Визуальная", "jQuery"],
    desc: "Красиво оформленная визуальная книга по JavaScript и jQuery. Идеальна для начинающих веб-разработчиков: понятные схемы, примеры кода, цветные иллюстрации. Объясняет DOM-манипуляции, события, AJAX и основы jQuery."
  },

  // ── Java ────────────────────────────────────────────────
  "Head First Java — Sierra & Bates": {
    author: "Kathy Sierra & Bert Bates", emoji: "🧠", tags: ["Java", "Для начинающих"],
    desc: "Визуальная книга для изучения Java с нуля. Паззлы, комиксы и упражнения делают обучение нескучным. Отличный способ войти в ООП и Java без скуки. Охватывает всё от синтаксиса до потоков и сетей."
  },
  "Effective Java — Joshua Bloch": {
    author: "Joshua Bloch", emoji: "☕", tags: ["Java", "Best practices"],
    desc: "Библия Java-разработчика. 90 проверенных правил написания правильного, надёжного и понятного Java-кода. Автор — один из создателей самого языка. Охватывает API-дизайн, обобщения, параллелизм, исключения. Обязательна для каждого Java-разработчика."
  },
  "Java: The Complete Reference — Schildt": {
    author: "Herbert Schildt", emoji: "📕", tags: ["Java", "Справочник", "Полный курс"],
    desc: "Исчерпывающий справочник по Java от эксперта Oracle. Охватывает весь язык: синтаксис, ООП, дженерики, коллекции, ввод-вывод, сетевые сокеты, JavaFX, лямбды, streams. Хорошая настольная книга для разработчика любого уровня."
  },
  "Thinking in Java — Bruce Eckel": {
    author: "Bruce Eckel", emoji: "🤔", tags: ["Java", "Концептуальная"],
    desc: "Глубокая концептуальная книга по Java. Не просто 'как использовать', а 'почему так устроено'. Рассматривает ООП, обобщённое программирование, многопоточность через призму дизайна языка. Бесплатна онлайн. Формирует правильное мышление."
  },
  "Clean Code — Robert Martin": {
    author: "Robert C. Martin", emoji: "🧹", tags: ["Универсальная", "Архитектура"],
    desc: "Культовая книга о написании читаемого, поддерживаемого кода. Примеры на Java, но идеи универсальны для любого языка. Правила именования, функций, классов, комментариев и рефакторинга. Меняет отношение к качеству кода."
  },

  // ── C / C++ ─────────────────────────────────────────────
  "The C Programming Language — K&R": {
    author: "Kernighan & Ritchie", emoji: "🏛️", tags: ["C", "Классика"],
    desc: "Книга от создателей языка C. Краткая, точная, культовая. Несмотря на возраст (1978), остаётся лучшим введением в C. Каждое предложение взвешено. Код в книге — образцовый. Прочитать хотя бы один раз обязательно каждому разработчику."
  },
  "C Programming Absolute Beginner": {
    author: "Greg Perry & Dean Miller", emoji: "🔰", tags: ["C", "Для начинающих"],
    desc: "Самое мягкое введение в программирование на C. Объясняет каждую концепцию с нуля: переменные, циклы, функции, указатели, массивы. Много примеров и упражнений. Отличная точка входа для тех, кто никогда не программировал."
  },
  "C++ Primer — Lippman": {
    author: "Stanley Lippman", emoji: "📕", tags: ["C++", "Основы"],
    desc: "Самое полное введение в C++. Охватывает весь современный C++ (C++11/14): STL, шаблоны, управление памятью, исключения, перегрузку операторов. Большая, но исчерпывающая. Хороший баланс теории и практики."
  },
  "Effective C++ — Scott Meyers": {
    author: "Scott Meyers", emoji: "🔧", tags: ["C++", "Best practices"],
    desc: "55 конкретных способов улучшить ваши программы и проекты на C++. Охватывает управление ресурсами, конструирование объектов, наследование, шаблоны. Классика жанра, дополненная книгой 'Effective Modern C++' для C++11/14."
  },
  "Programming: Principles & Practice (C++)": {
    author: "Bjarne Stroustrup", emoji: "📚", tags: ["C++", "Обучение"],
    desc: "Учебник для начинающих от создателя C++. Учит программированию в целом используя C++ как инструмент. Больше о принципах мышления, чем о деталях языка. Содержит реальные проекты: калькулятор, графику, встроенные системы."
  },

  // ── Go ──────────────────────────────────────────────────
  "The Go Programming Language — Donovan": {
    author: "Donovan & Kernighan", emoji: "🐹", tags: ["Go", "Основы"],
    desc: "Лучшая книга по Go. Написана в соавторстве с Kernighan (автором K&R). Покрывает весь язык с реальными примерами: веб-серверы, парсеры, параллелизм через goroutines и channels. Чёткая, элегантная, исчерпывающая."
  },
  "Go in Action — Kennedy & Ketelsen": {
    author: "Kennedy, Ketelsen, Martin", emoji: "⚡", tags: ["Go", "Практика"],
    desc: "Практическое погружение в Go с реальными проектами на каждой главе. Рассматривает goroutines, channels, стандартную библиотеку, тестирование, работу с пакетами. Хорошо дополняет официальную книгу Donovan & Kernighan."
  },
  "Learning Go — Jon Bodner": {
    author: "Jon Bodner", emoji: "📗", tags: ["Go", "Идиомы"],
    desc: "Современное введение в Go для разработчиков, знакомых с другими языками. Объясняет идиоматичный Go: типы, интерфейсы, обработка ошибок, concurrency, дженерики (Go 1.18+). Хорошо объясняет причины дизайнерских решений языка."
  },
  "Introducing Go — Caleb Doxsey": {
    author: "Caleb Doxsey", emoji: "🌱", tags: ["Go", "Для начинающих"],
    desc: "Небольшое и доступное введение в Go. Охватывает синтаксис, типы, функции, структуры, интерфейсы, пакеты и горутины. Идеально для тех, кто хочет быстро освоить основы Go без лишней сложности."
  },
  "100 Go Mistakes — Teiva Harsanyi": {
    author: "Teiva Harsanyi", emoji: "🚫", tags: ["Go", "Ошибки", "Продвинутый"],
    desc: "100 типичных ошибок Go-разработчиков и как их избежать. Охватывает типы, strings, функции, обработку ошибок, concurrency, производительность, тестирование. Уникальный формат: каждый урок — реальная ошибка из практики."
  },

  // ── PHP ─────────────────────────────────────────────────
  "PHP & MySQL Web Development — Luke Welling": {
    author: "Luke Welling", emoji: "🗄️", tags: ["PHP", "MySQL"],
    desc: "Классическое введение в связку PHP+MySQL. Строит реальные проекты: систему авторизации, корзину, загрузку файлов, AJAX-запросы. Охватывает безопасность, сессии, cookies. Хорошая отправная точка для веб-разработки."
  },
  "Learning PHP, MySQL & JS — Robin Nixon": {
    author: "Robin Nixon", emoji: "🌐", tags: ["PHP", "MySQL", "JavaScript"],
    desc: "Полный стек для веба: PHP, MySQL, JavaScript, CSS и Ajax в одной книге. Строит динамический социальный сервис от начала до конца. Хороший выбор для тех, кто хочет освоить весь фронтенд+бэкенд в связке."
  },
  "PHP Cookbook — Adam Trachtenberg": {
    author: "Adam Trachtenberg & David Sklar", emoji: "🍳", tags: ["PHP", "Рецепты"],
    desc: "Сотни практических рецептов для решения реальных PHP-задач: работа со строками, массивами, датами, файлами, базами данных, сетью. Формат 'проблема → решение → обсуждение' делает книгу отличным справочником."
  },
  "Modern PHP — Josh Lockhart": {
    author: "Josh Lockhart", emoji: "🐘", tags: ["PHP", "Современный"],
    desc: "Фокус на современном PHP 7+: namespaces, traits, closures, PSR-стандарты, Composer, тестирование PHPUnit, профилирование. Помогает уйти от устаревшего стиля PHP к профессиональному. Автор — создатель Slim Framework."
  },
  "PHP 8 Objects, Patterns — Matt Zandstra": {
    author: "Matt Zandstra", emoji: "🏗️", tags: ["PHP", "Паттерны", "ООП"],
    desc: "Трёхчастная книга: ООП в PHP (классы, интерфейсы, трейты), паттерны проектирования GoF с примерами на PHP, инструменты (PHPUnit, Git, Composer, Doctrine). Одна из самых структурированных книг по PHP для профессионалов."
  },

  // ── TypeScript ──────────────────────────────────────────
  "Programming TypeScript — Boris Cherny": {
    author: "Boris Cherny", emoji: "🔷", tags: ["TypeScript", "Основы"],
    desc: "Лучшее введение в TypeScript. Покрывает систему типов, дженерики, классы, продвинутые типы, работу с ошибками, декораторы. Написана чётко и с юмором. Идеально для перехода с JavaScript на TypeScript."
  },
  "Effective TypeScript — Dan Vanderkam": {
    author: "Dan Vanderkam", emoji: "✅", tags: ["TypeScript", "Best practices"],
    desc: "62 конкретных способа улучшить свой TypeScript-код. Типизация, работа с any, type guards, conditional types, mapped types, работа с внешними API. Аналог Effective Java, но для TypeScript. Обязательна для продвинутого уровня."
  },
  "TypeScript Handbook (бесплатно, официальный)": {
    author: "Команда TypeScript / Microsoft", emoji: "📋", tags: ["TypeScript", "Официальный", "Бесплатно"],
    desc: "Официальная документация TypeScript, написанная командой Microsoft. Подробно объясняет все концепции языка: типы, интерфейсы, дженерики, декораторы, модули. Бесплатна на typescriptlang.org. Лучший справочник для ежедневного использования."
  },
  "Learning TypeScript — Josh Goldberg": {
    author: "Josh Goldberg", emoji: "📗", tags: ["TypeScript", "Для начинающих"],
    desc: "Современное введение в TypeScript от O'Reilly с постепенным нарастанием сложности. От базовых аннотаций до дженериков и дизайна системы типов. Много упражнений. Хорошо структурированная книга для тех, кто переходит с JS."
  },
  "TypeScript Deep Dive — Basarat Ali": {
    author: "Basarat Ali Syed", emoji: "🏊", tags: ["TypeScript", "Бесплатно", "Продвинутый"],
    desc: "Бесплатная онлайн-книга с глубоким разбором TypeScript на basarat.gitbook.io. Система типов, компилятор tsc, интеграция с React/Node, декораторы, продвинутые паттерны. Постоянно обновляется. Один из лучших бесплатных ресурсов."
  },

  // ── Rust ────────────────────────────────────────────────
  "The Rust Programming Language (бесплатно!)": {
    author: "Steve Klabnik & Carol Nichols", emoji: "🦀", tags: ["Rust", "Основы", "Бесплатно"],
    desc: "Официальная книга Rust, написанная командой языка. Ownership, borrowing, lifetimes, traits, generics, concurrency. Лучшая точка входа в Rust. Бесплатна на doc.rust-lang.org. Сочетает глубину с доступностью изложения."
  },
  "Rust in Action — Tim McNamara": {
    author: "Tim McNamara", emoji: "🔩", tags: ["Rust", "Практика", "Системное"],
    desc: "Изучение Rust через системное программирование: файловые системы, работа с памятью, сети, многопоточность, взаимодействие с CPU. Строит реальные утилиты. Помогает понять, почему Rust устроен именно так."
  },
  "Programming Rust — Blandy & Orendorff": {
    author: "Jim Blandy & Jason Orendorff", emoji: "⚙️", tags: ["Rust", "Углублённо"],
    desc: "Исчерпывающее погружение в Rust. Более глубокое, чем официальная книга. Детально рассматривает систему владения, шаблоны, асинхронность, unsafe Rust, FFI, производительность. Для серьёзного изучения языка."
  },
  "Rust for Rustaceans — Jon Gjengset": {
    author: "Jon Gjengset", emoji: "🎓", tags: ["Rust", "Продвинутый"],
    desc: "Для тех, кто уже знает основы Rust. Продвинутые типы, traits, lifetime elision, unsafe, async, FFI, макросы, тестирование. Объясняет 'почему' стоит за решениями языка. Лучшая книга для перехода на продвинутый уровень."
  },
  "Zero To Production In Rust — Luca Palmieri": {
    author: "Luca Palmieri", emoji: "🚀", tags: ["Rust", "Web", "Production"],
    desc: "Строит production-ready веб-приложение на Rust с нуля: Actix-web, SQLx, PostgreSQL, тестирование, CI/CD, деплой на DigitalOcean. Один из лучших примеров Rust в реальном production-контексте. Полностью практическая."
  },

  // ── Swift ───────────────────────────────────────────────
  "Swift Programming Language (бесплатно, Apple)": {
    author: "Apple Inc.", emoji: "🍎", tags: ["Swift", "Официальный", "Бесплатно"],
    desc: "Официальная документация Swift от Apple. Подробно объясняет весь язык: типы, функции, классы, протоколы, дженерики, concurrency, error handling. Бесплатна в Apple Books и на docs.swift.org. Актуальна для последней версии языка."
  },
  "Swift in Depth — Tjeerd in 't Veen": {
    author: "Tjeerd in 't Veen", emoji: "🔭", tags: ["Swift", "Продвинутый"],
    desc: "Охватывает продвинутые концепции Swift: дженерики, протокол-ориентированное программирование, функциональные паттерны, управление состоянием. Помогает перейти с 'просто работает' на 'написано правильно'. Отличная книга для iOS/macOS разработчика."
  },
  "iOS Programming — Big Nerd Ranch": {
    author: "Christian Keur & Aaron Hillegass", emoji: "📱", tags: ["Swift", "iOS"],
    desc: "Лучшая практическая книга по iOS разработке. Строит несколько приложений с нуля шаг за шагом. UIKit, Auto Layout, Core Data, сетевые запросы, таблицы, навигация. Фундаментальный курс для профессионального iOS разработчика."
  },
  "Hacking with Swift — Paul Hudson": {
    author: "Paul Hudson", emoji: "🔨", tags: ["Swift", "Проекты"],
    desc: "100+ Swift и iOS проектов для изучения языка на практике. Охватывает SwiftUI и UIKit, анимации, сети, базы данных, AR. Материалы бесплатны на hackingwithswift.com. Отличный способ учиться создавая реальные приложения."
  },
  "Modern Concurrency in Swift — Marin Todorov": {
    author: "Marin Todorov", emoji: "🔀", tags: ["Swift", "Concurrency", "async/await"],
    desc: "Погружение в современную модель параллелизма Swift (async/await, Actor, Task, AsyncStream). Объясняет, как правильно писать асинхронный код без callback-hell. Обязательна для разработчика после Swift 5.5."
  },

  // ── Kotlin ──────────────────────────────────────────────
  "Kotlin in Action — Jemerov & Isakova": {
    author: "Dmitry Jemerov & Svetlana Isakova", emoji: "🎯", tags: ["Kotlin", "Основы"],
    desc: "Лучшая книга по Kotlin, написанная командой JetBrains — создателями языка. Синтаксис, null-safety, функциональный стиль, DSL, coroutines. Обязательна для любого Kotlin-разработчика. Отлично объясняет преимущества над Java."
  },
  "Atomic Kotlin — Eckel & Isakova": {
    author: "Bruce Eckel & Svetlana Isakova", emoji: "⚛️", tags: ["Kotlin", "Для начинающих"],
    desc: "Пошаговое введение в Kotlin от Bruce Eckel (автора Thinking in Java). Небольшие атомарные главы с упражнениями делают обучение постепенным. Идеально для начинающих программистов и тех, кто переходит с Java."
  },
  "Head First Kotlin — Griffiths": {
    author: "Dawn & David Griffiths", emoji: "🧠", tags: ["Kotlin", "Для начинающих"],
    desc: "Визуальное введение в Kotlin. Использует головоломки, диалоги и проекты для объяснения концепций. Покрывает всё от синтаксиса до лямбд и generics. Отличная точка входа в Kotlin для тех, кто предпочитает интерактивный стиль."
  },
  "Kotlin Programming: Big Nerd Ranch Guide": {
    author: "Josh Skeen & David Greenhalgh", emoji: "📗", tags: ["Kotlin", "Практика"],
    desc: "Практический курс по Kotlin от Big Nerd Ranch. Покрывает функции, лямбды, объекты, классы данных, extensions, generics. Включает задания и проекты. Хорошо сбалансированная книга для системного изучения языка."
  },
  "Kotlin Coroutines Deep Dive — Moskała": {
    author: "Marcin Moskała", emoji: "🌀", tags: ["Kotlin", "Coroutines", "Продвинутый"],
    desc: "Самая полная книга по Kotlin Coroutines. Suspend functions, channels, flows, structured concurrency, dispatcher'ы, тестирование. Автор — ведущий разработчик и преподаватель экосистемы Kotlin. Обязательна для любого Android/backend Kotlin разработчика."
  },

  // ── Ruby ────────────────────────────────────────────────
  "Programming Ruby — Dave Thomas": {
    author: "Dave Thomas", emoji: "💎", tags: ["Ruby", "Основы"],
    desc: "'Pickaxe book' — классическое введение в Ruby. Охватывает весь язык: блоки, модули, метапрограммирование, стандартную библиотеку. Написана с юмором и любовью к языку. Долгое время была единственной серьёзной книгой по Ruby."
  },
  "The Well-Grounded Rubyist — David Black": {
    author: "David Black", emoji: "🌱", tags: ["Ruby", "Глубоко"],
    desc: "Глубокое понимание объектной модели Ruby изнутри: scope, идентификаторы, блоки, procs, lambdas, модули, классы. Лучшая книга для понимания как Ruby действительно работает. После неё многие паттерны становятся очевидны."
  },
  "Eloquent Ruby — Russ Olsen": {
    author: "Russ Olsen", emoji: "✒️", tags: ["Ruby", "Идиомы"],
    desc: "Учит писать Ruby в стиле Ruby. Идиомы, DSL, метапрограммирование (method_missing, define_method), написание gem-пакетов. После прочтения перестаёшь писать Java-стиль на Ruby и начинаешь использовать всю мощь языка."
  },
  "Practical Object-Oriented Design — Sandi Metz": {
    author: "Sandi Metz", emoji: "🏗️", tags: ["Ruby", "ООП", "Архитектура"],
    desc: "Культовая книга по ООП-дизайну с примерами на Ruby. Принципы SOLID, управление зависимостями, наследование vs композиция, утиная типизация, тестирование. Идеи применимы в любом объектно-ориентированном языке."
  },
  "Rails Tutorial — Michael Hartl": {
    author: "Michael Hartl", emoji: "🚄", tags: ["Ruby", "Rails", "Бесплатно"],
    desc: "Лучшее введение в Ruby on Rails. Строит полноценный Twitter-клон с нуля: MVC, ActiveRecord, Bootstrap, тестирование, деплой на Heroku. Бесплатен онлайн на railstutorial.org. Стандарт обучения Rails с 2010 года."
  },

  // ── C# ──────────────────────────────────────────────────
  "C# in Depth — Jon Skeet": {
    author: "Jon Skeet", emoji: "🔷", tags: ["C#", "Продвинутый"],
    desc: "Культовая книга по C#. Автор — самый известный эксперт C# на StackOverflow. Подробно разбирает каждую версию языка с историей решений. Дженерики, LINQ, async/await, dynamic. Лучшая книга для перехода на уровень эксперта."
  },
  "Pro C# 10 — Andrew Troelsen": {
    author: "Andrew Troelsen", emoji: "📗", tags: ["C#", "Полный курс"],
    desc: "Исчерпывающий справочник по C# и .NET. Более 1700 страниц охватывают всё: от основ до WPF, gRPC, Entity Framework, Blazor, микросервисов. Хорошая настольная книга для разработчика, которому нужен полный охват платформы."
  },
  "Head First C# — Greene & Stellman": {
    author: "Andrew Stellman & Jennifer Greene", emoji: "🧠", tags: ["C#", "Для начинающих"],
    desc: "Визуальное введение в C# с проектами, паззлами и играми. Строит несколько приложений в процессе обучения. Охватывает ООП, LINQ, обработку ошибок. Лучшая книга для входа в C# с нуля, без скуки."
  },
  "C# Programming Yellow Book — Rob Miles": {
    author: "Rob Miles", emoji: "📒", tags: ["C#", "Бесплатно"],
    desc: "Бесплатная вводная книга в C# с отличным британским юмором. Объясняет программирование через C#: переменные, методы, классы, файлы. Популярна как учебный материал в университетах. Скачать можно на robmiles.com."
  },
  "CLR via C# — Jeffrey Richter": {
    author: "Jeffrey Richter", emoji: "⚙️", tags: ["C#", "Internals", "Продвинутый"],
    desc: "Глубокое погружение в CLR (Common Language Runtime). Управление памятью, сборщик мусора, потоки, исключения, сборки изнутри. Для тех, кто хочет понять .NET на системном уровне. Незаменима для написания высокопроизводительного C# кода."
  },

  // ── Linux / Vim / Git ────────────────────────────────────
  "The Linux Command Line — William Shotts": {
    author: "William Shotts", emoji: "🐧", tags: ["Linux", "Бесплатно"],
    desc: "Лучшее введение в командную строку Linux. Bash, файловая система, процессы, скрипты, регулярные выражения, управление пакетами. Бесплатна онлайн на linuxcommand.org. Покрывает всё что нужно разработчику для уверенной работы в терминале."
  },
  "Linux Bible — Christopher Negus": {
    author: "Christopher Negus", emoji: "📖", tags: ["Linux", "Полный курс"],
    desc: "Исчерпывающий справочник по Linux. Установка, файловая система, командная строка, сети, безопасность, скриптинг, контейнеры. Регулярно обновляется под актуальные дистрибутивы (RHEL, Ubuntu, Fedora). Хорошая настольная книга сисадмина и разработчика."
  },
  "How Linux Works — Brian Ward": {
    author: "Brian Ward", emoji: "🔧", tags: ["Linux", "Internals"],
    desc: "Объясняет как Linux работает изнутри: boot процесс, ядро, устройства, сети, процессы, файловые системы. После прочтения Linux перестаёт быть чёрным ящиком. Незаменима для понимания системного администрирования и отладки."
  },
  "Practical Vim — Drew Neil": {
    author: "Drew Neil", emoji: "✏️", tags: ["Vim", "Практика"],
    desc: "Лучшая книга по Vim. 120 конкретных советов для мастерства. Объясняет Vim как язык команд, а не набор горячих клавиш. Dot formula, macros, registers, text objects, splits. Автор также создал популярные скринкасты vimcasts.org."
  },
  "Pro Git — Scott Chacon": {
    author: "Scott Chacon & Ben Straub", emoji: "🌿", tags: ["Git", "Бесплатно"],
    desc: "Официальная книга по Git. Бесплатна на git-scm.com на 10+ языках. Охватывает всё: от основ до internals (.git folder, объектная модель). Ветки, rebase, stash, submodules, хуки. Стандарт документации по Git."
  },

  // ── Tricks / Universal ──────────────────────────────────
  "The Pragmatic Programmer — Hunt & Thomas": {
    author: "Andrew Hunt & David Thomas", emoji: "🔨", tags: ["Карьера", "Классика"],
    desc: "Культовая книга о профессиональном программировании. DRY, YAGNI, ортогональность, автоматизация, debugging, прагматичный подход к задачам. Не привязана к языку или технологии. Обязательна для каждого разработчика хотя бы раз в карьере."
  },
  "Designing Data-Intensive Applications — Kleppmann": {
    author: "Martin Kleppmann", emoji: "🗄️", tags: ["Системы", "Продвинутый"],
    desc: "Лучшая книга о проектировании систем работы с данными. Базы данных, репликация, партиционирование, транзакции, distributed systems, stream processing. Огромная глубина при хорошей читаемости. Обязательна для senior-инженера."
  },
  "Clean Architecture — Robert Martin": {
    author: "Robert C. Martin", emoji: "🏛️", tags: ["Архитектура", "Классика"],
    desc: "Принципы дизайна и архитектуры программного обеспечения. SOLID, компонентный дизайн, границы системы, Clean Architecture pattern, независимость от фреймворков. От автора Clean Code. Меняет подход к проектированию приложений."
  },
  "Introduction to Algorithms — CLRS": {
    author: "Cormen, Leiserson, Rivest, Stein", emoji: "📐", tags: ["Алгоритмы", "Учебник"],
    desc: "Академический стандарт по алгоритмам. Сортировки, графы, динамическое программирование, жадные алгоритмы, NP-полнота. Строгий, математический, исчерпывающий. Называемый 'Cormen' — это 'Cormen' в мире Computer Science."
  },
  "System Design Interview — Alex Xu": {
    author: "Alex Xu", emoji: "🏗️", tags: ["Собеседования", "Системы"],
    desc: "Практическое руководство по проектированию систем на интервью. URL shortener, Twitter, YouTube, чат, поисковик. Для каждой системы — пошаговый разбор с trade-offs. Самая популярная книга по System Design Interview."
  },
  "Grokking Algorithms — Aditya Bhargava": {
    author: "Aditya Bhargava", emoji: "🎨", tags: ["Алгоритмы", "Иллюстрированная"],
    desc: "Визуальное введение в алгоритмы и структуры данных с отличными иллюстрациями. Бинарный поиск, связные списки, сортировки, хэш-таблицы, графы, динамическое программирование. Лёгкий язык. Отличная первая книга по алгоритмам."
  }
};

function openBookModal(bookName){
  const data = BOOK_DB[bookName];
  const overlay = document.getElementById('bookModalOverlay');
  const modal = document.getElementById('bookModal');

  if(!data){
    modal.innerHTML = `<button class="book-modal-close" onclick="closeBookModal()">✕</button>
      <div class="book-modal-icon">📖</div>
      <div class="book-modal-title">${bookName.split(' — ')[0]}</div>
      <div class="book-modal-author">${bookName.includes(' — ') ? '✍️ ' + bookName.split(' — ')[1] : ''}</div>
      <div class="book-modal-desc" style="margin-top:16px">Подробное описание этой книги скоро появится.</div>`;
  } else {
    const tags = data.tags.map(t=>`<span class="badge">${t}</span>`).join('');
    modal.innerHTML = `<button class="book-modal-close" onclick="closeBookModal()">✕</button>
      <div class="book-modal-icon">${data.emoji}</div>
      <div class="book-modal-title">${bookName.split(' — ')[0]}</div>
      <div class="book-modal-author">✍️ ${data.author}</div>
      <div class="book-modal-desc">${data.desc}</div>
      <div class="book-modal-tags">${tags}</div>`;
  }
  overlay.classList.add('open');
}

function closeBookModal(){
  document.getElementById('bookModalOverlay').classList.remove('open');
}

document.addEventListener('click', (e) => {
  if(e.target === document.getElementById('bookModalOverlay')) closeBookModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeBookModal();
});

function booksSection(list){
  const cards = list.map(b => {
    const title = b.split(' — ')[0];
    const authorPart = b.includes(' — ') ? b.split(' — ')[1] : '';
    const safe = b.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    return `<div class="book-card" onclick="openBookModal('${safe}')">
      <span class="book-icon">📖</span>
      <span>${title}<br><small style="font-weight:500;color:var(--muted);font-size:11px">${authorPart}</small></span>
    </div>`;
  }).join('');
  return `<div class="section show">
    <div class="section-header"><span class="section-num">📚</span><h2>Рекомендуемые книги:</h2></div>
    <p class="section-desc" style="margin-bottom:10px">Нажми на книгу, чтобы узнать подробнее 👆</p>
    <div class="books-grid">${cards}</div>
  </div>`;
}
