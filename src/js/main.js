// ══════════════════════════════════════
//  LANGUAGES — (original code)
// ══════════════════════════════════════
const langs = {
python: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
  let h = hero(ic, "Python", "Простой, мощный, универсальный.  Python — высокоуровневый язык программирования, созданный Гвидо ван Россумом в 1991 году. Главная цель языка — читаемость и простота. Python используется как новичками, так и крупными компаниями (Google, NASA, Netflix). Он поддерживает несколько парадигм: процедурное, объектно-ориентированное и функциональное программирование. Благодаря огромному количеству библиотек Python стал стандартом в анализе данных, искусственном интеллекте и автоматизации.", ["Начинающим","AI/ML","Автоматизация","Бэкенд"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и типы","Условия","Циклы","Функции","Списки","Словари","Классы (ООП)","Исключения","Работа с файлами"]);
  h += section(1,"Hello World","Первая программа на любом языке — вывод текста в консоль. В Python для этого используется встроенная функция <b>print()</b>.",
`# Вывод текста
print("Hello, World!")

# Можно выводить несколько значений
print("Сумма:", 2 + 3)

# Форматированная строка (f-string)
name = "Alex"
print(f"Привет, {name}!")`,
    "Python не требует точек с запятой. f-строки позволяют вставлять переменные прямо в текст через фигурные скобки.", "python", "python");
  h += section(2,"Переменные и типы","В Python переменные создаются простым присваиванием — указывать тип не нужно. Язык сам определяет тип данных (динамическая типизация).",
`x = 10          # int — целое число
y = 3.14        # float — дробное число
name = "Alice"  # str — строка
flag = True     # bool — булево значение

# Проверить тип переменной
print(type(x))      # <class 'int'>
print(type(name))   # <class 'str'>

# Преобразование типов
num = int("42")   # строку в число
txt = str(100)    # число в строку`,
    "type() — встроенная функция для проверки типа. Преобразование типов важно, например, при вводе данных от пользователя (input() всегда возвращает str).", "python", "python");
  h += section(3,"Условия","Конструкция if / elif / else выполняет разные блоки кода в зависимости от условия. В Python важны отступы — они заменяют фигурные скобки.",
`age = 20

if age < 13:
    print("Ребёнок")
elif age < 18:
    print("Подросток")
elif age < 60:
    print("Взрослый")
else:
    print("Пожилой")

# Тернарный оператор
status = "совершеннолетний" if age >= 18 else "несовершеннолетний"
print(status)`,
    "elif — сокращение от 'else if'. Тернарный оператор удобен для коротких условий в одну строку.", "python", "python");
  h += section(4,"Циклы","for используется для перебора последовательностей, while — для повторения пока выполняется условие.",
`# Цикл for с range
for i in range(5):
    print(i)  # 0 1 2 3 4

# Перебор списка
fruits = ["яблоко", "банан", "вишня"]
for fruit in fruits:
    print(fruit)

# Цикл while
count = 0
while count < 3:
    print("Счёт:", count)
    count += 1

# break и continue
for n in range(10):
    if n == 3: continue  # пропустить 3
    if n == 7: break     # выйти на 7
    print(n)`,
    "range(5) генерирует числа 0–4. break прерывает цикл, continue переходит к следующей итерации.", "python", "python");
  h += section(5,"Функции","Функции позволяют оформить блок кода, который можно вызывать многократно. Поддерживают аргументы по умолчанию и произвольное число параметров.",
`def greet(name, greeting="Привет"):
    return f"{greeting}, {name}!"

print(greet("Алиса"))             # Привет, Алиса!
print(greet("Боб", "Здравствуй")) # Здравствуй, Боб!

# Функция с *args — произвольное кол-во аргументов
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3, 4))  # 10

# Lambda — анонимная функция
double = lambda x: x * 2
print(double(5))  # 10`,
    "return возвращает значение из функции. *args собирает все лишние аргументы в кортеж. Lambda полезны для коротких операций.", "python", "python");
  h += section(6,"Списки","Список (list) — упорядоченная изменяемая коллекция элементов любых типов. Один из самых используемых типов данных в Python.",
`nums = [1, 2, 3, 4, 5]

# Доступ по индексу
print(nums[0])   # 1 (первый)
print(nums[-1])  # 5 (последний)

# Срез (slice)
print(nums[1:3]) # [2, 3]

# Методы
nums.append(6)   # добавить в конец
nums.remove(3)   # удалить первое вхождение 3
nums.sort()      # сортировка
print(len(nums)) # длина списка

# List comprehension — элегантный способ создания списков
squares = [x**2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]`,
    "Срезы [start:end] не включают end. List comprehension — питоновский способ создать новый список за одну строку.", "python", "python");
  h += section(7,"Словари","Словарь (dict) хранит данные в виде пар ключ: значение. Доступ к элементам — по ключу, а не по индексу.",
`person = {
    "name": "Анна",
    "age": 25,
    "city": "Москва"
}

# Чтение
print(person["name"])           # Анна
print(person.get("job", "N/A")) # N/A (безопасно)

# Изменение и добавление
person["age"] = 26
person["job"] = "Разработчик"

# Перебор
for key, value in person.items():
    print(f"{key}: {value}")`,
    ".get(key, default) безопаснее прямого обращения — не вызывает ошибку, если ключа нет. .items() возвращает пары ключ-значение.", "python", "python");
  h += section(8,"Классы (ООП)","Класс — шаблон для создания объектов. Объект содержит данные (атрибуты) и поведение (методы). ООП помогает структурировать большие программы.",
`class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} говорит: {self.sound}!"


class Dog(Animal):  # наследование
    def fetch(self):
        return f"{self.name} принёс мяч!"


dog = Dog("Рекс", "Гав")
print(dog.speak())  # Рекс говорит: Гав!
print(dog.fetch())  # Рекс принёс мяч!`,
    "__init__ — конструктор, вызывается при создании объекта. self — ссылка на сам объект. Dog наследует методы Animal.", "python", "python");
  h += section(9,"Исключения","Обработка ошибок через try / except позволяет программе не завершиться аварийно при непредвиденных ситуациях.",
`# Базовая обработка ошибки
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Нельзя делить на ноль!")

# Несколько типов ошибок
try:
    num = int(input("Введите число: "))
    print(100 / num)
except ValueError:
    print("Это не число!")
except ZeroDivisionError:
    print("Деление на ноль!")
finally:
    print("Блок finally выполняется всегда")`,
    "finally выполняется в любом случае — удобно для закрытия файлов или соединений. Никогда не используйте голый except без типа — это скрывает ошибки.", "python", "python");
  h += section(10,"Работа с файлами","Python позволяет читать и записывать файлы с помощью встроенной функции open(). Конструкция with автоматически закрывает файл.",
`# Запись в файл
with open("hello.txt", "w", encoding="utf-8") as f:
    f.write("Привет, файл!\n")
    f.write("Вторая строка\n")

# Чтение всего файла
with open("hello.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# Чтение построчно
with open("hello.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())`,
    "Режимы: 'r' — чтение, 'w' — запись (перезапись), 'a' — дозапись. encoding='utf-8' важен для корректной работы с кириллицей.", "python", "python");
  h += booksSection(["Python Crash Course — Eric Matthes","Automate the Boring Stuff — Al Sweigart","Fluent Python — Luciano Ramalho","Learning Python — Mark Lutz","Python Tricks — Dan Bader"]);
  return h;
},

js: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  let h = hero(ic, "JavaScript", "Язык веба — от браузера до сервера. JavaScript — основной язык веб-разработки. Он выполняется прямо в браузере и делает сайты интерактивными. Сегодня JavaScript работает не только на клиенте, но и на сервере благодаря Node.js. Практически каждый сайт в интернете использует JavaScript.", ["Фронтенд","Node.js","Браузер","Полный стек"]);
  h += progressBar();
  h += toc(["Hello World","Переменные","Условия","Циклы","Функции","Массивы","Объекты","Классы (ООП)","Промисы и async/await","DOM — работа со страницей"]);
  h += section(1,"Hello World","В браузере вывод происходит в консоль (F12). В Node.js — в терминал. console.log() — главный инструмент отладки.",
`// Вывод в консоль
console.log("Hello, World!");

// Несколько значений
console.log("Результат:", 2 + 3);

// Шаблонные строки (template literals)
const name = "Alex";
console.log(\`Привет, \${name}!\`);

// Диалог в браузере (не используйте в prod)
// alert("Добро пожаловать!");`,
    "Обратные кавычки `` позволяют вставлять выражения через ${...}. console.log принимает любое количество аргументов.", "javascript", "js");
  h += section(2,"Переменные","let и const — современный способ объявлять переменные. var устарел. const нельзя переприсвоить.",
`const PI = 3.14159;   // константа
let count = 0;        // изменяемая переменная

count = 10;  // OK
// PI = 3;   // Ошибка!

// Типы данных
const num = 42;             // number
const text = "hello";       // string
const flag = true;          // boolean
const nothing = null;       // null
let undef;                  // undefined

// Проверка типа
console.log(typeof num);    // "number"
console.log(typeof text);   // "string"`,
    "const не означает неизменяемость содержимого (объект/массив можно менять), только неизменяемость самой ссылки. typeof — оператор проверки типа.", "javascript", "js");
  h += section(3,"Условия","if/else, тернарный оператор и switch — основные инструменты ветвления в JS.",
`const age = 20;

// if / else if / else
if (age < 13) {
    console.log("Ребёнок");
} else if (age < 18) {
    console.log("Подросток");
} else {
    console.log("Взрослый");
}

// Тернарный оператор
const status = age >= 18 ? "совершеннолетний" : "несовершеннолетний";

// Switch
const day = "Mon";
switch(day) {
    case "Mon": console.log("Понедельник"); break;
    case "Fri": console.log("Пятница"); break;
    default: console.log("Другой день");
}`,
    "=== в JS проверяет значение И тип (строгое равенство). Всегда используйте === вместо ==.", "javascript", "js");
  h += section(4,"Циклы","for, while, for...of, forEach — разные способы итерации для разных задач.",
`// Классический for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of — для массивов и строк
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// forEach — метод массива
fruits.forEach((item, index) => {
    console.log(index, item);
});

// while
let n = 0;
while (n < 3) {
    console.log(n++);
}`,
    "for...of удобнее классического for для перебора массивов. forEach с arrow function — стандарт в современном JS.", "javascript", "js");
  h += section(5,"Функции","Function declaration, function expression и arrow functions — три способа создать функцию.",
`// Function declaration (hoisting — можно вызывать до определения)
function add(a, b) {
    return a + b;
}

// Arrow function (стрелочная) — современный стиль
const multiply = (a, b) => a * b;

// Параметры по умолчанию
const greet = (name = "Гость") => \`Привет, \${name}!\`;
console.log(greet());        // Привет, Гость!
console.log(greet("Анна"));  // Привет, Анна!

// Rest параметры
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10`,
    "Arrow functions не имеют своего this — важно при работе с классами. Rest (...nums) собирает оставшиеся аргументы в массив.", "javascript", "js");
  h += section(6,"Массивы","Массивы в JS — объекты с методами. map, filter, reduce — главные инструменты функционального стиля.",
`const nums = [1, 2, 3, 4, 5];

// map — преобразовать каждый элемент
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter — оставить подходящие
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce — свернуть в одно значение
const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total); // 15

// find — найти первый подходящий
const found = nums.find(n => n > 3);
console.log(found); // 4

// Spread оператор
const more = [...nums, 6, 7];
console.log(more);`,
    "map/filter/reduce не изменяют исходный массив, а возвращают новый. Spread (...) создаёт копию массива.", "javascript", "js");
  h += section(7,"Объекты","Объект — набор пар ключ:значение. Основа для JSON и большинства структур данных в JS.",
`const person = {
    name: "Анна",
    age: 25,
    greet() {
        return \`Привет, я \${this.name}\`;
    }
};

console.log(person.name);    // Анна
console.log(person["age"]);  // 25
console.log(person.greet()); // Привет, я Анна

// Деструктуризация
const { name, age } = person;
console.log(name, age);

// Spread объекта
const updated = { ...person, age: 26 };
console.log(updated);`,
    "Деструктуризация позволяет извлечь несколько свойств за раз. Spread копирует объект (поверхностно).", "javascript", "js");
  h += section(8,"Классы (ООП)","ES6 классы — синтаксический сахар над прототипами. Поддерживают наследование, конструкторы и методы.",
`class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        return \`\${this.name} говорит: \${this.sound}\`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Гав");
    }

    fetch() {
        return \`\${this.name} принёс мяч!\`;
    }
}

const dog = new Dog("Рекс");
console.log(dog.speak());  // Рекс говорит: Гав
console.log(dog.fetch());  // Рекс принёс мяч!`,
    "extends — наследование. super() — вызов конструктора родителя, обязателен в дочернем классе.", "javascript", "js");
  h += section(9,"Промисы и async/await","Асинхронность — ключевая особенность JS. async/await делает асинхронный код похожим на синхронный.",
`// Промис — обещание вернуть результат позже
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async/await — современный способ работы с промисами
async function fetchData() {
    try {
        // Имитация загрузки данных
        await delay(1000);
        const data = { user: "Анна", score: 99 };
        console.log("Данные получены:", data);
        return data;
    } catch (err) {
        console.error("Ошибка:", err);
    }
}

fetchData().then(data => console.log("Готово!"));`,
    "await можно использовать только внутри async функции. try/catch обрабатывает ошибки в асинхронном коде.", "javascript", "js");
  h += section(10,"DOM — работа со страницей","DOM (Document Object Model) позволяет JS взаимодействовать с HTML — менять текст, стили, обрабатывать клики.",
`// Найти элемент
const btn = document.getElementById("myBtn");
const items = document.querySelectorAll(".item");

// Изменить содержимое
document.getElementById("title").textContent = "Новый заголовок";

// Изменить стиль
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Добавить обработчик события
btn.addEventListener("click", () => {
    alert("Кнопка нажата!");
});

// Создать новый элемент
const p = document.createElement("p");
p.textContent = "Новый абзац";
document.body.appendChild(p);`,
    "querySelector возвращает первый подходящий элемент, querySelectorAll — все. addEventListener — стандарт для обработки событий.", "javascript", "js");
  h += booksSection(["Eloquent JavaScript — Marijn Haverbeke","You Don't Know JS — Kyle Simpson","JavaScript: The Definitive Guide","JavaScript Good Parts — Douglas Crockford","JavaScript & JQuery — Jon Duckett"]);
  return h;
},

java: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
  let h = hero(ic, "Java", "Write Once, Run Anywhere. Java — строго типизированный объектно-ориентированный язык, созданный компанией Sun Microsystems. Java работает через виртуальную машину JVM, что делает программы кроссплатформенными.", ["Бэкенд","Android","Корпоративные системы","ООП"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и типы","Условия","Циклы","Методы","Массивы","Классы и ООП","Наследование","Исключения","Коллекции"]);
  h += section(1,"Hello World","Любая Java-программа начинается с класса с методом main. Это точка входа — с неё начинается выполнение.",
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // Вывод без переноса строки
        System.out.print("Без переноса ");
        System.out.print("строки\n");

        // Форматированный вывод
        String name = "Java";
        System.out.printf("Привет, %s!%n", name);
    }
}`,
    "Каждый файл .java должен содержать класс с тем же именем. main должен быть public static void — это соглашение JVM.", "java", "java");
  h += section(2,"Переменные и типы","Java — строго типизированный язык. Тип каждой переменной указывается явно и не может изменяться.",
`public class Types {
    public static void main(String[] args) {
        int age = 25;           // целое число
        double price = 9.99;    // дробное
        boolean active = true;  // булево
        char grade = 'A';       // символ
        String name = "Анна";   // строка (объект)

        // Автовывод типа (Java 10+)
        var city = "Москва";    // компилятор выводит тип

        System.out.println("Имя: " + name + ", Возраст: " + age);
        System.out.println("Тип активен: " + active);
    }
}`,
    "String — это класс, а не примитив. var появился в Java 10 и упрощает код, но тип всё равно определяется на этапе компиляции.", "java", "java");
  h += section(3,"Условия","if/else и switch управляют логикой. Java поддерживает классический switch и новый switch-expression (Java 14+).",
`int score = 85;

if (score >= 90) {
    System.out.println("Отлично");
} else if (score >= 70) {
    System.out.println("Хорошо");
} else {
    System.out.println("Нужно улучшить");
}

// Switch expression (современный стиль)
String grade = switch (score / 10) {
    case 10, 9 -> "A";
    case 8     -> "B";
    case 7     -> "C";
    default    -> "F";
};
System.out.println("Оценка: " + grade);`,
    "Новый switch с -> не требует break и возвращает значение. Это более безопасный и читаемый вариант.", "java", "java");
  h += section(4,"Циклы","Java поддерживает for, while, do-while и for-each для работы с коллекциями.",
`// Классический for
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// For-each — для массивов и коллекций
String[] fruits = {"яблоко", "банан", "вишня"};
for (String fruit : fruits) {
    System.out.println(fruit);
}

// While
int n = 0;
while (n < 3) {
    System.out.println("n = " + n);
    n++;
}

// Do-while — выполняется хотя бы раз
do {
    System.out.println("Выполнено!");
} while (false);`,
    "For-each проще и безопаснее для перебора массивов — нет риска выйти за границы. do-while гарантирует минимум один запуск.", "java", "java");
  h += section(5,"Методы","Методы в Java всегда принадлежат классу. Указывается тип возвращаемого значения, имя и параметры.",
`public class Calculator {
    // Метод с возвратом значения
    public static int add(int a, int b) {
        return a + b;
    }

    // Перегрузка метода (overloading)
    public static double add(double a, double b) {
        return a + b;
    }

    // Void метод (ничего не возвращает)
    public static void printSum(int a, int b) {
        System.out.println("Сумма: " + (a + b));
    }

    public static void main(String[] args) {
        System.out.println(add(3, 5));      // 8
        System.out.println(add(1.5, 2.5));  // 4.0
        printSum(10, 20);
    }
}`,
    "Перегрузка позволяет иметь несколько методов с одним именем но разными параметрами. Компилятор выбирает нужный вариант.", "java", "java");
  h += section(6,"Массивы","Массивы в Java имеют фиксированный размер и строгий тип элементов.",
`// Одномерный массив
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]);        // 10
System.out.println(numbers.length);    // 5

// Создание с заданным размером
String[] names = new String[3];
names[0] = "Алиса";
names[1] = "Боб";
names[2] = "Чарли";

// Перебор массива
for (int num : numbers) {
    System.out.print(num + " ");
}

// Двумерный массив (матрица)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(matrix[1][2]); // 6`,
    "numbers.length возвращает размер массива. Двумерный массив — это массив массивов.", "java", "java");
  h += section(7,"Классы и ООП","Класс — основная единица Java. Поля хранят состояние, методы — поведение. Конструктор инициализирует объект.",
`public class Person {
    // Поля (атрибуты)
    private String name;
    private int age;

    // Конструктор
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Геттеры
    public String getName() { return name; }
    public int getAge() { return age; }

    // Переопределение toString
    @Override
    public String toString() {
        return "Person{name=" + name + ", age=" + age + "}";
    }

    public static void main(String[] args) {
        Person p = new Person("Анна", 25);
        System.out.println(p); // Person{name=Анна, age=25}
    }
}`,
    "private скрывает поля — доступ только через методы (инкапсуляция). @Override сообщает компилятору, что метод переопределяет родительский.", "java", "java");
  h += section(8,"Наследование","extends позволяет классу унаследовать поля и методы другого класса. Java поддерживает одиночное наследование.",
`class Animal {
    String name;

    Animal(String name) { this.name = name; }

    String speak() { return name + " издаёт звук"; }
}

class Dog extends Animal {
    Dog(String name) { super(name); }

    @Override
    String speak() { return name + " говорит: Гав!"; }

    String fetch() { return name + " принёс мяч"; }
}

class Cat extends Animal {
    Cat(String name) { super(name); }

    @Override
    String speak() { return name + " говорит: Мяу!"; }
}

// Полиморфизм
Animal[] animals = {new Dog("Рекс"), new Cat("Мурка")};
for (Animal a : animals) {
    System.out.println(a.speak());
}`,
    "super() вызывает конструктор родителя. Полиморфизм: переменная типа Animal может хранить Dog или Cat, и вызывается нужный метод.", "java", "java");
  h += section(9,"Исключения","try-catch-finally обрабатывает ошибки. Java требует явно обрабатывать checked exceptions.",
`public class ExceptionDemo {
    public static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Деление на 0!");
        return a / b;
    }

    public static void main(String[] args) {
        // Базовая обработка
        try {
            int result = divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Ошибка: " + e.getMessage());
        } finally {
            System.out.println("finally всегда выполняется");
        }

        // Множественный catch
        try {
            String s = null;
            s.length(); // NullPointerException
        } catch (NullPointerException | IllegalArgumentException e) {
            System.out.println("Поймано: " + e.getClass().getSimpleName());
        }
    }
}`,
    "throw создаёт исключение. finally закрывает ресурсы. Можно ловить несколько типов через |.", "java", "java");
  h += section(10,"Коллекции","Java Collections Framework предоставляет ArrayList, HashMap и другие структуры данных.",
`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Collections {
    public static void main(String[] args) {
        // ArrayList — динамический массив
        List<String> names = new ArrayList<>();
        names.add("Алиса");
        names.add("Боб");
        names.add("Чарли");
        System.out.println(names.size()); // 3
        names.remove("Боб");

        for (String name : names) {
            System.out.println(name);
        }

        // HashMap — словарь
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Алиса", 95);
        scores.put("Боб", 87);
        System.out.println(scores.get("Алиса")); // 95
        System.out.println(scores.containsKey("Боб")); // true
    }
}`,
    "Generics (<String>, <Integer>) задают тип элементов коллекции. ArrayList лучше массива когда размер заранее неизвестен.", "java", "java");
  h += booksSection(["Head First Java — Sierra & Bates","Effective Java — Joshua Bloch","Java: The Complete Reference — Schildt","Thinking in Java — Bruce Eckel","Clean Code — Robert Martin"]);
  return h;
},

c: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg";
  let h = hero(ic, "C / C++", "Производительность на уровне металла. C и C++ — языки низкого уровня, позволяющие напрямую управлять памятью и железом компьютера. Они используются там, где важна максимальная производительность.", ["Системное ПО","Игры","Embedded","Производительность"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и типы","Условия","Циклы","Функции","Массивы","Указатели","Структуры","Файлы","Введение в C++"]);
  h += section(1,"Hello World","Программа на C начинается с директивы #include для подключения библиотек и функции main().",
`#include <stdio.h>   // стандартный ввод-вывод
#include <string.h>  // работа со строками

int main() {
    printf("Hello, World!\\n");

    // Форматированный вывод
    int age = 25;
    char name[] = "Анна";
    printf("Имя: %s, Возраст: %d\\n", name, age);

    return 0;  // 0 означает успешное завершение
}`,
    "%s — строка, %d — целое, %f — дробное, %c — символ. \\n — перевод строки. return 0 сигнализирует ОС об успехе.", "c", "c");
  h += section(2,"Переменные и типы","C требует явного указания типа. Размер типов зависит от архитектуры.",
`#include <stdio.h>

int main() {
    int a = 42;          // 4 байта, целое
    short b = 100;       // 2 байта
    long c = 1000000L;   // 8 байт
    float f = 3.14f;     // 4 байта, дробное
    double d = 3.14159;  // 8 байт, точнее
    char ch = 'A';       // 1 байт, символ

    // Размеры типов
    printf("int: %zu байт\\n", sizeof(int));
    printf("double: %zu байт\\n", sizeof(double));

    // Константа
    const int MAX = 100;
    return 0;
}`,
    "sizeof() возвращает размер типа в байтах. const делает переменную константой. Точность float меньше чем double.", "c", "c");
  h += section(3,"Условия","if/else и switch работают так же как в большинстве языков. В switch обязателен break.",
`#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Отлично\\n");
    } else if (score >= 70) {
        printf("Хорошо\\n");
    } else {
        printf("Нужно улучшить\\n");
    }

    // Switch
    int day = 3;
    switch (day) {
        case 1: printf("Пн\\n"); break;
        case 2: printf("Вт\\n"); break;
        case 3: printf("Ср\\n"); break;
        default: printf("Другой день\\n");
    }
    return 0;
}`,
    "Без break в switch выполнение 'проваливается' в следующий case. Это частая ошибка новичков.", "c", "c");
  h += section(4,"Циклы","for, while и do-while. В C нет for-each — для массивов используют индексы.",
`#include <stdio.h>

int main() {
    // for — когда известно количество итераций
    for (int i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    // while — пока условие истинно
    int n = 10;
    while (n > 0) {
        printf("%d ", n);
        n -= 3;
    }
    printf("\\n");

    // do-while — хотя бы один раз
    int x = 0;
    do {
        printf("x = %d\\n", x);
        x++;
    } while (x < 3);

    return 0;
}`,
    "break выходит из цикла, continue переходит к следующей итерации. do-while проверяет условие после выполнения тела.", "c", "c");
  h += section(5,"Функции","Функции объявляются до их использования (прототип). Возвращают ровно один тип.",
`#include <stdio.h>

// Прототип (объявление)
int max(int a, int b);
void printLine(char ch, int count);

int main() {
    printf("Макс: %d\\n", max(15, 27));  // 27
    printLine('-', 20);
    return 0;
}

// Реализация
int max(int a, int b) {
    return a > b ? a : b;
}

void printLine(char ch, int count) {
    for (int i = 0; i < count; i++) {
        printf("%c", ch);
    }
    printf("\\n");
}`,
    "void означает 'ничего не возвращает'. Прототип нужен если функция используется до её определения.", "c", "c");
  h += section(6,"Массивы","Массивы в C — последовательные ячейки памяти. Нет встроенной защиты от выхода за границы.",
`#include <stdio.h>
#include <string.h>

int main() {
    // Объявление с инициализацией
    int nums[5] = {10, 20, 30, 40, 50};

    // Доступ по индексу
    printf("Первый: %d\\n", nums[0]);
    printf("Последний: %d\\n", nums[4]);

    // Перебор
    for (int i = 0; i < 5; i++) {
        printf("%d ", nums[i]);
    }

    // Строка — массив символов
    char name[] = "Алиса";
    printf("\\nИмя: %s, длина: %zu\\n",
           name, strlen(name));

    // Двумерный массив (матрица)
    int matrix[2][3] = {{1,2,3},{4,5,6}};
    printf("matrix[1][2] = %d\\n", matrix[1][2]); // 6
    return 0;
}`,
    "Строки в C — массивы char с нулевым байтом \\0 в конце. strlen() считает длину без \\0.", "c", "c");
  h += section(7,"Указатели","Указатели — одна из сложнейших и мощнейших возможностей C. Хранят адрес другой переменной в памяти.",
`#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;  // ptr хранит адрес x

    printf("Значение x: %d\\n", x);
    printf("Адрес x: %p\\n", (void*)ptr);
    printf("Значение через ptr: %d\\n", *ptr);  // разыменование

    // Изменение через указатель
    *ptr = 100;
    printf("x теперь: %d\\n", x);  // 100

    return 0;
}

// Указатели в функциях (передача по ссылке)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`,
    "& — взять адрес переменной, * — разыменовать указатель (получить значение). Указатели позволяют менять переменные внутри функций.", "c", "c");
  h += section(8,"Структуры","struct объединяет несколько полей разных типов. Основа для создания собственных типов данных.",
`#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

void printStudent(Student s) {
    printf("Студент: %s, Возраст: %d, Оценка: %.1f\\n",
           s.name, s.age, s.score);
}

int main() {
    Student s1;
    strcpy(s1.name, "Алиса");
    s1.age = 20;
    s1.score = 95.5;

    printStudent(s1);

    // Инициализация при объявлении
    Student s2 = {"Боб", 22, 88.0};
    printStudent(s2);

    return 0;
}`,
    "typedef создаёт псевдоним типа — можно писать Student вместо struct Student. strcpy копирует строку (нельзя использовать =).", "c", "c");
  h += section(9,"Файлы","fopen/fclose/fprintf/fscanf — стандартные функции для работы с файлами.",
`#include <stdio.h>

int main() {
    FILE *fp;

    // Запись
    fp = fopen("data.txt", "w");
    if (fp == NULL) {
        printf("Ошибка открытия файла!\\n");
        return 1;
    }
    fprintf(fp, "Привет, файл!\\n");
    fprintf(fp, "Число: %d\\n", 42);
    fclose(fp);

    // Чтение
    fp = fopen("data.txt", "r");
    char line[100];
    while (fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }
    fclose(fp);

    return 0;
}`,
    "Всегда проверяйте NULL при открытии файла и закрывайте через fclose. fgets читает строку, fscanf — форматированно.", "c", "c");
  h += section(10,"Введение в C++","C++ расширяет C объектами, классами, шаблонами и стандартной библиотекой STL.",
`#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Rectangle {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() const { return width * height; }
    double perimeter() const { return 2 * (width + height); }

    void print() const {
        cout << "Площадь: " << area()
             << ", Периметр: " << perimeter() << endl;
    }
};

int main() {
    Rectangle r(5.0, 3.0);
    r.print();

    // Вектор (динамический массив)
    vector<int> nums = {1, 2, 3, 4, 5};
    for (int n : nums) {
        cout << n << " ";
    }
    return 0;
}`,
    "cout вместо printf, cin вместо scanf. vector — безопасный динамический массив из STL. : (двоеточие) в конструкторе — список инициализации.", "cpp", "c++");
  h += booksSection(["The C Programming Language — K&R","C Programming Absolute Beginner","C++ Primer — Lippman","Effective C++ — Scott Meyers","Programming: Principles & Practice (C++)"]);
  return h;
},

go: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg";
  let h = hero(ic, "Go", "Простота C + скорость разработки Python. Go (Golang) — язык от Google, созданный для простоты, скорости и работы с сетевыми сервисами. Он сочетает производительность C и простоту Python.", ["Бэкенд","Микросервисы","CLI","Облако"]);
  h += progressBar();
  h += toc(["Hello World","Переменные","Условия","Циклы","Функции","Массивы и срезы","Карты (Maps)","Структуры","Горутины","Обработка ошибок"]);
  h += section(1,"Hello World","Go требует объявления пакета и импорта. main — точка входа. fmt — пакет форматирования.",
`package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println("Hello, World!")

    // Printf для форматирования
    name := "Go"
    version := 1.22
    fmt.Printf("Язык: %s, Версия: %.2f\\n", name, version)

    // Вычисление
    fmt.Printf("√2 = %.4f\\n", math.Sqrt(2))
}`,
    "Неиспользуемые импорты — ошибка компиляции. := сокращение для объявления+присваивания. Println добавляет перевод строки.", "go", "go");
  h += section(2,"Переменные","Go использует := для краткого объявления. Типы выводятся автоматически. Неиспользуемые переменные — ошибка.",
`package main
import "fmt"

func main() {
    // Краткое объявление
    x := 42
    name := "Алиса"
    pi := 3.14159

    // Явное объявление с типом
    var age int = 25
    var flag bool = true

    // Множественное присваивание
    a, b := 10, 20
    a, b = b, a  // обмен значений
    fmt.Println(a, b)  // 20 10

    // Константа
    const MaxSize = 100
    fmt.Println(x, name, pi, age, flag, MaxSize)
}`,
    "Go — строго типизированный, но с выводом типов. Обмен переменных без temp — уникальная особенность Go.", "go", "go");
  h += section(3,"Условия","if/else в Go не требует скобок вокруг условия. Поддерживает инициализацию переменной прямо в if.",
`package main
import "fmt"

func main() {
    score := 85

    if score >= 90 {
        fmt.Println("Отлично")
    } else if score >= 70 {
        fmt.Println("Хорошо")
    } else {
        fmt.Println("Нужно улучшить")
    }

    // Инициализация в if
    if n := score * 2; n > 150 {
        fmt.Println("n > 150:", n)
    } else {
        fmt.Println("n <= 150:", n)
    }
    // n недоступна здесь
}`,
    "Инициализация в if (if x := ...; x > 0) ограничивает область видимости переменной только блоком if.", "go", "go");
  h += section(4,"Циклы","В Go только один вид цикла — for. Он заменяет while, do-while и классический for.",
`package main
import "fmt"

func main() {
    // Классический for
    for i := 0; i < 5; i++ {
        fmt.Print(i, " ")
    }
    fmt.Println()

    // For как while
    n := 10
    for n > 0 {
        fmt.Print(n, " ")
        n -= 3
    }
    fmt.Println()

    // For-range — перебор среза
    fruits := []string{"apple", "banana", "cherry"}
    for i, fruit := range fruits {
        fmt.Printf("%d: %s\\n", i, fruit)
    }

    // Бесконечный цикл с break
    count := 0
    for {
        count++
        if count >= 3 { break }
    }
}`,
    "range возвращает индекс и значение. Если индекс не нужен — используйте _: for _, v := range slice.", "go", "go");
  h += section(5,"Функции","Go поддерживает множественное возвращение значений — стандартный способ обработки ошибок.",
`package main
import (
    "errors"
    "fmt"
    "math"
)

// Обычная функция
func add(a, b int) int {
    return a + b
}

// Несколько возвращаемых значений
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("деление на ноль")
    }
    return a / b, nil
}

// Variadic — произвольное число аргументов
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(add(3, 5))

    result, err := divide(10, 3)
    if err != nil {
        fmt.Println("Ошибка:", err)
    } else {
        fmt.Printf("%.4f\\n", result)
    }

    fmt.Println(sum(1, 2, 3, 4, 5))
    fmt.Println(math.Sqrt(16))
}`,
    "nil — нулевое значение для указателей, срезов, карт, ошибок. Паттерн (result, err) — идиоматический способ обработки ошибок в Go.", "go", "go");
  h += section(6,"Массивы и срезы","Срезы (slices) — гибкие динамические массивы. Массивы имеют фиксированный размер.",
`package main
import "fmt"

func main() {
    // Срез — гибкий массив
    nums := []int{1, 2, 3, 4, 5}
    fmt.Println(len(nums), cap(nums))  // 5 5

    // append добавляет элементы
    nums = append(nums, 6, 7)
    fmt.Println(nums)  // [1 2 3 4 5 6 7]

    // Срез среза
    sub := nums[1:4]
    fmt.Println(sub)  // [2 3 4]

    // make — создать срез с нуля
    zeroes := make([]int, 5)
    fmt.Println(zeroes)  // [0 0 0 0 0]

    // 2D срез
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
    }
    fmt.Println(matrix[1][2])  // 6
}`,
    "append возвращает новый срез — всегда присваивайте обратно: nums = append(nums, ...). make([]int, n) создаёт срез из n нулей.", "go", "go");
  h += section(7,"Карты (Maps)","Map — аналог словаря. Ключи могут быть любого сравниваемого типа.",
`package main
import "fmt"

func main() {
    // Создание карты
    scores := map[string]int{
        "Алиса": 95,
        "Боб":   87,
    }

    // Добавление
    scores["Чарли"] = 78

    // Чтение
    fmt.Println(scores["Алиса"])  // 95

    // Проверка существования ключа
    val, ok := scores["Дима"]
    if ok {
        fmt.Println("Оценка:", val)
    } else {
        fmt.Println("Ключ не найден")
    }

    // Удаление
    delete(scores, "Боб")

    // Перебор
    for name, score := range scores {
        fmt.Printf("%s: %d\\n", name, score)
    }
}`,
    "Двойное присваивание val, ok := map[key] — безопасный способ проверить наличие ключа. delete() удаляет элемент.", "go", "go");
  h += section(8,"Структуры","Struct — основа для создания типов данных. Go не имеет классов, но методы можно добавить к любому типу.",
`package main
import "fmt"

type Rectangle struct {
    Width, Height float64
}

// Метод на структуре
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Метод с указателем — может менять поля
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 5, Height: 3}
    fmt.Println("Площадь:", rect.Area())
    fmt.Println("Периметр:", rect.Perimeter())

    rect.Scale(2)
    fmt.Printf("После масштабирования: %.1f x %.1f\\n",
        rect.Width, rect.Height)
}`,
    "(r Rectangle) — получатель метода. Указатель *Rectangle нужен если метод изменяет поля. Наследования нет — используется композиция.", "go", "go");
  h += section(9,"Горутины","Горутины — лёгкие потоки для параллельного выполнения. Каналы (chan) для передачи данных между ними.",
`package main
import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Воркер %d начал\\n", id)
    time.Sleep(time.Millisecond * 100)
    fmt.Printf("Воркер %d завершил\\n", id)
}

func main() {
    var wg sync.WaitGroup

    // Запуск 3 горутин
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()  // ждём завершения всех
    fmt.Println("Все воркеры завершили работу")
}`,
    "go func() запускает горутину. WaitGroup позволяет ждать завершения нескольких горутин. defer выполняется при выходе из функции.", "go", "go");
  h += section(10,"Обработка ошибок","Go не использует исключения — ошибки возвращаются как обычные значения. Это делает обработку явной.",
`package main
import (
    "errors"
    "fmt"
    "strconv"
)

// Собственный тип ошибки
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("поле '%s': %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return &ValidationError{Field: "age", Message: "не может быть отрицательным"}
    }
    if age > 150 {
        return errors.New("нереальный возраст")
    }
    return nil
}

func main() {
    // Стандартная обработка ошибок
    num, err := strconv.Atoi("abc")
    if err != nil {
        fmt.Println("Ошибка парсинга:", err)
    } else {
        fmt.Println("Число:", num)
    }

    // Собственная ошибка
    if err := validateAge(-5); err != nil {
        fmt.Println("Ошибка валидации:", err)
    }
}`,
    "Соглашение: функции возвращают (result, error). Проверяйте err != nil сразу после вызова. nil означает отсутствие ошибки.", "go", "go");
  h += booksSection(["The Go Programming Language — Donovan","Go in Action — Kennedy & Ketelsen","Learning Go — Jon Bodner","Introducing Go — Caleb Doxsey","100 Go Mistakes — Teiva Harsanyi"]);
  return h;
},

php: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
  let h = hero(ic, "PHP", "Сервер, который строит веб. PHP — серверный язык, специально созданный для веб-разработки. Он генерирует HTML на сервере и отправляет готовую страницу пользователю.", ["Веб-бэкенд","WordPress","Laravel","Серверные скрипты"]);
  h += progressBar();
  h += toc(["Hello World","Переменные","Условия","Циклы","Функции","Массивы","Строки","Формы и GET/POST","Классы","Работа с файлами"]);
  h += section(1,"Hello World","PHP работает на сервере и встраивается прямо в HTML. Код начинается с <?php и заканчивается ?>.",
`<?php
// Вывод текста
echo "Hello, World!";

// Или так
print("<h1>Привет с сервера!</h1>");

// Переменная в строке
$name = "PHP";
echo "Привет, $name!";

// Heredoc — многострочный текст
$text = <<<EOT
    Это многострочная
    строка в PHP.
EOT;
echo $text;
?>`,
    "echo и print — для вывода. Переменные в двойных кавычках автоматически вставляются в строку. Heredoc удобен для HTML-шаблонов.", "php", "php");
  h += section(2,"Переменные","Переменные начинаются с $. PHP — динамически типизированный язык.",
`<?php
$name = "Анна";        // string
$age = 25;             // integer
$price = 9.99;         // float
$active = true;        // boolean
$nothing = null;       // null

// Проверка типа
echo gettype($name);   // string
echo gettype($age);    // integer

// Приведение типов
$num = (int)"42abc";   // 42
$str = (string)100;    // "100"

// Переменные переменных (редко нужны)
$varName = "city";
$$varName = "Москва";  // $city = "Москва"
echo $city;            // Москва
?>`,
    "$ обязателен перед именем переменной. gettype() и var_dump() — инструменты отладки. isset() проверяет, существует ли переменная.", "php", "php");
  h += section(3,"Условия","if/else/elseif и switch стандартны. PHP также имеет match (PHP 8.0+).",
`<?php
$score = 85;

if ($score >= 90) {
    echo "Отлично";
} elseif ($score >= 70) {
    echo "Хорошо";
} else {
    echo "Нужно улучшить";
}

// Match (PHP 8.0+) — строгое сравнение
$status = match(true) {
    $score >= 90 => "Отлично",
    $score >= 70 => "Хорошо",
    default      => "Нужно улучшить",
};
echo $status;

// Null coalescing оператор
$username = $_GET['user'] ?? 'Гость';
echo "Привет, $username!";
?>`,
    "match в отличие от switch использует строгое сравнение (===) и возвращает значение. ?? возвращает правый операнд если левый null.", "php", "php");
  h += section(4,"Циклы","for, while, foreach, do-while — стандартный набор циклов PHP.",
`<?php
// for
for ($i = 0; $i < 5; $i++) {
    echo $i . " ";
}
echo "\n";

// while
$n = 10;
while ($n > 0) {
    echo $n . " ";
    $n -= 3;
}

// foreach — для массивов
$fruits = ["яблоко", "банан", "вишня"];
foreach ($fruits as $fruit) {
    echo $fruit . "\n";
}

// foreach с ключом и значением
$person = ["name" => "Анна", "age" => 25];
foreach ($person as $key => $value) {
    echo "$key: $value\n";
}
?>`,
    "foreach — главный цикл в PHP для перебора массивов. . (точка) — оператор конкатенации строк.", "php", "php");
  h += section(5,"Функции","Функции объявляются через function. PHP поддерживает типизацию параметров и возвращаемого значения.",
`<?php
// Простая функция
function greet(string $name, string $greeting = "Привет"): string {
    return "$greeting, $name!";
}

echo greet("Алиса");             // Привет, Алиса!
echo greet("Боб", "Здравствуй"); // Здравствуй, Боб!

// Функция с переменным числом аргументов
function sum(int ...$nums): int {
    return array_sum($nums);
}
echo sum(1, 2, 3, 4, 5);  // 15

// Анонимная функция
$double = fn($x) => $x * 2;
echo $double(5);  // 10

// Рекурсия — факториал
function factorial(int $n): int {
    return $n <= 1 ? 1 : $n * factorial($n - 1);
}
echo factorial(5);  // 120
?>`,
    "fn() => — короткая стрелочная функция (PHP 7.4+). Типы параметров и возвращаемого значения улучшают надёжность кода.", "php", "php");
  h += section(6,"Массивы","PHP массивы могут быть и списками и словарями одновременно. Множество встроенных функций.",
`<?php
// Индексный массив
$colors = ["красный", "зелёный", "синий"];
echo $colors[0];        // красный
echo count($colors);    // 3

// Ассоциативный (как словарь)
$user = [
    "name" => "Анна",
    "age"  => 25,
    "city" => "Москва"
];
echo $user["name"];  // Анна

// Полезные функции
$nums = [3, 1, 4, 1, 5, 9];
sort($nums);                     // сортировка
$filtered = array_filter($nums, fn($n) => $n > 3);
$doubled  = array_map(fn($n) => $n * 2, $nums);

// in_array — проверить наличие
if (in_array(4, $nums)) {
    echo "Найдено!";
}
?>`,
    "count() возвращает количество элементов. array_map, array_filter, array_reduce — функциональный стиль работы с массивами.", "php", "php");
  h += section(7,"Строки","PHP имеет богатую библиотеку функций для работы со строками.",
`<?php
$text = "  Привет, Мир!  ";

echo strlen($text);               // длина
echo strtolower($text);           // привет, мир!
echo strtoupper($text);           // ПРИВЕТ, МИР!
echo trim($text);                 // без пробелов
echo str_replace("Мир", "PHP", $text); // замена
echo strpos($text, "Мир");        // позиция подстроки

// Разбивка и объединение
$csv = "яблоко,банан,вишня";
$fruits = explode(",", $csv);    // массив
echo implode(" | ", $fruits);    // обратно в строку

// Подстрока
echo substr("Hello World", 6, 5);  // World

// sprintf — форматирование
$msg = sprintf("Цена: %.2f руб.", 9.5);
echo $msg;  // Цена: 9.50 руб.
?>`,
    "explode/implode — разбивка и сборка строк. sprintf форматирует строку (как printf, но возвращает её). mb_ функции нужны для кириллицы.", "php", "php");
  h += section(8,"Формы и GET/POST","PHP обрабатывает HTML-формы через суперглобальные переменные $_GET и $_POST.",
`<!-- HTML форма -->
<form method="POST" action="process.php">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Войти</button>
</form>

<?php
// process.php — обработка формы
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получение и очистка данных
    $username = htmlspecialchars(trim($_POST['username'] ?? ''));
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo "Заполните все поля!";
    } else {
        echo "Привет, $username!";
        // В реальности — проверка пароля в БД
    }
}

// GET параметры из URL: ?page=2&sort=name
$page = (int)($_GET['page'] ?? 1);
echo "Страница: $page";
?>`,
    "htmlspecialchars() защищает от XSS-атак — всегда применяйте при выводе пользовательских данных. trim() убирает пробелы.", "php", "php");
  h += section(9,"Классы","PHP поддерживает полноценное ООП с классами, интерфейсами, трейтами и абстрактными классами.",
`<?php
class BankAccount {
    private float $balance;
    private string $owner;

    public function __construct(string $owner, float $initial = 0) {
        $this->owner = $owner;
        $this->balance = $initial;
    }

    public function deposit(float $amount): void {
        if ($amount > 0) $this->balance += $amount;
    }

    public function withdraw(float $amount): bool {
        if ($amount > $this->balance) return false;
        $this->balance -= $amount;
        return true;
    }

    public function getBalance(): float {
        return $this->balance;
    }

    public function __toString(): string {
        return "{$this->owner}: {$this->balance} руб.";
    }
}

$acc = new BankAccount("Анна", 1000);
$acc->deposit(500);
$acc->withdraw(200);
echo $acc;  // Анна: 1300 руб.
?>`,
    "__construct — конструктор, __toString — вызывается при преобразовании объекта в строку. $this указывает на текущий объект.", "php", "php");
  h += section(10,"Работа с файлами","PHP предоставляет функции для чтения, записи и работы с файловой системой.",
`<?php
// Запись в файл
file_put_contents("data.txt", "Привет, файл!\n");

// Чтение всего файла
$content = file_get_contents("data.txt");
echo $content;

// Дозапись
file_put_contents("data.txt", "Ещё строка\n", FILE_APPEND);

// Построчное чтение
$lines = file("data.txt", FILE_IGNORE_NEW_LINES);
foreach ($lines as $i => $line) {
    echo "$i: $line\n";
}

// Проверки
if (file_exists("data.txt")) {
    echo "Размер: " . filesize("data.txt") . " байт\n";
    echo "Изменён: " . date("Y-m-d", filemtime("data.txt"));
}

// Удаление: unlink("data.txt");
?>`,
    "file_get_contents/file_put_contents — удобные функции для простых операций. FILE_APPEND добавляет в конец файла.", "php", "php");
  h += booksSection(["PHP & MySQL Web Development — Luke Welling","Learning PHP, MySQL & JS — Robin Nixon","PHP Cookbook — Adam Trachtenberg","Modern PHP — Josh Lockhart","PHP 8 Objects, Patterns — Matt Zandstra"]);
  return h;
},

ts: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
  let h = hero(ic, "TypeScript", "JavaScript с типами — надёжнее и умнее", ["Фронтенд","Node.js","React","Angular"]);
  h += progressBar();
  h += toc(["Введение","Типы и аннотации","Интерфейсы","Функции с типами","Классы","Generics","Union и Intersection","Utility Types","Enums","Type Guards"]);
  h += section(1,"Введение","TypeScript — надмножество JavaScript от Microsoft. Код TS компилируется в JS и добавляет статическую типизацию.",
`// TypeScript добавляет типы к JS
const greeting: string = "Hello, TypeScript!";
const version: number = 5.3;
const isStrict: boolean = true;

console.log(greeting);

// TS ловит ошибки на этапе компиляции
// const x: number = "hello"; // ОШИБКА: Type 'string' is not 'number'

// Вывод типа — TS умеет выводить типы сам
const pi = 3.14159; // TypeScript знает, что pi: number
const name = "Alice"; // TypeScript знает: name: string`,
    "TypeScript компилируется командой tsc. В современных проектах используют ts-node или bundler (Vite, webpack). Аннотации типов писать не обязательно — TS выводит их сам.", "typescript", "ts");
  h += section(2,"Типы и аннотации","TS имеет богатую систему типов: примитивы, массивы, кортежи, any, unknown, never.",
`// Примитивы
let name: string = "Анна";
let age: number = 25;
let active: boolean = true;

// Массив
let scores: number[] = [90, 85, 78];
let names: Array<string> = ["Анна", "Боб"];

// Кортеж — массив фиксированной длины
let point: [number, number] = [10, 20];
let user: [string, number] = ["Alice", 30];

// any — отключает проверку типов (избегайте!)
let wild: any = "может быть чем угодно";
wild = 42; // OK с any

// unknown — безопаснее any
function getData(): unknown { return "данные"; }
let safe: unknown = getData();
if (typeof safe === "string") {
    console.log(safe.toUpperCase()); // OK
}`,
    "unknown безопаснее any — нужно проверить тип перед использованием. Кортежи задают точную структуру массива.", "typescript", "ts");
  h += section(3,"Интерфейсы","Interface описывает форму объекта. Это основной инструмент типизации в TS.",
`interface User {
    id: number;
    name: string;
    email: string;
    age?: number;  // опциональное поле
    readonly createdAt: Date;  // только для чтения
}

// Функция принимает User
function displayUser(user: User): string {
    return \`\${user.name} (\${user.email})\`;
}

const alice: User = {
    id: 1,
    name: "Алиса",
    email: "alice@example.com",
    createdAt: new Date(),
};

console.log(displayUser(alice));

// Расширение интерфейса
interface Admin extends User {
    permissions: string[];
}`,
    "? делает поле опциональным. readonly запрещает изменение после инициализации. Интерфейсы можно расширять через extends.", "typescript", "ts");
  h += section(4,"Функции с типами","TS позволяет типизировать параметры, возвращаемое значение и перегружать функции.",
`// Типизированная функция
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function с типами
const multiply = (a: number, b: number): number => a * b;

// Опциональный параметр
function greet(name: string, greeting?: string): string {
    return \`\${greeting ?? "Hello"}, \${name}!\`;
}

// Перегрузка функций
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    return typeof value === "number"
        ? value.toFixed(2)
        : value.trim();
}

console.log(format(3.14159)); // "3.14"
console.log(format("  hi  ")); // "hi"`,
    "void — тип для функций, которые ничего не возвращают. Перегрузка позволяет одной функции обрабатывать разные типы.", "typescript", "ts");
  h += section(5,"Классы","TypeScript расширяет классы ES6: модификаторы доступа, abstract, implements.",
`interface Shape {
    area(): number;
    perimeter(): number;
}

class Rectangle implements Shape {
    constructor(
        private width: number,
        private height: number
    ) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }

    toString(): string {
        return \`Rectangle(\${this.width}×\${this.height})\`;
    }
}

const rect = new Rectangle(5, 3);
console.log(rect.area());      // 15
console.log(rect.perimeter()); // 16
console.log(rect.toString());  // Rectangle(5×3)`,
    "private/public/protected — модификаторы доступа. implements проверяет, что класс реализует все методы интерфейса.", "typescript", "ts");
  h += section(6,"Generics","Generics — шаблоны для работы с разными типами без потери типовой безопасности.",
`// Generic функция
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("hello")); // "hello"
console.log(identity<number>(42));      // 42

// Generic интерфейс
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Generic с ограничением
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: "Анна", age: 25 };
console.log(getProperty(user, "name")); // "Анна"
// getProperty(user, "xyz"); // ОШИБКА: 'xyz' не существует`,
    "T — условное обозначение типа-параметра. keyof T возвращает объединение всех ключей типа T. extends ограничивает допустимые типы.", "typescript", "ts");
  h += section(7,"Union и Intersection","Union (|) — «или», Intersection (&) — «и». Мощные инструменты для комбинирования типов.",
`// Union Type — может быть одним из типов
type ID = string | number;
let userId: ID = "abc-123";
userId = 42; // тоже OK

// Discriminated Union — паттерн с тегом
type Shape =
    | { kind: "circle";    radius: number }
    | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}

// Intersection — объединяет типы
type Named = { name: string };
type Aged  = { age: number };
type Person = Named & Aged;  // { name: string; age: number }`,
    "Discriminated Union с полем-тегом (kind) — самый надёжный паттерн для обработки разных вариантов. TypeScript проверит полноту switch.", "typescript", "ts");
  h += section(8,"Utility Types","Встроенные вспомогательные типы: Partial, Required, Pick, Omit, Record, Readonly.",
`interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial — все поля опциональны
type PartialUser = Partial<User>;

// Pick — только выбранные поля
type UserPreview = Pick<User, "id" | "name">;

// Omit — исключить поля
type UserWithoutAge = Omit<User, "age">;

// Readonly — нельзя изменять
type FrozenUser = Readonly<User>;

// Record — словарь
type Scores = Record<string, number>;
const scores: Scores = { Alice: 95, Bob: 87 };

// ReturnType — тип возвращаемого значения функции
function getUser() { return { id: 1, name: "Alice" }; }
type GetUserResult = ReturnType<typeof getUser>;`,
    "Utility Types экономят написание кода. Partial полезен для UPDATE операций — не все поля обязательны.", "typescript", "ts");
  h += section(9,"Enums","Enum — перечисление именованных констант. Делает код читаемее.",
`// Числовой enum
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const move = Direction.Up;
console.log(move);           // 0
console.log(Direction[0]);   // "Up"

// Строковый enum (предпочтительный)
enum Status {
    Active   = "ACTIVE",
    Inactive = "INACTIVE",
    Pending  = "PENDING",
}

function processOrder(status: Status): void {
    if (status === Status.Active) {
        console.log("Заказ активен");
    }
}

processOrder(Status.Active);`,
    "Строковые enums предпочтительнее числовых — значения читаемы в логах и JSON. Const enums компилируются в обычные числа (без объекта).", "typescript", "ts");
  h += section(10,"Type Guards","Type Guards — функции или выражения, сужающие тип в блоке кода.",
`interface Cat { meow(): void }
interface Dog { bark(): void }

// Type Guard функция
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Cat | Dog): void {
    if (isCat(animal)) {
        animal.meow(); // TS знает — это Cat
    } else {
        animal.bark(); // TS знает — это Dog
    }
}

// typeof guard
function processInput(input: string | number) {
    if (typeof input === "string") {
        console.log(input.toUpperCase()); // string методы
    } else {
        console.log(input.toFixed(2));    // number методы
    }
}

// instanceof guard
class HttpError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message);
    }
}`,
    "animal is Cat — предикат типа, говорит компилятору что функция проверяет тип. После guard TypeScript знает точный тип.", "typescript", "ts");
  h += booksSection(["Programming TypeScript — Boris Cherny","Effective TypeScript — Dan Vanderkam","TypeScript Handbook (бесплатно, официальный)","Learning TypeScript — Josh Goldberg","TypeScript Deep Dive — Basarat Ali"]);
  return h;
},

rust: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg";
  let h = hero(ic, "Rust", "Безопасность памяти без GC", ["Системное ПО","WebAssembly","CLI","Производительность"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и изменяемость","Типы данных","Функции","Управление потоком","Владение (Ownership)","Структуры","Перечисления и Pattern Matching","Обработка ошибок","Трейты"]);
  h += section(1,"Hello World","Rust компилируется через rustc или Cargo (менеджер пакетов). println! — макрос, не функция.",
`// Вывод с макросом println!
fn main() {
    println!("Hello, World!");

    // Форматирование
    let name = "Rust";
    let year = 2015;
    println!("{name} создан в {year} году");

    // Отладочный вывод
    let nums = vec![1, 2, 3];
    println!("{:?}", nums);   // [1, 2, 3]
    println!("{:#?}", nums);  // красивый вывод

    // Математика
    println!("2^10 = {}", 2_i32.pow(10));  // 1024
}`,
    "! в println! означает макрос, не функцию. {:?} — отладочный формат, {:#?} — красивый. _ в числах 1_000_000 улучшает читаемость.", "rust", "rust");
  h += section(2,"Переменные и изменяемость","По умолчанию переменные в Rust неизменяемы. mut делает их изменяемыми. let shadowing позволяет переобъявить переменную.",
`fn main() {
    // Неизменяемая переменная
    let x = 5;
    // x = 6; // ОШИБКА: cannot assign twice to immutable variable

    // Изменяемая
    let mut count = 0;
    count += 1;
    count += 1;
    println!("count = {count}");  // 2

    // Shadowing — переобъявление
    let spaces = "   ";
    let spaces = spaces.len();  // теперь spaces: usize
    println!("Пробелов: {spaces}");

    // Константа
    const MAX_POINTS: u32 = 100_000;
    println!("Макс: {MAX_POINTS}");
}`,
    "Неизменяемость по умолчанию — особенность Rust для безопасности. Shadowing позволяет изменить тип переменной. const требует явного типа.", "rust", "rust");
  h += section(3,"Типы данных","Rust строго типизирован. Целые числа имеют размер (i8, i16, i32, i64, u8...) и поведение при переполнении.",
`fn main() {
    // Целые числа (i — знаковые, u — беззнаковые)
    let a: i32 = -42;
    let b: u64 = 1_000_000;
    let byte: u8 = 255;

    // Дробные
    let f1: f32 = 3.14;
    let f2: f64 = 2.71828182845;

    // Boolean
    let flag: bool = true;

    // Символ (Unicode!)
    let ch: char = '🦀';
    println!("Краб: {ch}");

    // Кортеж
    let tup: (i32, f64, &str) = (500, 6.4, "hello");
    let (x, y, z) = tup;  // деструктуризация
    println!("{x} {y} {z}");

    // Массив фиксированного размера
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    println!("Первый: {}", arr[0]);
}`,
    "char в Rust хранит Unicode скаляр — 4 байта. [i32; 5] — тип массива с размером. Деструктуризация кортежей делает код чище.", "rust", "rust");
  h += section(4,"Функции","Функции объявляются через fn. Тип каждого параметра обязателен. Последнее выражение без ; — возвращаемое значение.",
`fn add(a: i32, b: i32) -> i32 {
    a + b  // без ; — возвращается
}

fn greet(name: &str) -> String {
    format!("Привет, {}!", name)
}

// Несколько возвращаемых значений через кортеж
fn min_max(nums: &[i32]) -> (i32, i32) {
    let mut min = nums[0];
    let mut max = nums[0];
    for &n in nums {
        if n < min { min = n; }
        if n > max { max = n; }
    }
    (min, max)
}

fn main() {
    println!("{}", add(3, 5));
    println!("{}", greet("Алиса"));

    let nums = [3, 1, 4, 1, 5, 9, 2, 6];
    let (min, max) = min_max(&nums);
    println!("min={min}, max={max}");
}`,
    "-> указывает тип возвращаемого значения. Без точки с запятой в конце функция возвращает это выражение. format! строит строку.", "rust", "rust");
  h += section(5,"Управление потоком","if, loop, while, for in — управляющие конструкции Rust. if — выражение, может возвращать значение.",
`fn main() {
    let x = 7;

    // if как выражение
    let status = if x > 5 { "большое" } else { "маленькое" };
    println!("{status}");

    // loop — бесконечный цикл с возвратом значения
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 { break counter * 2; }
    };
    println!("result = {result}");  // 20

    // while
    let mut n = 3;
    while n > 0 {
        println!("{n}");
        n -= 1;
    }

    // for — перебор итератора
    for i in 0..5 {
        print!("{i} ");  // 0 1 2 3 4
    }

    let fruits = ["apple", "banana", "cherry"];
    for (i, fruit) in fruits.iter().enumerate() {
        println!("{i}: {fruit}");
    }
}`,
    "0..5 — диапазон (не включает 5), 0..=5 включает 5. loop с break может вернуть значение — уникальная особенность Rust.", "rust", "rust");
  h += section(6,"Владение (Ownership)","Ownership — главная инновация Rust. Каждое значение имеет одного владельца. При перемещении старый владелец недействителен.",
`fn main() {
    // Move — перемещение владения
    let s1 = String::from("hello");
    let s2 = s1;  // s1 перемещён в s2
    // println!("{s1}"); // ОШИБКА: s1 перемещён
    println!("{s2}");  // OK

    // Clone — явное копирование
    let s3 = s2.clone();
    println!("{s2} {s3}");  // оба работают

    // Copy — примитивы копируются автоматически
    let x = 5;
    let y = x;  // x скопирован, не перемещён
    println!("{x} {y}");  // оба работают

    // Borrowing — заимствование
    let s4 = String::from("world");
    let len = calculate_len(&s4);  // передаём ссылку
    println!("{s4} имеет {len} символов");  // s4 не перемещён
}

fn calculate_len(s: &String) -> usize {
    s.len()  // читаем, не владеем
}`,
    "& — ссылка (заимствование). Заимствованную переменную нельзя изменить без mut. Ownership — это как компилятор управляет памятью без GC.", "rust", "rust");
  h += section(7,"Структуры","struct в Rust — аналог классов. Методы добавляются через блок impl.",
`#[derive(Debug)]
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    // Ассоциированная функция (конструктор)
    fn new(width: f64, height: f64) -> Self {
        Rectangle { width, height }
    }

    // Метод — первый параметр &self
    fn area(&self) -> f64 {
        self.width * self.height
    }

    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }

    fn is_square(&self) -> bool {
        self.width == self.height
    }
}

fn main() {
    let rect = Rectangle::new(5.0, 3.0);
    println!("Площадь: {}", rect.area());
    println!("Квадрат: {}", rect.is_square());
    println!("{:?}", rect);  // debug вывод
}`,
    "#[derive(Debug)] автоматически реализует отладочный вывод. Self — псевдоним текущего типа. :: для ассоциированных функций, . для методов.", "rust", "rust");
  h += section(8,"Перечисления и Pattern Matching","enum в Rust мощнее чем в других языках — может хранить данные. match обязателен для всех вариантов.",
`#[derive(Debug)]
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(String),  // хранит данные!
}

fn value(coin: &Coin) -> u32 {
    match coin {
        Coin::Penny      => 1,
        Coin::Nickel     => 5,
        Coin::Dime       => 10,
        Coin::Quarter(s) => {
            println!("Квотер из {s}");
            25
        }
    }
}

fn main() {
    let c = Coin::Quarter(String::from("Аляска"));
    println!("{} центов", value(&c));

    // Option<T> — встроенный enum для nullable
    let some_num: Option<i32> = Some(42);

    if let Some(n) = some_num {
        println!("Число: {n}");
    }
}`,
    "Option<T> заменяет null — нет NullPointerException. match проверяет все варианты на этапе компиляции. if let удобен для одного варианта.", "rust", "rust");
  h += section(9,"Обработка ошибок","Result<T, E> — стандартный способ обработки ошибок. ? оператор распространяет ошибку вверх.",
`use std::fs;
use std::io;

// Result<Ok, Err>
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Деление на ноль"))
    } else {
        Ok(a / b)
    }
}

// ? — оператор распространения ошибки
fn read_file(path: &str) -> Result<String, io::Error> {
    let content = fs::read_to_string(path)?;  // если ошибка — возврат
    Ok(content)
}

fn main() {
    // match для обработки
    match divide(10.0, 3.0) {
        Ok(result) => println!("Результат: {result:.4}"),
        Err(e)     => println!("Ошибка: {e}"),
    }

    // unwrap_or — значение по умолчанию
    let result = divide(5.0, 0.0).unwrap_or(0.0);
    println!("Или 0: {result}");
}`,
    "? работает только в функциях, возвращающих Result или Option. unwrap() паникует при Err — используйте только в прототипах.", "rust", "rust");
  h += section(10,"Трейты","Trait — аналог интерфейса. Определяет общее поведение для разных типов.",
`use std::f64::consts::PI;

trait Shape {
    fn area(&self) -> f64;
    fn perimeter(&self) -> f64;
    // Метод по умолчанию
    fn describe(&self) -> String {
        format!("Площадь: {:.2}", self.area())
    }
}

struct Circle { radius: f64 }
struct Rect   { width: f64, height: f64 }

impl Shape for Circle {
    fn area(&self)      -> f64 { PI * self.radius.powi(2) }
    fn perimeter(&self) -> f64 { 2.0 * PI * self.radius }
}

impl Shape for Rect {
    fn area(&self)      -> f64 { self.width * self.height }
    fn perimeter(&self) -> f64 { 2.0 * (self.width + self.height) }
}

// Принимает любой Shape через impl Trait
fn print_shape(s: &impl Shape) {
    println!("{}", s.describe());
}

fn main() {
    let c = Circle { radius: 5.0 };
    let r = Rect { width: 4.0, height: 3.0 };
    print_shape(&c);
    print_shape(&r);
}`,
    "impl Trait — синтаксический сахар для generics. Трейты можно реализовать на любом типе, даже встроенном. Методы по умолчанию можно переопределить.", "rust", "rust");
  h += booksSection(["The Rust Programming Language (бесплатно!)","Rust in Action — Tim McNamara","Programming Rust — Blandy & Orendorff","Rust for Rustaceans — Jon Gjengset","Zero To Production In Rust — Luca Palmieri"]);
  return h;
},

swift: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg";
  let h = hero(ic, "Swift", "Мощный, быстрый, безопасный", ["iOS","macOS","Apple","Server"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и константы","Опционалы","Условия","Циклы","Функции","Классы","Структуры","Перечисления","Протоколы"]);
  h += section(1,"Hello World","Swift — современный язык Apple. Безопасен, выразителен и быстр.",
`import Foundation

// Вывод
print("Hello, World!")

// Интерполяция строк
let name = "Swift"
let version = 5.9
print("Язык \\(name) версии \\(version)")

// Многострочные строки
let message = """
    Это многострочная
    строка в Swift.
    """
print(message)`,
    "print() автоматически добавляет перевод строки. \\(expression) — интерполяция строк. Тройные кавычки для многострочного текста.", "swift", "swift");
  h += section(2,"Переменные и константы","var — изменяемые, let — константы. Swift выводит типы автоматически.",
`// let — константа (предпочтительно)
let pi = 3.14159
let name: String = "Анна"

// var — изменяемая
var score = 0
score += 10

// Типы
let integer: Int = 42
let floating: Double = 3.14
let boolean: Bool = true
let text: String = "Привет"

// Type inference
let inferred = 100      // Int
let inferredF = 3.14    // Double

// Печать типа
print(type(of: inferred))  // Int`,
    "Используйте let везде, где значение не нужно менять — Swift сам предложит это. Это улучшает безопасность кода.", "swift", "swift");
  h += section(3,"Опционалы","Optional — тип, который может содержать значение или nil. Главный инструмент безопасности Swift.",
`// Optional — может быть nil
var name: String? = "Анна"
name = nil  // OK

// Безопасное извлечение (if let)
if let unwrapped = name {
    print("Имя: \\(unwrapped)")
} else {
    print("Имя не задано")
}

// guard let — ранний выход
func greet(_ name: String?) {
    guard let n = name else {
        print("Имя отсутствует")
        return
    }
    print("Привет, \\(n)!")
}

// Nil coalescing
let displayName = name ?? "Гость"

// Optional chaining
let length = name?.count  // Int? — nil если name nil`,
    "?? — оператор по умолчанию: возвращает правое если левое nil. guard let чище if let когда нужен ранний выход.", "swift", "swift");
  h += section(4,"Условия","if/else, switch, ternary. Switch в Swift обязан покрывать все случаи и поддерживает pattern matching.",
`let score = 85

// if/else if/else
if score >= 90 {
    print("Отлично")
} else if score >= 70 {
    print("Хорошо")
} else {
    print("Нужно улучшить")
}

// Switch — мощный, с pattern matching
switch score {
case 90...100:
    print("A")
case 70..<90:
    print("B")
case 50..<70:
    print("C")
default:
    print("F")
}

// Switch со строкой
let lang = "Swift"
switch lang {
case "Swift", "Objective-C":
    print("Apple языки")
case "Kotlin", "Java":
    print("Android языки")
default:
    print("Другой язык")
}`,
    "... включает оба конца диапазона, ..< исключает правый. Запятая в case объединяет несколько вариантов.", "swift", "swift");
  h += section(5,"Циклы","for-in, while, repeat-while. Swift имеет мощный синтаксис диапазонов.",
`// for-in с диапазоном
for i in 1...5 {
    print(i)
}

// Игнорировать переменную
for _ in 1...3 {
    print("Повтор")
}

// Перебор массива
let fruits = ["яблоко", "банан", "вишня"]
for fruit in fruits {
    print(fruit)
}

// С индексом
for (i, fruit) in fruits.enumerated() {
    print("\\(i): \\(fruit)")
}

// while
var n = 10
while n > 0 {
    print(n)
    n -= 3
}

// stride — шаг
for i in stride(from: 0, to: 20, by: 5) {
    print(i)  // 0 5 10 15
}`,
    "stride(from:to:by:) задаёт произвольный шаг. enumerated() даёт индекс и значение одновременно.", "swift", "swift");
  h += section(6,"Функции","Функции в Swift имеют метки параметров, несколько возвращаемых значений через кортежи и замыкания.",
`// Базовая функция
func greet(_ name: String, greeting: String = "Привет") -> String {
    return "\\(greeting), \\(name)!"
}

print(greet("Анна"))                 // Привет, Анна!
print(greet("Боб", greeting: "Здравствуй"))

// Несколько возвращаемых значений
func minMax(_ array: [Int]) -> (min: Int, max: Int) {
    return (array.min()!, array.max()!)
}

let (minVal, maxVal) = minMax([3, 1, 4, 1, 5, 9])
print("min=\\(minVal), max=\\(maxVal)")

// Вариативные параметры
func sum(_ numbers: Int...) -> Int {
    numbers.reduce(0, +)
}
print(sum(1, 2, 3, 4, 5))  // 15

// Замыкание
let double = { (x: Int) -> Int in x * 2 }
print(double(5))  // 10`,
    "_ убирает метку параметра при вызове. reduce(0, +) суммирует все элементы. Метки аргументов делают вызовы похожими на предложения.", "swift", "swift");
  h += section(7,"Классы","Классы в Swift — ссылочные типы. Поддерживают наследование, deinit, ARC.",
`class Animal {
    let name: String
    var sound: String

    init(name: String, sound: String) {
        self.name = name
        self.sound = sound
    }

    func speak() -> String {
        return "\\(name) говорит: \\(sound)"
    }
}

class Dog: Animal {
    init(name: String) {
        super.init(name: name, sound: "Гав!")
    }

    func fetch() -> String {
        return "\\(name) принёс мяч!"
    }

    // Переопределение
    override func speak() -> String {
        return super.speak() + " 🐕"
    }
}

let dog = Dog(name: "Рекс")
print(dog.speak())   // Рекс говорит: Гав! 🐕
print(dog.fetch())   // Рекс принёс мяч!`,
    "override обязателен при переопределении метода — компилятор проверит, что метод есть в родителе. super вызывает родительскую реализацию.", "swift", "swift");
  h += section(8,"Структуры","Структуры — значимые типы. При присваивании создаётся копия. Предпочтительны в Swift.",
`struct Point {
    var x: Double
    var y: Double

    // Memberwise init создаётся автоматически!

    func distance(to other: Point) -> Double {
        let dx = x - other.x
        let dy = y - other.y
        return (dx*dx + dy*dy).squareRoot()
    }

    // mutating — метод изменяет структуру
    mutating func move(by dx: Double, _ dy: Double) {
        x += dx
        y += dy
    }
}

var p1 = Point(x: 0, y: 0)
var p2 = Point(x: 3, y: 4)

print("Дистанция: \\(p1.distance(to: p2))")  // 5.0

p1.move(by: 1, 1)
print("p1: (\\(p1.x), \\(p1.y))")  // (1.0, 1.0)`,
    "Структуры — копируются при присваивании (value semantics). mutating нужен если метод меняет свойства. Memberwise init бесплатный.", "swift", "swift");
  h += section(9,"Перечисления","Enum в Swift — мощный инструмент. Может содержать связанные значения и вычисляемые свойства.",
`enum Direction {
    case north, south, east, west

    var opposite: Direction {
        switch self {
        case .north: return .south
        case .south: return .north
        case .east:  return .west
        case .west:  return .east
        }
    }
}

// Связанные значения
enum Result {
    case success(value: Int)
    case failure(error: String)
}

let r = Result.success(value: 42)
switch r {
case .success(let val):
    print("Успех: \\(val)")
case .failure(let err):
    print("Ошибка: \\(err)")
}

// Enum с raw value
enum Planet: Int {
    case mercury = 1, venus, earth, mars
}
print(Planet.earth.rawValue)  // 3`,
    "Вычисляемые свойства делают enum умнее. Связанные значения как в Rust — каждый case хранит свои данные. rawValue для конвертации.", "swift", "swift");
  h += section(10,"Протоколы","Protocol в Swift — мощнее интерфейсов. Поддерживает расширения с реализацией по умолчанию.",
`protocol Describable {
    var description: String { get }
    func describe()
}

// Расширение протокола — реализация по умолчанию
extension Describable {
    func describe() {
        print(description)
    }
}

struct Car: Describable {
    let brand: String
    let year: Int

    var description: String {
        "\\(brand) (\\(year))"
    }
}

struct Book: Describable {
    let title: String
    let author: String

    var description: String {
        "\\\"\\(title)\\\" — \\(author)"
    }
}

let items: [any Describable] = [
    Car(brand: "Tesla", year: 2024),
    Book(title: "Война и мир", author: "Толстой")
]

for item in items {
    item.describe()
}`,
    "extension Describable даёт реализацию по умолчанию — типы могут её переопределить или использовать. any Describable — существующий тип (Swift 5.7+).", "swift", "swift");
  h += booksSection(["Swift Programming Language (бесплатно, Apple)","Swift in Depth — Tjeerd in 't Veen","iOS Programming — Big Nerd Ranch","Hacking with Swift — Paul Hudson","Modern Concurrency in Swift — Marin Todorov"]);
  return h;
},

kotlin: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg";
  let h = hero(ic, "Kotlin", "Современный Java — лаконично и безопасно", ["Android","Серверная","Multiplatform","ООП"]);
  h += progressBar();
  h += toc(["Hello World","Переменные","Null Safety","Условия","Циклы","Функции","Классы","Data Classes","Коллекции","Корутины"]);
  h += section(1,"Hello World","Kotlin работает на JVM и полностью совместим с Java. Компактнее Java в несколько раз.",
`fun main() {
    println("Hello, World!")
    val name = "Kotlin"; val version = 2.0
    println("Язык $name версии $version")
    val msg = """
        |Kotlin — лаконичный
        |и безопасный язык.
    """.trimMargin()
    println(msg)
}`,
    "fun — объявление функции. $ — интерполяция строк. trimMargin() убирает отступы до |. Нет точек с запятой!", "kotlin", "kotlin");
  h += section(2,"Переменные","val — неизменяемая (как final), var — изменяемая. Kotlin выводит типы автоматически.",
`fun main() {
    val pi = 3.14159          // вывод типа: Double
    val name: String = "Анна" // явный тип
    var score = 0
    score += 10               // var можно менять
    // Явные типы
    val n: Int = 42;  val big: Long = 1_000_000L
    val flag: Boolean = true; val ch: Char = 'A'
    // Преобразование
    val str = n.toString()    // "42"
    val back = str.toInt()    // 42
    println("$str -> $back")
}`,
    "Kotlin не допускает неявных числовых преобразований — нужно явно вызывать .toInt(), .toLong() и т.д.", "kotlin", "kotlin");
  h += section(3,"Null Safety","Kotlin разделяет nullable и non-nullable типы на уровне компилятора — NPE становится невозможным.",
`fun main() {
    var name: String? = "Анна"
    name = null                      // OK — тип nullable

    val len = name?.length           // safe call: null если name == null
    val display = name ?: "Гость"    // Elvis: значение по умолчанию
    // name!!.length                 // !! — NPE если null, избегать!

    if (name != null) {
        println(name.length)         // smart cast: компилятор знает non-null
    }
    // let — выполнить блок только если не null
    name?.let { println("Привет, \${it}! Длина: \${it.length}") }
}`,
    "?. не бросает исключение — возвращает null. ?: задаёт запасное значение. !! используйте только если точно уверены.", "kotlin", "kotlin");
  h += section(4,"Условия","if — выражение в Kotlin (возвращает значение). when — мощный switch с диапазонами.",
`fun main() {
    val score = 85
    // if как выражение
    val grade = if (score >= 90) "A" else if (score >= 70) "B" else "C"
    println(grade)
    // when с диапазонами
    when (score) {
        in 90..100 -> println("Отлично")
        in 70..89  -> println("Хорошо")
        in 50..69  -> println("Удовлетворительно")
        else       -> println("Неудовлетворительно")
    }
    // when без аргумента — замена if-else цепочке
    val x = 15
    when {
        x < 0   -> println("Отрицательное")
        x == 0  -> println("Ноль")
        else    -> println("Положительное")
    }
}`,
    "when возвращает значение (как if). in — элегантная проверка диапазона. when без аргумента заменяет if/else if цепочку.", "kotlin", "kotlin");
  h += section(5,"Циклы","for, while, repeat. Kotlin поддерживает диапазоны с шагом и встроенные итераторы.",
`fun main() {
    for (i in 1..5)         print("$i ")   // 1 2 3 4 5
    for (i in 0 until 5)    print("$i ")   // 0 1 2 3 4
    for (i in 0..20 step 5) print("$i ")   // 0 5 10 15 20
    for (i in 5 downTo 1)   print("$i ")   // 5 4 3 2 1

    val fruits = listOf("яблоко", "банан", "вишня")
    fruits.forEach { println(it) }
    fruits.forEachIndexed { i, f -> println("$i: $f") }
}`,
    "downTo, step, until — встроенные операторы диапазонов. forEach с лямбдой — идиоматичный способ перебора коллекций.", "kotlin", "kotlin");
  h += section(6,"Функции","Аргументы по умолчанию, именованные аргументы, функции-расширения и лямбды.",
`fun greet(name: String, greeting: String = "Привет") = "$greeting, $name!"
fun String.isPalindrome() = this == this.reversed()
fun square(x: Int) = x * x
fun applyTwice(x: Int, f: (Int) -> Int) = f(f(x))

fun main() {
    println(greet("Анна"))
    println(greet(name = "Боб", greeting = "Здравствуй"))
    println("kayak".isPalindrome())   // true
    val sumOf = { a: Int, b: Int -> a + b }
    println(sumOf(3, 4))              // 7
    println(applyTwice(2, ::square))  // 16
}`,
    "Функции-расширения добавляют методы к любому типу без наследования. :: — ссылка на функцию. Single-expression синтаксис убирает return.", "kotlin", "kotlin");
  h += section(7,"Классы","Первичный конструктор прямо в заголовке. Классы final по умолчанию — open разрешает наследование.",
`class Person(val name: String, var age: Int) {
    init { require(age >= 0) { "Возраст не может быть отрицательным" } }
    fun greet() = "Привет, меня зовут $name!"
    override fun toString() = "Person($name, $age)"
}

open class Animal(val name: String) {
    open fun speak() = "$name издаёт звук"
}
class Dog(name: String) : Animal(name) {
    override fun speak() = "$name говорит: Гав!"
}

fun main() {
    val p = Person("Анна", 25)
    println(p.greet()); println(p)
    val dog: Animal = Dog("Рекс")
    println(dog.speak())
}`,
    "open нужен для наследования — по умолчанию классы final. require — проверка аргументов с исключением. Полиморфизм через open/override.", "kotlin", "kotlin");
  h += section(8,"Data Classes","data class автоматически генерирует equals, hashCode, toString, copy и деструктуризацию.",
`data class User(val id: Int, val name: String, val email: String, val age: Int = 0)

fun main() {
    val u1 = User(1, "Анна", "anna@example.com", 25)
    val u2 = User(1, "Анна", "anna@example.com", 25)
    println(u1 == u2)           // true — сравнение по содержимому
    println(u1)                 // User(id=1, name=Анна, ...)
    val updated = u1.copy(age = 26)
    println(updated.age)        // 26
    val (id, name, email) = u1  // деструктуризация
    println("$id: $name ($email)")
}`,
    "copy создаёт новый объект с изменёнными полями — основа иммутабельного стиля. Деструктуризация работает по порядку полей.", "kotlin", "kotlin");
  h += section(9,"Коллекции","Kotlin разделяет изменяемые и неизменяемые коллекции. Богатый API: filter, map, groupBy, flatMap.",
`fun main() {
    val nums = listOf(1, 2, 3, 4, 5)
    val map  = mapOf("a" to 1, "b" to 2)
    val mut  = mutableListOf(1, 2, 3).also { it.add(4) }

    val evens   = nums.filter { it % 2 == 0 } // [2, 4]
    val doubled = nums.map { it * 2 }          // [2,4,6,8,10]
    val sum     = nums.sum()                   // 15

    val words = listOf("apple", "banana", "avocado", "blueberry")
    val byLetter = words.groupBy { it.first() }
    println(byLetter)

    val flat = listOf(listOf(1,2), listOf(3,4)).flatMap { it }
    println(flat) // [1, 2, 3, 4]
}`,
    "it — неявный параметр в однопараметрных лямбдах. also возвращает сам объект. to — инфиксная функция для создания Pair.", "kotlin", "kotlin");
  h += section(10,"Корутины","Корутины — лёгкий способ писать асинхронный код. suspend функции приостанавливаются без блокировки потока.",
`import kotlinx.coroutines.*

suspend fun fetchUser(id: Int): String { delay(1000); return "User#$id" }
suspend fun fetchScore(userId: String): Int { delay(500); return 95 }

fun main() = runBlocking {
    // Последовательно
    val user = fetchUser(1)
    println("$user: \${fetchScore(user)}")

    // Параллельно через async/await
    val u = async { fetchUser(2) }
    val s = async { fetchScore("User#2") }
    println("\${u.await()}: \${s.await()}")

    launch { println("Фоновая задача") } // fire-and-forget
}`,
    "suspend функции приостанавливаются без блокировки потока. async возвращает Deferred, await() ждёт результат. launch — запустить и забыть.", "kotlin", "kotlin");
  h += booksSection(["Kotlin in Action — Jemerov & Isakova","Atomic Kotlin — Eckel & Isakova","Head First Kotlin — Griffiths","Kotlin Programming: Big Nerd Ranch Guide","Kotlin Coroutines Deep Dive — Moskała"]);
  return h;
},

ruby: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg";
  let h = hero(ic, "Ruby", "Программирование с радостью", ["Веб (Rails)","Скрипты","DSL","Прототипы"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и типы","Условия","Циклы","Методы","Массивы","Хэши","Классы","Блоки и итераторы","Модули"]);
  h += section(1,"Hello World","Ruby — выразительный и лаконичный. Нет точек с запятой, нет фигурных скобок.",
`# Вывод
puts "Hello, World!"

# Интерполяция строк
name = "Ruby"
version = 3.3
puts "Язык #{name} версии #{version}"

# p — отладочный вывод с типом
p 42
p "hello"
p [1, 2, 3]

# Многострочная строка
text = <<~HEREDOC
  Это многострочная
  строка в Ruby.
HEREDOC
puts text`,
    "puts добавляет перенос строки, print — нет. #{} — интерполяция строк. p выводит объект в отладочном виде (с кавычками для строк).", "ruby", "ruby");
  h += section(2,"Переменные и типы","Ruby динамически типизирован. Типы переменных определяет контекст использования.",
`# Переменные (нет let/var — просто имя)
name = "Анна"
age = 25
price = 9.99
active = true
nothing = nil

# Проверка типа
puts name.class   # String
puts age.class    # Integer
puts price.class  # Float

# Символ — лёгкая неизменяемая строка
status = :active
puts status.class    # Symbol
puts status.to_s     # "active"

# Множественное присваивание
a, b, c = 1, 2, 3
first, *rest = [1, 2, 3, 4, 5]
puts first          # 1
puts rest.inspect   # [2, 3, 4, 5]`,
    "nil — отсутствие значения в Ruby (как null). Символы (:name) используются как ключи — быстрее строк. *rest собирает оставшиеся элементы.", "ruby", "ruby");
  h += section(3,"Условия","Ruby имеет if/elsif/else, unless (отрицательный if) и modifier if/unless.",
`score = 85

# Стандартный if
if score >= 90
  puts "Отлично"
elsif score >= 70
  puts "Хорошо"
else
  puts "Нужно улучшить"
end

# unless — обратный if
unless score < 50
  puts "Сдано!"
end

# Inline/modifier if
puts "Молодец!" if score > 80
puts "Пересдача" unless score >= 60

# Тернарный оператор
status = score >= 60 ? "Сдано" : "Пересдача"
puts status

# Case/when — аналог switch
case score
when 90..100 then puts "A"
when 70..89  then puts "B"
when 50..69  then puts "C"
else              puts "F"
end`,
    "unless — уникальная особенность Ruby. Модификаторные if/unless (в конце строки) делают код читаемее для простых условий.", "ruby", "ruby");
  h += section(4,"Циклы","Ruby имеет for, while, loop, times, upto, downto и мощные итераторы.",
`# times — повторить N раз
5.times { |i| print "#{i} " }
puts

# upto / downto
1.upto(5)   { |i| print "#{i} " }
puts
5.downto(1) { |i| print "#{i} " }
puts

# each — перебор массива
["яблоко", "банан", "вишня"].each do |fruit|
  puts fruit
end

# while
n = 10
while n > 0
  print "#{n} "
  n -= 3
end

# loop + break
counter = 0
loop do
  counter += 1
  break if counter >= 5
end
puts "counter = #{counter}"`,
    "5.times, 1.upto(5) — объектно-ориентированные циклы Ruby. {} и do...end — два способа записи блока. break выходит из цикла.", "ruby", "ruby");
  h += section(5,"Методы","Методы в Ruby объявляются через def. Последнее выражение возвращается неявно.",
`# Метод с неявным return
def square(x)
  x * x  # автоматически возвращается
end

# Явный return
def divide(a, b)
  return "Ошибка: деление на 0" if b == 0
  a.to_f / b
end

# Параметры по умолчанию
def greet(name, greeting = "Привет")
  "#{greeting}, #{name}!"
end

# Именованные параметры (keyword arguments)
def create_user(name:, age:, city: "Москва")
  "#{name}, #{age}, #{city}"
end

puts square(5)                    # 25
puts greet("Анна")                # Привет, Анна!
puts greet("Боб", "Здравствуй")
puts create_user(name: "Алиса", age: 25)

# Блок как параметр
def repeat(n, &block)
  n.times { block.call }
end

repeat(3) { print "Ruby! " }`,
    "Неявный return — идиома Ruby. ? в имени метода (valid?) сигнализирует о возврате boolean. ! (save!) означает опасную версию метода.", "ruby", "ruby");
  h += section(6,"Массивы","Array в Ruby — гибкий, с богатым API. Поддерживает разные типы в одном массиве.",
`nums = [1, 2, 3, 4, 5]

# Доступ
puts nums[0]    # 1
puts nums[-1]   # 5 (с конца)
puts nums[1..3].inspect  # [2, 3, 4]

# Добавление/удаление
nums << 6            # добавить в конец
nums.push(7)         # тоже
nums.unshift(0)      # добавить в начало
nums.pop             # удалить с конца

# Функциональные методы
doubled = nums.map    { |n| n * 2 }
evens   = nums.select { |n| n.even? }
total   = nums.reduce(0) { |sum, n| sum + n }
big     = nums.reject { |n| n < 3 }

p doubled
p evens
puts total`,
    "<< — оператор добавления в массив. select/reject — filter и его противоположность. .even? и .odd? — удобные предикаты.", "ruby", "ruby");
  h += section(7,"Хэши","Hash в Ruby — пары ключ-значение. Символы как ключи — стандартная практика.",
`# Создание хэша
person = {
  name: "Анна",
  age: 25,
  city: "Москва"
}

# Доступ
puts person[:name]              # Анна
puts person.fetch(:age, 0)      # 25 (с умолчанием)

# Изменение
person[:email] = "anna@example.com"
person.delete(:city)

# Перебор
person.each { |key, value| puts "#{key}: #{value}" }

# Полезные методы
puts person.keys.inspect
puts person.values.inspect
puts person.has_key?(:name)  # true
puts person.length

# Трансформация
filtered = person.select { |k, v| v.is_a?(String) }
p filtered`,
    "Символы-ключи (name: vs :name =>) — современный синтаксис Ruby 1.9+. fetch с умолчанием безопаснее []. transform_values/keys — удобные методы.", "ruby", "ruby");
  h += section(8,"Классы","ООП в Ruby — чистое и элегантное. attr_accessor автоматически создаёт геттеры и сеттеры.",
`class BankAccount
  attr_reader :owner, :balance  # только геттеры

  def initialize(owner, balance = 0)
    @owner   = owner
    @balance = balance.to_f
  end

  def deposit(amount)
    raise ArgumentError, "Сумма должна быть > 0" if amount <= 0
    @balance += amount
    self
  end

  def withdraw(amount)
    raise "Недостаточно средств" if amount > @balance
    @balance -= amount
    self
  end

  def to_s
    "#{@owner}: #{'%.2f' % @balance} руб."
  end
end

acc = BankAccount.new("Анна", 1000)
acc.deposit(500).withdraw(200)  # method chaining
puts acc  # Анна: 1300.00 руб.`,
    "@ — переменная экземпляра. attr_reader/writer/accessor генерирует методы. return self позволяет method chaining.", "ruby", "ruby");
  h += section(9,"Блоки и итераторы","Блоки — анонимные функции. Основа выразительности Ruby.",
`# Блок с {} или do...end
[1,2,3].each { |n| puts n }

[1,2,3].each do |n|
  puts n * 2
end

# yield — передать управление блоку
def measure
  start = Time.now
  yield  # выполнить переданный блок
  puts "Время: #{Time.now - start} сек"
end

measure { sleep 0.1 }

# Proc и Lambda
greeter = Proc.new { |name| puts "Привет, #{name}!" }
greeter.call("Анна")

screamer = lambda { |s| s.upcase }
puts screamer.call("hello")  # HELLO

# Symbol to proc — элегантный синтаксис
words = ["hello", "world", "ruby"]
puts words.map(&:upcase).inspect  # ["HELLO", "WORLD", "RUBY"]
puts words.map(&:length).inspect  # [5, 5, 4]`,
    "&:method_name — конвертирует символ в блок. yield выполняет переданный блок. Lambda строже Proc — проверяет количество аргументов.", "ruby", "ruby");
  h += section(10,"Модули","Module — пространство имён и миксин. Позволяет добавить функциональность к классу без наследования.",
`module Greetable
  def greet
    "Привет, я #{name}!"
  end

  def farewell
    "До свидания от #{name}!"
  end
end

module Serializable
  def to_json_str
    "{\"class\": \"#{self.class}\"}"
  end
end

class User
  include Greetable
  include Serializable

  attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age  = age
  end
end

u = User.new("Анна", 25)
puts u.greet
puts u.farewell
puts u.to_json_str

# Module как пространство имён
module MyApp
  VERSION = "1.0.0"

  class Config
    def initialize
      @settings = {}
    end
  end
end

puts MyApp::VERSION`,
    "include добавляет методы экземпляра. extend — методы класса. :: — оператор пространства имён. Модули решают diamond problem множественного наследования.", "ruby", "ruby");
  h += booksSection(["Programming Ruby — Dave Thomas","The Well-Grounded Rubyist — David Black","Eloquent Ruby — Russ Olsen","Practical Object-Oriented Design — Sandi Metz","Rails Tutorial — Michael Hartl"]);
  return h;
},

csharp: () => {
  const ic = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
  let h = hero(ic, "C#", "Мощный язык платформы .NET", ["Геймдев (Unity)","Корпоративные системы","Windows","Веб (ASP.NET)"]);
  h += progressBar();
  h += toc(["Hello World","Переменные и типы","Условия","Циклы","Методы","Классы","Наследование","Интерфейсы","LINQ","async/await"]);
  h += section(1,"Hello World","C# компилируется через .NET. Пространство имён организует код.",
`using System;

namespace HelloApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            // Интерполяция строк
            string name = "C#";
            int version = 12;
            Console.WriteLine($"Язык {name} версии {version}");

            // Многострочная строка (C# 11)
            string message = """
                Это многострочная
                строка без экранирования.
                """;
            Console.WriteLine(message);
        }
    }
}`,
    "$\"...\" — интерполированная строка. Console.WriteLine добавляет перенос строки. Top-level statements (C# 9) позволяют убрать class и Main.", "csharp", "csharp");
  h += section(2,"Переменные и типы","C# строго типизирован. var выводит тип, но тип фиксируется на этапе компиляции.",
`// Явные типы
int age = 25;
double price = 9.99;
bool active = true;
char grade = 'A';
string name = "Анна";

// var — вывод типа (compile-time!)
var count = 42;         // int
var text = "hello";     // string
var pi = 3.14;          // double

// Nullable типы (может быть null)
int? nullableInt = null;
string? nullableStr = null;

// Проверка nullable
int length = nullableStr?.Length ?? 0;

// Константа
const double PI = 3.14159;

// Динамический тип (медленнее)
dynamic dyn = 42;
dyn = "теперь строка";  // OK`,
    "? после типа делает его nullable (int?). ?. — null-conditional оператор. ?? — null-coalescing. dynamic проверяется в рантайм, не компиляции.", "csharp", "csharp");
  h += section(3,"Условия","if/else, switch expression (C# 8+) — современный и лаконичный.",
`int score = 85;

// if/else if/else
if (score >= 90)
    Console.WriteLine("Отлично");
else if (score >= 70)
    Console.WriteLine("Хорошо");
else
    Console.WriteLine("Нужно улучшить");

// Switch expression (C# 8+) — возвращает значение
string grade = score switch
{
    >= 90 => "A",
    >= 70 => "B",
    >= 50 => "C",
    _     => "F"   // _ — wildcard
};
Console.WriteLine($"Оценка: {grade}");

// Pattern matching
object obj = 42;
if (obj is int n && n > 0)
    Console.WriteLine($"Положительное целое: {n}");`,
    "Switch expression с => — современный стиль. _ — паттерн «всё остальное». is с паттерном — type guard.", "csharp", "csharp");
  h += section(4,"Циклы","for, while, do-while, foreach — стандартный набор.",
`// for
for (int i = 0; i < 5; i++)
    Console.Write($"{i} ");
Console.WriteLine();

// foreach — для коллекций
string[] fruits = { "яблоко", "банан", "вишня" };
foreach (string fruit in fruits)
    Console.WriteLine(fruit);

// while
int n = 10;
while (n > 0)
{
    Console.Write($"{n} ");
    n -= 3;
}

// do-while — хотя бы один раз
int x = 0;
do
{
    Console.Write($"{x} ");
    x++;
} while (x < 3);

// break, continue
for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0) continue;  // пропустить чётные
    if (i > 7) break;           // стоп на 8
    Console.Write($"{i} ");     // 1 3 5 7
}`,
    "foreach удобнее for для перебора коллекций — нет риска выйти за границы. LINQ .ForEach — ещё один способ.", "csharp", "csharp");
  h += section(5,"Методы","Методы могут иметь optional параметры, именованные аргументы, out/ref и params.",
`using System;

class Calculator
{
    // Статический метод
    public static int Add(int a, int b) => a + b;

    // Optional параметр
    public static string Greet(string name, string greeting = "Привет")
        => $"{greeting}, {name}!";

    // out — метод возвращает несколько значений
    public static bool TryDivide(int a, int b, out double result)
    {
        if (b == 0) { result = 0; return false; }
        result = (double)a / b;
        return true;
    }

    // params — переменное число аргументов
    public static int Sum(params int[] nums)
    {
        int total = 0;
        foreach (var n in nums) total += n;
        return total;
    }

    static void Main()
    {
        Console.WriteLine(Add(3, 5));
        Console.WriteLine(Greet("Анна"));

        if (TryDivide(10, 3, out double r))
            Console.WriteLine($"{r:F4}");

        Console.WriteLine(Sum(1, 2, 3, 4, 5));
    }
}`,
    "=> для выражений (expression-bodied members). out используется когда нужно вернуть несколько значений. params аналогично *args.", "csharp", "csharp");
  h += section(6,"Классы","C# поддерживает свойства (Properties) с get/set, которые лучше простых полей.",
`public class BankAccount
{
    // Свойства — лучше открытых полей
    public string Owner { get; private set; }
    public decimal Balance { get; private set; }

    // Конструктор
    public BankAccount(string owner, decimal initialBalance = 0)
    {
        Owner = owner;
        Balance = initialBalance >= 0
            ? initialBalance
            : throw new ArgumentException("Баланс не может быть отрицательным");
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Сумма должна быть положительной");
        Balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount > Balance) return false;
        Balance -= amount;
        return true;
    }

    public override string ToString() =>
        $"{Owner}: {Balance:C}";
}`,
    "Свойства (get; set;) — предпочтительнее публичных полей. private set — читать могут все, писать только класс. :C — форматирование как валюта.", "csharp", "csharp");
  h += section(7,"Наследование","C# поддерживает одиночное наследование, абстрактные классы и запечатанные (sealed) классы.",
`public abstract class Shape
{
    public string Color { get; set; } = "Чёрный";

    // Абстрактный метод — нужно реализовать
    public abstract double Area();
    public abstract double Perimeter();

    // Виртуальный — можно переопределить
    public virtual string Describe() =>
        $"{GetType().Name}: площадь {Area():F2}";
}

public class Circle : Shape
{
    public double Radius { get; }
    public Circle(double r) => Radius = r;

    public override double Area()      => Math.PI * Radius * Radius;
    public override double Perimeter() => 2 * Math.PI * Radius;
}

public class Rectangle : Shape
{
    public double Width { get; }
    public double Height { get; }
    public Rectangle(double w, double h) { Width = w; Height = h; }

    public override double Area()      => Width * Height;
    public override double Perimeter() => 2 * (Width + Height);
}

// Полиморфизм
Shape[] shapes = { new Circle(5), new Rectangle(4, 3) };
foreach (var s in shapes)
    Console.WriteLine(s.Describe());`,
    "abstract нельзя инстанциировать — только наследоваться. virtual позволяет переопределить, override обязателен при переопределении.", "csharp", "csharp");
  h += section(8,"Интерфейсы","Interface в C# — контракт. Класс может реализовывать несколько интерфейсов.",
`public interface IAnimal
{
    string Name { get; }
    string Speak();
    // Default implementation (C# 8+)
    string Describe() => $"Я {Name} и говорю '{Speak()}'";
}

public interface ISwimmable
{
    void Swim();
}

public class Duck : IAnimal, ISwimmable
{
    public string Name { get; }
    public Duck(string name) => Name = name;

    public string Speak() => "Кря!";
    public void Swim() => Console.WriteLine($"{Name} плывёт!");
}

// Использование интерфейса как типа
static void MakeNoise(IAnimal animal)
{
    Console.WriteLine(animal.Describe());
}

var duck = new Duck("Утёнок");
MakeNoise(duck);
duck.Swim();`,
    "Один класс — несколько интерфейсов (решает проблему множественного наследования). Default implementation позволяет добавлять методы без breaking change.", "csharp", "csharp");
  h += section(9,"LINQ","LINQ (Language Integrated Query) — мощный инструмент для работы с коллекциями.",
`using System;
using System.Collections.Generic;
using System.Linq;

var people = new List<(string Name, int Age, string City)>
{
    ("Анна",   25, "Москва"),
    ("Боб",    30, "Питер"),
    ("Чарли",  22, "Москва"),
    ("Диана",  28, "Казань"),
    ("Елена",  35, "Москва"),
};

// Синтаксис запроса
var moscowAdults =
    from p in people
    where p.City == "Москва" && p.Age >= 25
    orderby p.Age
    select p.Name;

// Метод-цепочка (то же самое)
var result = people
    .Where(p => p.City == "Москва" && p.Age >= 25)
    .OrderBy(p => p.Age)
    .Select(p => p.Name)
    .ToList();

Console.WriteLine(string.Join(", ", result));

// Агрегация
var avgAge = people.Average(p => p.Age);
var maxAge = people.Max(p => p.Age);
var byCity = people.GroupBy(p => p.City);`,
    "LINQ работает с любым IEnumerable. Ленивое выполнение — запрос не выполняется до ToList()/ToArray(). GroupBy возвращает IGrouping.", "csharp", "csharp");
  h += section(10,"async/await","C# имеет мощную асинхронную модель на основе Task. async/await делает асинхронный код читаемым.",
`using System;
using System.Net.Http;
using System.Threading.Tasks;

class AsyncDemo
{
    static readonly HttpClient http = new();

    // async метод возвращает Task<T>
    static async Task<string> FetchAsync(string url)
    {
        try
        {
            string content = await http.GetStringAsync(url);
            return content[..Math.Min(200, content.Length)];
        }
        catch (HttpRequestException ex)
        {
            return $"Ошибка: {ex.Message}";
        }
    }

    // Параллельное выполнение
    static async Task RunParallel()
    {
        var t1 = Task.Delay(1000);
        var t2 = Task.Delay(1500);
        await Task.WhenAll(t1, t2);  // ждём оба
        Console.WriteLine("Оба завершены!");
    }

    static async Task Main()
    {
        await RunParallel();
        Console.WriteLine("Готово!");
    }
}`,
    "Task — обещание будущего результата. await приостанавливает выполнение без блокировки потока. Task.WhenAll ждёт все задачи параллельно.", "csharp", "csharp");
  h += booksSection(["C# in Depth — Jon Skeet","Pro C# 10 — Andrew Troelsen","Head First C# — Greene & Stellman","C# Programming Yellow Book — Rob Miles","CLR via C# — Jeffrey Richter"]);
  return h;
}
};