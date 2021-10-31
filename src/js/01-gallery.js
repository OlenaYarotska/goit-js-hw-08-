// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryListMarkup = document.querySelector('.gallery')

const galleryImages = createGallery(galleryItems);
galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function createGallery(items) {
    return items.map(
        ({ preview, original, description }) =>
            `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`,
    )
        .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
console.log(gallery);