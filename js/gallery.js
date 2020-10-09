import galleryImages from "./gallety-item.js";

const refs = {
  renderingImagesCard: document.querySelector(".js-gallery"),
  galleryCardMarup: createImagesCard(galleryImages),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  lightboxClose: document.querySelector('[data-action="close-lightbox"]'),
};

// const renderingImagesCard = document.querySelector(".js-gallery");
// const galleryCardMarup = createImagesCard(galleryImages);

refs.renderingImagesCard.insertAdjacentHTML("beforeend", refs.galleryCardMarup);
refs.renderingImagesCard.addEventListener("click", onOpenImage);
refs.lightboxClose.addEventListener("click", onCloseImage);

function createImagesCard(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
   <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </li>
  `;
    })
    .join("");
}

function onOpenImage(event) {
  event.preventDefault();
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = event.target.dataset.source;
  //    ----- добавить альт
  // refs.lightboxImage.alt = event.target.dataset.source;

  // const isGalleryImage = event.target.classList.contains("gallery__image");
  // if (!isGalleryImage) {
  //   return;
  // }
  // refs.lightbox = event.target.dataset.source;
  // console.log(imageEl);
}

function onCloseImage() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
}
