const bestProductsFile = "../data/dummyData.json";
const productsFile = "../data/dummyData2.json";

function fetchProductData(url) {
  // return fetch("/api/products")
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("data error", error);
    });
}

function displayProducts(products, containerClass, thumbnailClass) {
  const productUl = document.querySelector(`.${containerClass} .product-ul`);

  products.forEach((product) => {
    const productLi = document.createElement("li");
    productLi.classList.add("product-li");

    const thumbnailClassAdd =
      containerClass === "best-products"
        ? "best-product-thumbnail"
        : "product-thumbnail";
    productLi.innerHTML = `
    <div class="${thumbnailClassAdd}">
      <img
        class="product-list-img"
        src="${product.Image[0]}"
        alt="${product.Image[0]}"
      />
    </div>
    <div class="description">
      <div class="product-name">${product.ProductName}</div>
      <div class="product-price">${product.Price}원</div>
      ${
        containerClass === "best-products"
          ? ""
          : `<div class="product-explain">${product.Description}</div>`
      }
    </div>
  `;

    productUl.appendChild(productLi);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchProductData(bestProductsFile)
    .then((data) => {
      displayProducts(
        data.bestProducts,
        "best-products",
        "best-products-thumbnail"
      );
    })
    .catch((error) => {
      console.error(error);
    });

  fetchProductData(productsFile)
    .then((data) => {
      displayProducts(data.products, "products", "product-thumbnail");
    })
    .catch((error) => {
      console.error(error);
    });
  const headerContent = document.querySelector("#header-content");
  fetch("../common/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContent.innerHTML = data;
    })
    .catch((error) => {
      console.error("헤더 로드 중 오류 발생:", error);
    });

  // footer를 가져와서 HTML 파일에 추가
  const footerContent = document.querySelector("#footer-content");
  fetch("../common/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerContent.innerHTML = data;
    })
    .catch((error) => {
      console.error("푸터 로드 중 오류 발생:", error);
    });
});
