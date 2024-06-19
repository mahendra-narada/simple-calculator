

let add = document.getElementById("addbtn");
let sub = document.getElementById("subbtn");
let div = document.getElementById("divbtn");
let mul = document.getElementById("mulbtn");
let eqaul = document.getElementById("equalbtn");
let clear = document.getElementById("clearbtn");

add.onclick = addMethod;
sub.onclick = subMethod;
div.onclick = divMethod;
mul.onclick = mulMethod;

function addMethod() {

    let input1 = document.getElementById("textfield1").value;
    let input2 = document.getElementById("textfield2").value;
    let result = document.getElementById("output");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    result.value = num1+num2;
}

function subMethod() {

    let input1 = document.getElementById("textfield1").value;
    let input2 = document.getElementById("textfield2").value;
    let result = document.getElementById("output");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    result.value = num1-num2;
}

function divMethod() {

    let input1 = document.getElementById("textfield1").value;
    let input2 = document.getElementById("textfield2").value;
    let result = document.getElementById("output");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    result.value = num1/num2;
}

function mulMethod() {

    let input1 = document.getElementById("textfield1").value;
    let input2 = document.getElementById("textfield2").value;
    let result = document.getElementById("output");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    result.value = num1*num2;
}


