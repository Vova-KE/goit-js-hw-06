const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', (event) => {
    if (inputField.value !== '') {
        outputField.textContent = event.currentTarget.value;
    } else {
        outputField.textContent = "Anonymous";
    };
});