var output = document.querySelector(".output-screen");
var equals = document.querySelector("#btn-equal");
var buttons = document.querySelectorAll(".btn-small");
var num1, num2, operator, result;

function outputDisplay(input) {
    if (operator === "=") {
        output.innerText = result;
    } else {
        output.innerText += input;
    }

    if (input === "=") {
        num2 = parseFloat(output.innerText);
        console.log(num2);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        operator = "=";
        output.innerText = result.toFixed(4);

    } else if (input === "+") {
        num1 = parseFloat(output.innerText);
        console.log(num1);
        output.innerText = "";
        operator = "+";
    } else if (input === "-") {
        num1 = parseFloat(output.innerText);
        console.log(num1);
        output.innerText = "";
        operator = "-";
    } else if (input === "*") {
        num1 = parseFloat(output.innerText);
        console.log(num1);
        output.innerText = "";
        operator = "*";
    } else if (input === "/") {
        num1 = parseFloat(output.innerText);
        console.log(num1);
        output.innerText = "";
        operator = "/";
    }
}

buttons.forEach(item => {
    item.addEventListener('click', event => {
        outputDisplay(item.value);
    })
})