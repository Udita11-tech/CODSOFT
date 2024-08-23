  

let displayValue = '';

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue) || '';
        document.getElementById('display').innerText = displayValue;
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}
