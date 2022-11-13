let result = 0;
let log = [];

function addNumbers(num1, num2) {
    result = result + parseInt(userInput.value);
    const newlog = {
        type: 'Add',
        num: parseInt(userInput.value)
    };
    log.push(newlog);
    outputResult(result);
    console.log('current logs:', log);
}

function clear() {
    result = 0;
    log.splice(0);
    outputResult(result);
}

addButton.addEventListener('click', addNumbers);
clearButton.addEventListener('click', clear);
