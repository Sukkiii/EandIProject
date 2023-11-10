document.addEventListener("DOMContentLoaded", async () => {
  const baseURL = "http://kdt-sw-7-team05.elicecoding.com";
  const currentPath = window.location.pathname;
  const categoryId = extractCategoryId(currentPath);

  const apiURL = `${baseURL}/categories/${categoryId}`;

  const response = await fetch(apiURL);

  const data = await response.json();

  const productUl = document.querySelector(".product-ul");
  data.products.forEach((product) => {
    const productLi = createProductElement(product);
    productUl.appendChild(productLi);
  });
});

function createProductElement(product) {
  const productLi = document.createElement("li");
  productLi.className = "product-li";

  const img = document.createElement("img");
  img.className = "product-list-img";
  img.src = product.image[0]; // 이미지 배열 중 첫 번째 이미지 사용
  img.alt = product.image[0];

  const description = document.createElement("div");
  description.className = "description";
  description.innerHTML = `
    <div class="product-name">${product.productName}</div>
    <div class="product-price">${product.price}원</div>
    <div class="product-explain">${product.description}</div>
  `;

  productLi.appendChild(img);
  productLi.appendChild(description);

  return productLi;
}

function extractCategoryId(path) {
  const matches = path.match(/\/categories\/([^/]+)/);
  return matches ? matches[1] : null;
}
