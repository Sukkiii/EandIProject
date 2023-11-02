const dummyFile = "./data/dummyData.json";

function fetchProductData() {
  return (
    fetch(dummyFile)
      // return fetch("/api/products")
      .then((response) => response.json())
      .catch((error) => {
        console.error("data error", error);
      })
  );
}

function displayProducts(products, containerClass, thumbnailClass) {
  const productUl = document.querySelector(`.${containerClass} .product-ul`);
  // productUl.innerHTML = "";

  products.forEach((product) => {
    const productLi = document.createElement("li");
    // const productUl = document.querySelector(".product-ul");
    productLi.classList.add("product-li");

    const thumbnailClassAdd = product.isBest
      ? "best-product-thumbnail"
      : "product-thumbnail";
    productLi.innerHTML = `
    <div class="${thumbnailClassAdd}">
      <img
        class="product-list-img"
        src="${product.Image}"
        alt="${product.Image}"
      />
    </div>
    <div class="description">
      <div class="product-name">${product.ProductName}</div>
      <div class="product-price">${product.Price}원</div>
      ${
        product.isBest
          ? ""
          : `<div class="product-explain">${product.Description}</div>`
      }
    </div>
  `;

    productUl.appendChild(productLi);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchProductData().then((data) => {
    displayProducts(
      data.bestProducts,
      "best-products",
      "best-products-thumbnail"
    );

    displayProducts(data.products, "products", "product-thumbnail");
  });
});
