const inputText = document.querySelector('#validation-input');
console.log(inputText);

const checkInputTextLength = () => {
  const validLenght = Number(inputText.getAttribute('data-length'));
  const inputLength = inputText.value.length;

  if (validLenght === inputLength) {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  } else {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  }
};

inputText.addEventListener('blur', checkInputTextLength);
