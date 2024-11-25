let output = document.getElementById("output-expression");
let buttons = document.getElementsByClassName("button");
let current_exp = "";
let input = document.getElementById("display");
let operators = ["+", "-", "/", "x", "."];

for (let i = 0; i < buttons.length; i++){

    buttons[i].onclick = function(e) {

        if (buttons[i].innerHTML == "⌫"){
            current_exp = current_exp.slice(0, -1);
            input.value = current_exp;
        }

        else if (operators.includes(
            buttons[i].innerHTML) && operators.includes(current_exp[current_exp.length-1] 
        )){
            current_exp = current_exp.split("");
            current_exp[current_exp.length-1] = buttons[i].innerHTML;
            current_exp = current_exp.join("");
            input.value = current_exp;
        }

        else if (buttons[i].innerHTML == "="){
            current_exp = current_exp.replace(/x/g, '*');
            input.value = eval(current_exp);
            current_exp = "";
        }

        else if (buttons[i].innerHTML == "C"){
            current_exp = "";
            input.value = current_exp;
        }

        else {
            current_exp += buttons[i].innerHTML;
            input.value = current_exp;
        }        
    }
}
