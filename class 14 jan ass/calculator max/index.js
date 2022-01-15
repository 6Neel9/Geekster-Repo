var number1 = "";
var number2 = "";
var operator = "";

function setOperator(new_operator) {
    operator = new_operator;
}

function concatNumber(single_digit) {
    if(operator == "") {
        number1 = number1 + single_digit;
        display(number1);
    } else {
        number2 = number2 + single_digit;
        display(number2);
    }
   
}

function deleteLastDigit() {
    if(operator == "") {
        number1 = number1.slice(0, -1);
        display(number1);
    } else {
        number2 = number2.slice(0, -1);
        display(number2);
    }
    
}

function clearAll() {
    if(operator == "") {
        number1 = "";
        display(number1);
    } else {
        number2 = "";
        display(number2);
    }
    
}


function equals() {
    if(operator == "+") {
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    } else if(operator == "*") {
        number1 = mul(number1 , number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator == "-") {
        number1 = subTrac(number1 , number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator == "/") {
        number1 = div(number1 , number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator == "%") {
        number1 = percenTa(number1 , number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else{
        display();
    }
}

function add(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var sum = num1 + num2; 
    return sum;
}

function mul(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 * num2;
}

function subTrac(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    return num1 - num2;
}

function div(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 / num2;
}

function percenTa(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 % num2;
}

function display(num) {
    var para = document.getElementById('output');
    para.innerText = num;
}