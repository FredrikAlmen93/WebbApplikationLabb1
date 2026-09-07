const productList = document.getElementById("productList");
function renderProducts(products) {
  products.forEach(function (product) {
    const article = document.createElement("article");
    article.classList.add("product");

    const title = document.createElement("h2");
    title.textContent = product.name;

    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.image;
    image.alt = product.imageAlt;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = product.price + " kr";

    if (product.badge) {
      const badge = document.createElement("span");
      badge.classList.add("badge");
      badge.textContent = product.badge;
    }

    const button = document.createElement("button");
    button.classList.add("buy-button");
    button.textContent = "Add to cart";
    button.addEventListener("click", function () {
      alert("Product added to cart: " + product.name);
    });

    article.appendChild(title);
    article.appendChild(image);
    article.appendChild(description);
    article.appendChild(price);
    article.appendChild(button);

    productList.appendChild(article);
  });
}

async function loadProducts() {
  try {
    const response = await fetch("./products.json");
    if (!response.ok) {
      throw new Error("Could not get products");
    }
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error:", error);
  }
}
loadProducts();
