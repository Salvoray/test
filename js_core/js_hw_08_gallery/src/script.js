import images from './gallery-themes.js';

const galleryRef = document.querySelector('.js-gallery');
const modalContainerRef = document.querySelector('.lightbox');
const originalImgRef = document.querySelector('.lightbox__image');

console.log(originalImgRef.dataset.index);

const makeGalleryItemMarkup = images => {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class="gallery__image" src="${preview}" data-source = "${original}" alt="${description}"/>
    </a>
    </li>`;
    })
    .join('');
};

galleryRef.insertAdjacentHTML('afterbegin', makeGalleryItemMarkup(images));

const getLargeImgAttribute = e => {
  if (e.target.nodeName === 'IMG') {
    originalImgRef.src = e.target.dataset.source;
    originalImgRef.alt = e.target.alt;
  }
};

const onClickOpenModal = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  modalContainerRef.classList.add('is-open');
  getLargeImgAttribute(e);
};

const clearLargeImgAttribute = () => {
  originalImgRef.src = '';
  originalImgRef.alt = '';
};

const closeModal = () => {
  modalContainerRef.classList.remove('is-open');
  clearLargeImgAttribute();
};

const onClickCloseModal = e => {
  if (!e.target.dataset.action) {
    return;
  }
  closeModal();
};

const onEscapeCloseModal = e => {
  if (e.keyCode !== 27) {
    return;
  }
  closeModal();
};

const arrMap = images.map(image => image.original);

const turnImage = e => {
  if (e.keyCode !== 39 && e.keyCode !== 37) {
    return;
  }

  let imgIdx = arrMap.indexOf(originalImgRef.src);

  if (e.keyCode === 37) {
    imgIdx -= 1;
    while (imgIdx === -1) {
      imgIdx = arrMap.length - 1;
    }
  } else if (e.keyCode === 39) {
    imgIdx += 1;
    while (imgIdx === arrMap.length) {
      imgIdx = 0;
    }
  }
  originalImgRef.src = arrMap[imgIdx];
};

galleryRef.addEventListener('click', onClickOpenModal);
modalContainerRef.addEventListener('click', onClickCloseModal);
window.addEventListener('keydown', onEscapeCloseModal);
window.addEventListener('keydown', turnImage);
