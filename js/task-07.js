const input = document.querySelector('#font-size-control');
console.log(input);
const span = document.querySelector('#text');
console.log(span);

const onChangeSizeSpan = event => {
  span.style.fontSize = event.currentTarget.value + 'px';
};

input.addEventListener('input', onChangeSizeSpan);
