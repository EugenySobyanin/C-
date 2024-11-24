// Глава: Основы JS

// Тип данных object
let obj_1 = {}; // пустой
let obj_2 = {name: "Боби", last_name: "Кларк"};
document.write(obj_2.name);

// Операции с условными операторами
// Если при && первый операнд возращает true, то возращается второй операнд
// А при || наоборот - второй операнд возвращается если первый - false
let age = 22;
age >= 17 && console.log("Возраст больше 17"); 
age < 17 || console.log("Возраст никак не меньше 17");

// Oператор ?? и ??=
// ?? Возвращает левый операнд если он не равен null или undefined
// ??= Если левый операнд null, undefined, то он принимает значение правого
console.log(null ?? 5); // 5
let a;
let b = 14;
a ??= b;
console.log(b); // 14

// parseInt() - преобразование строки в целое число
let str_num = "5677";
let str_num_2 = "557hello"; // Интересное свойство, можно использовать
console.log(typeof(parseInt(str_num))); // number
console.log(parseInt(str_num_2)); // 557

// NaN - Not a Number - не является числом
// isNan() - возвращает true - если объект нельзя преобразовать к числу
let nan_str = "abc";
console.log(parseInt(nan_str)); // вернет NaN

// Унарные + и - могут быть использованы для преобразований строк в числа
let aa = "12";
let bb = "22";
console.log(+aa, -bb); // 12 -22

// Массивы
// Из интересного: можно хранить разные типы и присваивать значение элементу которого нет в массиве
let arr1 = ["September", "Octoder", "November"];
arr1[7] = 12334;
console.log(arr1[7], arr1[6]); // 12334 undefined

// Циклы
for (let i = 1; i <= 10; console.log(i++));

// Цикл for ... in  - предназначен главным образом для перебора свойств объекта
let obj_3 = {
    name: "Bob",
    age: 27,
    is_normal: false,
    is_psycho: true 
};

for (prop in obj_3){
    console.log(prop, obj_3[prop]);
}

// Цикл for ... of - предназначен для перебора последовательностей
for (el of arr1){
    if (el){
        console.log(el);
    }
}

