import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');
const itemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
      alt="${description}" />
    </a>
  </li>`
  )
  .join('');

galleryImg.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
