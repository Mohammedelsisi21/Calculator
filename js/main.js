const body = document.body;
const parentElement = document.querySelector('.parent');
const openButton = document.querySelector('.open-btn');
const icon = openButton.querySelector('.icon-lok');
const lightMode = document.getElementById('light-mode-toggle');
const iconDark = document.getElementById('iconDark');
const calculator = document.getElementById('calculator');
const logoDark = document.getElementById('logo-dark');
const input = document.getElementById('input')
const output = document.getElementById('output')
const labAlpha = document.querySelectorAll('.lab-alph')

console.log("ssss")
// Start load
window.addEventListener("load", function () {
    let preloader = document.querySelector("#preloader");
        preloader.classList.add("preloaded");
    setTimeout(function () {
            preloader.remove();
        }, 3000);
});
// End load

// start open
openButton.addEventListener('click', () => {
    if (parentElement.classList.contains('animate')) {
        parentElement.classList.remove('animate');
        parentElement.classList.add('close');
        icon.classList.remove('fa-lock-open');
        icon.classList.add('fa-unlock');
        openButton.textContent = 'Open';
        openButton.appendChild(icon);
    } else {
        parentElement.classList.remove('close');
        parentElement.classList.add('animate');
        icon.classList.remove('fa-unlock');
        icon.classList.add('fa-lock-open');
        openButton.textContent = 'Close';
        openButton.appendChild(icon);
    }
});
// End open
lightMode.addEventListener('click', () => {
    // Change a body mode
    body.classList.toggle('light');

    // Change a icon mode
    if (iconDark.classList.contains('fa-sun')) {
        iconDark.classList.remove('fa-sun');
        iconDark.classList.add('fa-moon');
        lightMode.appendChild(iconDark); 
        parentElement.classList.add('color-change');
        parentElement.classList.add('light');
        lightMode.classList.add('light')
        openButton.classList.add('light')
    } else {
        iconDark.classList.remove('fa-moon');
        iconDark.classList.add('fa-sun');
        lightMode.appendChild(iconDark);
        parentElement.classList.remove('color-change');
        parentElement.classList.remove('light');
        lightMode.classList.remove('light')
        openButton.classList.remove('light')
    }
    // light 
    calculator.classList.toggle('dark')
    logoDark.classList.toggle('logo-dark')
    input.classList.toggle('screen-dark')
    output.classList.toggle('screen-dark')
});



// script.js
document.addEventListener('DOMContentLoaded', () => {
    let lastValue = '';

    const handleInput = (value, isOperator = false) => {
        if (isOperator) {
            switch (value) {
                case 'clear':
                    input.value = '';
                    output.value = '';
                    lastValue = '';
                    break;
                case 'delete':
                    input.value = input.value.slice(0, -1);
                    break;
                case 'exp':
                    input.value += '**';
                    break;
                case 'ans':
                    input.value += lastValue;
                    break;
                case 'equals':
                    try {
                        const result = eval(input.value);
                        output.value = result;
                        lastValue = result;
                        input.value = '';
                    } catch (error) {
                        output.value = 'Error';
                    }
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    input.value += value;
                    break;
            }
        } else {
            input.value += value;
        }

        // تحديث الفورم بشكل فوري إذا لم يكن هناك طلب للنتيجة
        if (value !== 'equals') {
            try {
                const evalResult = eval(input.value);
                output.value = evalResult;
            } catch (error) {
                output.value = 'Error';
            }
        }
    };

    // التعامل مع الضغط على الأزرار
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value || e.target.innerText;
            const op = e.target.getAttribute('data-op');
            
            if (e.target.classList.contains('number')) {
                // Append number or decimal point to current input
                input.value += value;
            } else if (op) {
                switch (op) {
                    case 'clear':
                        input.value = '';
                        output.value = '';
                        currentOperation = '';
                        lastValue = '';
                        break;
                    case 'delete':
                        input.value = input.value.slice(0, -1);
                        break;
                    case 'exp':
                        input.value += '**'; 
                        break;
                    case 'ans':
                        input.value += lastValue;  // Use last result
                        break;
                    case 'equals':
                        try {
                            // Evaluate the expression
                            const result = eval(input.value);
                            output.value = result;
                            lastValue = result;
                            input.value = '';
                        } catch (error) {
                            output.value = 'Error';
                        }
                        break;
                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                        // Add the operator to the input string
                        input.value += (op === 'add' ? '+' : 
                                        op === 'subtract' ? '-' : 
                                        op === 'multiply' ? '*' : 
                                        '/');
                        break;
                }
            }
            // Update output immediately
            if (op !== 'equals') {
                try {
                    const evalResult = eval(input.value);
                    output.value = evalResult;
                } catch (error) {
                    output.value = 'Error';
                }
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if (!isNaN(key) || key === '.') {
            handleInput(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            handleInput(key, true);
        } else if (key === 'Enter') {
            handleInput('equals', true);
        } else if (key === 'Backspace') {
            handleInput('delete', true);
        } else if (key === 'Escape') {
            handleInput('clear', true);
        }
    });
});

