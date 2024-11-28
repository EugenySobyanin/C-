let form = document.forms["registration"];
form.reset();

function sendForm(e){

    let values = [];
    values["username"] = form.username.value;
    values["name"] = form.name.value;
    values["email"] = form.email.value;
    values["password"] = form.password.value;
    values["second_password"] = form.second_password.value;
    let message_block = document.getElementById("message_block");
    let message = document.createElement("p");
    console.log(values["name"]);

    if (values["password"] != values["second_password"]){
        message.textContent = "Пароли не совпадают!";
        message_block.appendChild(message);
        e.preventDefault();
    }

    else if (values["name"] == ""){
        message.textContent = "Поле name - обязательное.";
        message_block.appendChild(message);
        e.preventDefault();
    }

    else {
        // console.log(values["name"]);
        console.log("Все норм.");
        e.preventDefault();
    }


}

let sendButton = document.registration.button_registration;
sendButton.addEventListener("click", sendForm);