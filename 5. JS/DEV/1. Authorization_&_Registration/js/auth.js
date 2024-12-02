let inputs = document.querySelectorAll(".form-input");
let submint_button = document.getElementsByClassName("submit-button")[0];
let username_warning = document.getElementsByClassName("warning")[0];
let auth_form_warning = document.getElementsByClassName("warning")[1];

submint_button.onclick = function(event){
    event.preventDefault();
    let username = inputs[0].value;
    let password = inputs[1].value;

    if (username == "Bob"){
        username_warning.innerHTML = "Бобу нельзя заходить на сайт!";
    }

    if (username === password){
        auth_form_warning.innerHTML = "username и пароль не могут совпадать.";
    }

    if (username == ""){
        inputs[0].style.border = "3px solid red";
    }

}