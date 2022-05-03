const formSubmit = document.querySelector('.login-form');

formSubmit.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Необходимо заполнить все поля!");
  }

  console.log(`email:${email.value}, password:${password.value}`);
  event.currentTarget.reset();
}
