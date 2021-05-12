// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

const makeImgMarkup = ({ url, alt }) => {
  return `
    <li class = "item">
    <img class = "image" width = "400" height = "300" src="${url}" alt="${alt}" />
    </li>`;
};

const makeGalleryMarkup = images.map(makeImgMarkup).join("");

galleryRef.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

// const makeGalleryImage = ({ url, alt }) => {
//   const galleryItemRef = document.createElement("li");
//   galleryItemRef.classList.add("item");

//   const galleryImgRef = document.createElement("img");
//   galleryImgRef.setAttribute("src", url);
//   galleryImgRef.setAttribute("alt", alt);
//   galleryImgRef.setAttribute("width", "400");
//   galleryImgRef.setAttribute("height", "300");
//   galleryImgRef.classList.add("image");

//   galleryItemRef.append(galleryImgRef);

//   return galleryItemRef;
// };

// const makeGalleryImages = images.map(makeGalleryImage);

// galleryRef.append(...makeGalleryImages);
