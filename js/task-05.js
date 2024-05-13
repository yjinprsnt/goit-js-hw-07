const inputName = document.querySelector('#name-input');
// console.log(inputTxt);
const outputName = document.querySelector('#name-output');
// console.log(spanOut.textContent);

const inputValue = () => {
  if (!inputName.value) {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = inputName.value;
  }
};

inputName.addEventListener('input', inputValue);
