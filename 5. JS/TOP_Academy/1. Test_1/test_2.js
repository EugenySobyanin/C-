let arr = [];

// let input_obj = document.getElementById("input_1");
// // let input_value = input_obj.value;

// alert(`Вы ввели ${input_obj.value}`);


// Задача 0.
function deleteZero(number){
    let result = "";
    for (let i = 0; i < String(number).length; i++){
        if (String(number)[i] != "0"){
            result += String(number)[i];
        }
    }
    return result;
}

//console.log(deleteZero(150105550908));


// Задача 1.
// Дату получаем в виде строки yy-mm-dd
function daysToDateCalc(date){
    let input_date = new Date(date);
    let current_date = new Date();
    let result_date;

    if (current_date > input_date){
        result_date = current_date - input_date;
        return `После вашей даты прошло - ${Math.floor(result_date / (1000 * 60 * 60 * 24))} дней`;
    }
    else {
        result_date = input_date - current_date;
        return `До вашей даты осталось - ${Math.floor(result_date / (1000 * 60 * 60 * 24)) + 1} дней`;
    }
}

// console.log(daysToDateCalc('2024-11-17'));


// Задача 2.
function checkYear(year){
    if (year % 4 == 0) return true;
    return false;
}

// console.log(checkYear(2009));


// Задача 3.
function daysToEndCurrentMonth(){
    let current_date = new Date();
    let current_moth = current_date.getMonth() + 1;
    let current_day = current_date.getDate();
    let monthWhere31Days = [1, 3, 5, 7, 8, 10, 12]
    let montWhere30Days = [4, 6, 9, 11]
    let result;
    if (monthWhere31Days.includes(current_moth)){
        result = 31 - current_day;
    }
    else if (montWhere30Days.includes(current_moth)){
        result = 30 - current_day;
    }
    else {
        result = 28 - current_day;
    }
    return `До конца текущего дня осталось ${result} дней.`;
}

// console.log(daysToEndCurrentMonth());


// Задача 4.
function deleteDublicate(arr){
    let result = [];
    arr.forEach(function(el){
        if (!result.includes(el)){
            result.push(el);
        }
    });
    return result;
}

// console.log(deleteDublicate([1, 1, 3, 4, 2, 3, 4, 4, 5, 7, 1, 8]));


// Задача 5.
function deleteNear(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i - 1] == arr[i]){
            continue;
        }
        result.push(arr[i]);
    }
    return result;
}

// console.log(deleteNear([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9]))


// Задача 6.
function cutInteger(number, digit_count){
    return Number(String(number).slice(0, digit_count));
}

// console.log(cutInteger(123456789, 5));


// Задача 7.
function digitOnly(str){
    for (let el of str){
        if (!/[0-9]/.test(el)){
            return false;
        }
    }
    return true;
}

// console.log(digitOnly("123333345b"));


// Задача 8.
// Принимает дату в формате yy-mm-dd
function dateIsCorrect(str_date){
    let date = new Date(str_date);
    return date instanceof Date && !isNaN(date);
}

// console.log(dateIsCorrect("2024-07-90"));


// Задача 9.
function sortText(text){
    return text.split(" ").sort().join(" ");
}

// console.log(sortText("Арбуз,  арбуз Абба голод дом "));


// Задача 10.
function lationOrCyrillic(letter){
    return (/^[a-zA-Z]$/.test(letter) ? "Буква из латинского алфавита." : "Буква из кириллицы.");
}

// console.log(lationOrCyrillic("а"));