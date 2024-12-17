let form = document.forms["auth-form"]; // получили форму по ее name
// Для примера
//let username_input = document.auth-form.username_input; // получение input
let username_input = form.elements["username_input"];
let password_input = form.elements["password_input"]; // получение input другим способом
let submit_button = document.getElementsByClassName("submit-button")[0];
let username_warning = document.getElementById("username-warning");

console.log(username_input.value);

username_input.addEventListener("change", validateUsername);

submit_button.onclick = function(event){
    // event.preventDefault();
    window.location.href = "index.html";
}

function validateUsername(){
    if (!username_input.validity.valid){
        username_warning.textContent = username_input.validationMessage;
        username_input.style.border = "red";
    }
}

// let inputs = document.querySelectorAll(".form-input");
// let submint_button = document.getElementsByClassName("submit-button")[0];
// let username_warning = document.getElementsByClassName("warning")[0];
// let auth_form_warning = document.getElementsByClassName("warning")[1];

// submint_button.onclick = function(event){
//     event.preventDefault();
//     let username = inputs[0].value;
//     let password = inputs[1].value;

//     if (username == "Bob"){
//         username_warning.innerHTML = "Бобу нельзя заходить на сайт!";
//     }

//     if (username === password){
//         auth_form_warning.innerHTML = "username и пароль не могут совпадать.";
//     }

//     if (username == ""){
//         inputs[0].style.border = "3px solid red";
//         auth_form_warning.innerHTML = "Заполните обязательные поля.";
//     }

//     if (password == ""){
//         inputs[1].style.border = "3px solid red";
//         auth_form_warning.innerHTML = "Заполните обязательные поля.";
//     }

// }


/*ТЗ для формы:
    - при отправке формы с путстым полем:
        - обводим пустое поле красным бордером
        - сверху пишем заполнить обязательные поля
        - при фокусе бордер вновь становится зеленый
        
    - при*/
