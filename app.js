var output = document.querySelector(".output-screen");
var equals = document.querySelector("#btn-equal");
var buttons = document.querySelectorAll(".btn-small");



function outputDisplay(input) {
    output.innerText+=input;
    if (input === "=") {
        output.innerText="Output";
    }
    else if(input === ""){}
}

buttons.forEach(item => {
    item.addEventListener('click', event => {
        outputDisplay(item.value);
    })
})