const registerForm = document.querySelector('.login-form');
// console.log(registerForm);

const processFormSubmit = event => {
  event.preventDefault();

  const emailInput = registerForm.elements.email;
  const passwordInput = registerForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Все поля должны быть заполнены.');
    return;
  }

  const userForm = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(userForm);

  registerForm.reset();
};

registerForm.addEventListener('submit', processFormSubmit);
