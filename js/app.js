//mobile menu
const hambergur = document.querySelector(".hambergur");
const primaryNavigation = document.querySelector(".primary-navigation");
const overlay = document.querySelector(".overlay");
hambergur.addEventListener("click", function () {
  hambergur.classList.toggle("active");
  primaryNavigation.classList.toggle("active");
  overlay.classList.toggle("active");
});
// Selecting sub images
const subImages = document.querySelectorAll(".img-box .sub-img .img-wrap img");
console.log(subImages);
// Selecting hero images
const heroImgs = document.querySelectorAll(".img-box .desktop img");
subImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    // Get the source of the clicked image
    const newImageSrc = image.src;
    const heroImageSrc = newImageSrc.replace("-thumbnail", "");

    // Update all hero images with the new source
    heroImgs.forEach((item) => {
      item.src = heroImageSrc;
    });

    // Toggle a class on the clicked sub-image
    subImages.forEach((item) => {
      item.parentElement.classList.remove("active");
    });
    image.parentElement.classList.add("active");
  });
});
//accordian logic
//selecting accordian div
const accordian = document.querySelector(".accordian");
//selecting close accordian button
const closeAccordian = document.querySelector(".accordian .close-btn");
heroImgs[0].addEventListener("click", () => {
  accordian.style.display = "flex";
});
closeAccordian.addEventListener("click", () => {
  accordian.style.display = "none";
});
