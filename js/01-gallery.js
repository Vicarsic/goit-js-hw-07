import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
galleryEl = document.querySelector(".gallery");
galleryItems.forEach((item) =>
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
        <a class="gallery__link" href='${item.original}'>
            <img class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
        
    </div>`
  )
);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
