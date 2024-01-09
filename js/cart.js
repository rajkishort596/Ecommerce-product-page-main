//Increase and decrease order quantity

let count = 0;
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantity = document.querySelectorAll(".quantity");
//selecting span with id total
const totalAmount = document.getElementById("total");
plus.addEventListener("click", function () {
  count++;
  quantity[1].textContent = count;
});
minus.addEventListener("click", function () {
  if (count > 0) {
    count--;
    quantity[1].textContent = count;
  }
});
//cart information
let totalprice;
const addToCart = document.querySelector(".Add");
const orderQuantity = document.getElementById("orderQuantity");
const checkout = document.querySelector(".cart-info .checkout");
const cartInfo = document.querySelectorAll(".cart-info");
const showEmptyCart = function () {
  orderQuantity.style.display = "none";
  cartInfo[0].classList.remove("hide");
  cartInfo[1].classList.add("hide");
  checkout.style.display = "none";
};
const showCart = function () {
  orderQuantity.textContent = count;
  orderQuantity.style.display = "block";
  checkout.style.display = "block";
  cartInfo[0].classList.add("hide");
  cartInfo[1].classList.remove("hide");
};
addToCart.addEventListener("click", function () {
  quantity[0].textContent = count;
  totalprice = count * 125.0;
  totalAmount.style.fontWeight = 800;
  totalAmount.innerHTML = "$" + totalprice;
  if (count === 0) {
    showEmptyCart();
  } else {
    showCart();
  }
});
//selecting cart icon and cartProduct div
const cartIcon = document.querySelectorAll(".cart-icon");
const cartProduct = document.querySelector(".cart-info .product");
cartIcon.forEach((Icon) => {
  Icon.addEventListener("click", function () {
    if (count === 0) {
      showEmptyCart();
    } else {
    }
    cartInfo.forEach(function (item) {
      item.classList.toggle("active");
    });
  });
});

const deleteIcon = document.querySelector(".icon-delete");
deleteIcon.addEventListener("click", function () {
  orderQuantity.style.display = "none";
  cartInfo[0].classList.remove("hide");
  cartInfo[1].classList.add("hide");
  checkout.style.display = "none";
});
