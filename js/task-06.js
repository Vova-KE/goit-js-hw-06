const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
    validationInput.textContent = event.currentTarget.value;

    if (validationInput.textContent.length !== Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.replace('invalid','valid');
    }
});
