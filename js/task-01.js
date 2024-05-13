const categorieslist = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categorieslist.length);

// let sumCategories = 0;
categorieslist.forEach(category => {
  // sumCategories += 1;

  const categoryName = category.querySelector('h2').textContent;
  console.log('Category:', categoryName);

  const elementsList = category.querySelectorAll('ul > li');
  console.log('Elements:', elementsList.length);
});

// console.log('Number of categories:', sumCategories);
