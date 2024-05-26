import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);
instance.show(() => console.log('lightbox now visible'));

const galleryImg = document.querySelector('.gallery');

const itemsMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></li>`
  )
  .join('');

galleryImg.insertAdjacentHTML('beforeend', itemsMarkup);

galleryImg.addEventListener('click', onClickgallery);

function onClickgallery(evt) {
  console.log(evt);
}
