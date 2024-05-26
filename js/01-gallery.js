import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const itemsMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" data-original="${item.original}" alt="${item.description}"></li>`
  )
  .join('');

galleryImg.insertAdjacentHTML('beforeend', itemsMarkup);

galleryImg.addEventListener('click', onClickgallery);

function onClickgallery(evt) {
  //   console.log(evt.target);
  const img = evt.target;
  if (img.tagName === 'IMG') {
    const originalSrc = img.getAttribute('data-original');
    const altText = img.getAttribute('alt');

    const instance = basicLightbox.create(
      `<img src="${originalSrc}" alt="${altText}">`
    );
    instance.show();
  }
}
