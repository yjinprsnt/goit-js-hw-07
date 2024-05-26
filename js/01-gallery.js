import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const itemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}" 
                data-source="${original}" 
                alt="${description}"
                />
                </a>
        </li>`
  )
  .join('');

galleryImg.insertAdjacentHTML('beforeend', itemsMarkup);

galleryImg.addEventListener('click', onClickgallery);

function onClickgallery(evt) {
  evt.preventDefault();
  const img = evt.target;

  if (img.tagName === 'IMG') {
    const originalSrc = img.getAttribute('data-source');
    const altText = img.getAttribute('alt');

    const instance = basicLightbox.create(
      `<img src="${originalSrc}" alt="${altText}">`
    );
    instance.show();
  }
}
