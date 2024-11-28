first_operand = document.getElementById("first_operand");
second_operand = document.getElementById("second_operand");
sign = document.getElementById("sign");
result_button = document.getElementById("result_button");
result = document.getElementById("result");

result_button.onclick = function(e){
    let result_str = "";
    result_str += first_operand.value;
    result_str += sign.value;
    result_str += second_operand.value;
    
    result.innerHTML = `Ответ: ${eval(result_str)}`;
}