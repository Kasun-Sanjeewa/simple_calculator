function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function calculate(operation) {
    let display = document.getElementById("display");
    let value = display.value;

    switch (operation) {
        case 'sqrt':
            display.value = Math.sqrt(eval(value));
            break;
        case 'pi':
            display.value = Math.PI;
            break;
        case '=':
            try {
                display.value = eval(value);
            } catch {
                display.value = "Error";
            }
            break;
        default:
            display.value += operation;
            break;
    }
}
