let auth_form = document.autharization;


// let username = document.getElementsByClassName("input-username");

// console.log(username);

// let el = auth_form.username;
// let el_2 = auth_form.password;
// el.focus();
// console.log(el, el_2.type);

function sendForm(e){
    let username = auth_form.username.value;
    if (username == "Bob"){
        // alert("Нельзя авторизоваться с username Bob");
        let message_element = document.createElement("p");
        message_element.textContent = "Нельзя авторизоваться с именем Bob.";
        let message_block = document.getElementById("message_block");
        message_block.appendChild(message_element);
        e.preventDefault();
    }
    else{
        
    }
    document.autharization.reset();
}

let sendButton = document.autharization.button_auth;
sendButton.addEventListener("click", sendForm);





