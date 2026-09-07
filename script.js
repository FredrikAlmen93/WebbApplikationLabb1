const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.dataset.name;
    alert("Product added to cart: " + productName);
  });
});
