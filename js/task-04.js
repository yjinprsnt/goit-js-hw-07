const counterVal = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action = "decrement"]');
const incrBtn = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

const decrCount = () => {
  counterValue -= 1;
  counterVal.textContent = counterValue;
};

const incrCount = () => {
  counterValue += 1;
  counterVal.textContent = counterValue;
};

decrBtn.addEventListener('click', decrCount);
incrBtn.addEventListener('click', incrCount);
