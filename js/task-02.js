const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul#ingredients');

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');

  listItem.textContent = ingredient;
  listItem.classList.add('item');

  return listItem;
});
listEl.append(...listItems);

console.log(listEl);
