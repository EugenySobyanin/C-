// Глава: Функциональное программирование

// Анонимные функции - можно не давать имя функции, а присвоить ее переменной
let func_1 = function(){
    console.log("Вызов анонимной функции через переменную.");
}
func_1();

// spread - оператор ... - позволяет передать массив в функцию, которая ждет параметры
function spread_func_1(first_name, age, is_psycho){
    console.log(`${first_name} - ${age} лет - ${is_psycho ? "психопат" : "нормальный"}.`);
}

let person_1 = ["Джек", 34, false, 14];
let person_2 = ["Майкл", 27, true];

spread_func_1(...person_1);
spread_func_1(...person_2);

// variadic function - функции с произвольным кол.вом параметров

// Объект arguments - переданные агрументы можно всегда получить через него
// arguments можно использовать даже если у функции объявлены параметры
function smart_sum(){
    let result = 0;
    for (arg of arguments){
        result += arg;
    }
    console.log(result);
}

smart_sum();
smart_sum(5, 10);
smart_sum(5, 10, 15, 100);

// rest-оператор ... - его так же можно комбинировать с обычными параметрами
function rest_func(sport, ...players){
    console.log(sport);
    for (index in players){
        console.log(players[index]);
    }
}

rest_func("hockey", "Ovechkin", "Malkin", "Thomas");

// функция как параметр функции
function sum(a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

function operation(a, b, func){
    console.log(`Результат - ${func(a, b)}`);
}

operation(2, 40, sum);
operation(22, 3, mult);

// Возрат функции из функции

// Возврат анонимной функции
function select_func(num){
    if (num == 1)
        return function(a, b){return a + b};
    else if (num == 2)
        return function(a, b){return a - b};
}
let action = select_func(2);
console.log(action(100, 20));

// Возврат именованной функции
function good_phrase(){
    console.log("Все хорошо!");
}

function select_2(num){
    switch(num){
        case 1: return good_phrase;
    }
}

let action_2 = select_2(1);
action_2();

// Стрелочные функции

// Обычный пример 
const print = (x, y) => `Sum - ${x + y}`;
document.write(print(99, 99));

// Пример возврата объекта из стрелочной функции
let user = (Username, Age) => ({username: Username, age: Age});

let user_1 = user("Tom", 25);
let user_2 = user("John", 23);

console.log(user_1.username, user_1.age);
console.log(user_2.username, user_2.age);

