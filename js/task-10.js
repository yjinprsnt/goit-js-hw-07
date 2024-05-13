function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const handleCreateButtonClick = () => {
  const inputNum = document.querySelector('#number');
  const amount = Number(inputNum.value);

  createBoxes(amount);
};

btnCreate.addEventListener('click', handleCreateButtonClick);

function createBoxes(amount) {
  const divBox = document.querySelector('.boxes');

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = '30px';
    boxEl.style.height = '30px';
    boxEl.style.backgroundColor = getRandomHexColor();

    divBox.append(boxEl);
  }
}
