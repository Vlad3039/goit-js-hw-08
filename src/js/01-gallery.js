// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
console.log(galleryItems);

const placeElementEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
         </a>
       </li>`
  )
  .join('');
placeElementEl.innerHTML = galleryMarkup;
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
