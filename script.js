var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
var body = document.querySelector("body");
Array.from(document.querySelectorAll(".artwork-thumbnail")).forEach(item => {
    item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
      body.style.overflow = "hidden";
   });
});
document.querySelector(".ui-close").addEventListener("click", () => {
  modalImage.classList.remove("img-full");
  modalImage.src = ""
  modalEle.style.display = "none";
  body.style.overflow = "unset";
});
document.querySelector(".modal").addEventListener("click", () => {
  modalImage.classList.remove("img-full");
  modalImage.src = ""
  modalEle.style.display = "none";
  body.style.overflow = "unset";
});
document.querySelector(".ui-zoom").addEventListener("click", () => {
  event.stopPropagation();
  modalImage.classList.toggle("img-full");
});



//
// var modalEle = document.querySelector(".modal");
// var modalImage = document.querySelector(".modalImage");
// var galleryItems = document.getElementsByClassName(".artwork-thumbnail");
// Array.from(elements).forEach(function(galleryItem) {
//   galleryItem.addEventListener("click", () => {
//       modalEle.style.display = "flex";
//       modalImage.src = event.target.src;
//   });
// });
//
// document.querySelector(".close, .modal").addEventListener("click", () => {
//     modalEle.style.display = "none";
//     modalImage.src = '';
// });
