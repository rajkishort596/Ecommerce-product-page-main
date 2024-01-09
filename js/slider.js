const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlideIndex = 0;
function slideImages(direction) {
  console.log(currentSlideIndex);
  currentSlideIndex =
    (currentSlideIndex + direction + slides.length) % slides.length;
  sliderContainer.style.transform = `translateX(-${currentSlideIndex * 25}%)`;
  //   sliderContainer.style.transform = "translateX(-25%)";
}
prevBtn.addEventListener("click", () => {
  slideImages(-1);
});
nextBtn.addEventListener("click", () => {
  slideImages(1);
});
