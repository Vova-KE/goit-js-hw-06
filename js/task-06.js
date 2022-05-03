const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
    validationInput.textContent = event.currentTarget.value;

    if (validationInput.textContent.length === Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.add('valid');
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid');
        }
    } else if (validationInput.textContent.length === 0) {
        validationInput.classList.remove('valid','invalid');
    } else {
        validationInput.classList.add('invalid');
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid');
        }
    } 
});
