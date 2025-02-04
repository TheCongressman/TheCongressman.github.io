var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".artwork-thumbnail")).forEach(item => {
    item.addEventListener("click", event => {
      modalEle.style.display = "flex";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".close, .modal").addEventListener("click", () => {
   modalEle.style.display = "none";
   modalImage.src = '';
});
