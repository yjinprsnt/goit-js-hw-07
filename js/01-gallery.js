import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const createListItemsMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></li>`
  )
  .join('');

galleryImg.insertAdjacentHTML('beforeend', createListItemsMarkup);
