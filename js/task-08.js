const formSubmit = document.querySelector('.login-form');
const userDetails = {};

formSubmit.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;


  if (email.value === "" || password.value === "") {
    alert("Необходимо заполнить все поля!");
  } else {
    userDetails.email = `${email.value}`;
    userDetails.password = `${password.value}`;
    console.log(userDetails);
  }

  event.currentTarget.reset();
}
