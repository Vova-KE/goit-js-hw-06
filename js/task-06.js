const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
    validationInput.textContent = event.currentTarget.value;

    switch (validationInput.textContent.length) {
        case Number(validationInput.getAttribute('data-length')):
            validationInput.classList.remove('invalid');
            validationInput.classList.add('valid');
            break;
        case 0:
            validationInput.classList.remove('valid', 'invalid');
            break;
        default:
            validationInput.classList.add('invalid');
    }
});
