// Глава 3.
// Классы, структуры и пространства имен.


// Конструкции верхнего уровня для проверки работы программы

using System.Net;
using System.Reflection;

Film obj1 = new Film("Пираты", 7.5, true);
obj1.PrintInfo();

Person obj2 = new Person();
Console.WriteLine($"{obj2.name} - {obj2.age}");

Music obj3 = new Music("Лунная соната.");
obj3.Print();

Film obj4 = new Film { title = "Чеба", rating=10, isWatched=false }; // для этого должен быть конструктор без параметров
obj4.PrintInfo();

Song obj5 = new Song {title = "Песенка", author = {name = "Снупи" } }; // пример с вложенным инициализатором
Song obj6 = new Song ();
obj5.Print();
obj6.Print();

Food obj7 = new Food("Пицца", 12); // пример работы деконструктора
(string t, int c) = obj7;
(_, int c2) = obj7;
Console.WriteLine($"{t} - {c} - {c2}");

// Классы и объекты_____________________________________________________________________________________________________________________________________________________________

// Пример реализации простого класса

class Film
{
    public string title;
    public double rating;
    public bool isWatched;

    public Film() 
    { }

    public Film (string title, double rating, bool isWatched)
    {
        this.title = title;
        this.rating = rating;
        this.isWatched = isWatched;
    }

    public void PrintInfo()
    {
        if (isWatched)
        {
            Console.Write($"Ты посмотрел фильм: ");
        }
        else 
        {
            Console.Write($"Посмотри фильм: ");
        }
        Console.WriteLine($"{title} - {rating}");
    }
}


//Конструкторы, инициализаторы и деконструкторы______________________________________________________________________________________________________________________________

// Простой пример с перегруженными конструкторами

class Person
{
    public string name;
    public int age;

    public Person() : this("Неизвестен") // первый конструктор вызывает второй
    { }
    public Person(string name) : this(name, 30) // вторуй конструктор вызывает третий
    { }
    public Person(string name, int age) // третий конструктор
    {
        this.name = name;
        this.age = age;
    }
}


// Первичные конструкторы
// - это добавление параметров к определению класса

public class Music(string title, string author)
{
    public Music(string title) : this(title, "Бетховен")
    { }
    public void Print() => Console.WriteLine($"{title} - {author}");
}


// Инициализаторы
// - это передача в фигурных скобках значений доступных полям
// Инициализаторы удобно применять, когда поле или свойство класса представляет другой класс:

public class Song
{
    public string title;
    public Author author;

    public Song()
    {
        title = "Без названия";
        author = new Author();
    }

    public void Print() => Console.WriteLine($"{title} - {author.name}");
}

public class Author
{
    public string name;

    public Author()
    {
        name = "Неизвестен";
    }
}


// Деконструкторы (не путать с деструкторами)

class Food
{
    public string title;
    public int coast;

    public Food(string title, int coast)
    {
        this.title = title;
        this.coast = coast;
    }

    public void Deconstruct(out string Title, out int Coast)
    {
        Title = title;
        Coast = coast;
    }

}