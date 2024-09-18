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
const parentElement = document.querySelector('.parent');
const openButton = document.querySelector('.open-btn');
const icon = openButton.querySelector('.icon-lok');

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

const body = document.body;
const lightMode = document.getElementById('light-mode-toggle');
const iconDark = document.getElementById('iconDark');
const calculator = document.getElementById('calculator');
const logoDark = document.getElementById('logo-dark');
const input = document.getElementById('input')
const output = document.getElementById('output')
const labAlpha = document.querySelectorAll('.lab-alph')

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
