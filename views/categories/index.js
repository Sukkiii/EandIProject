// 프록시 설정 or 쿠키사용을 위한 옵션 추가
let selectedCategoryId = "";
let products = {};

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: const baseURL = "http://kdt-sw-7-team05.elicecoding.com";
  const baseURL = "http://localhost:3000";

  const currentURL = window.location.search;

  const params = new URLSearchParams(currentURL);
  const categoryId = params.get("id");

  const apiURL = `${baseURL}/api/categories/${categoryId}`;
  const response = await fetch(apiURL, {
    credentials: "include",
  });

  const testUrl = `${baseURL}/api`;
  const testRes = await fetch(testUrl, {
    credentials: "include",
  });
  const testData = await testRes.json();
  const criteria = testData.categories.filter(
    (_) => _.categoryId === categoryId
  )[0];
  const categories = testData.categories.filter(
    (_) => _.categoryParent === criteria._id
  );
  const mainCategoryName = document.querySelector(".main-category-name");
  mainCategoryName.innerHTML = criteria.categoryName;

  categories.forEach((_) => {
    const categoriesUl = document.querySelector(".categories-ul");
    const categoriesLi = document.createElement("li");
    categoriesLi.className = "figure-categories-name";
    categoriesLi.id = _._id;
    categoriesLi.innerHTML = _.categoryName;
    categoriesUl.appendChild(categoriesLi);
  });

  const data = await response.json();
  products = data.products;
  const productUl = document.querySelector(".product-ul");
  const bestProductUl = document.querySelector(".best-product-ul");
  const categoryMini = document.querySelectorAll(".figure-categories-name");
  categoryMini.forEach((_) => {
    _.addEventListener("click", () => {
      selectedCategoryId = _.id;
      productUl.innerHTML = "";
      products
        .filter((_) => _.category === selectedCategoryId)
        .forEach((product) => {
          product.image[0] = `${baseURL}${product.image[0]}`;
          const productLi = createProductElement(product);
          productUl.appendChild(productLi);
        });
    });
  });
  if (!response.ok) {
    console.error("Error:", response.status);
    return;
  }

  products.forEach((product) => {
    product.image[0] = `${baseURL}${product.image[0]}`;
    const productLi = createProductElement(product);
    productLi.id = product.category;
    productUl.appendChild(productLi);
  });

  const productStockSort = products.sort((a, b) => {
    if (a.stock > b.stock) return 1;
    else return -1;
  });
  productStockSort.slice(0, 4).forEach((product) => {
    product.image[0] = `${baseURL}${product.image[0]}`;
    const productLi = createProductElement(product);
    bestProductUl.appendChild(productLi);
  });
});

function createProductElement(product) {
  const productLi = document.createElement("li");
  productLi.className = "product-li";
  productLi.addEventListener("click", () => {
    const detailUrl = `${window.location.origin}/products/?id=${product._id}`;
    window.location.href = detailUrl;
  });

  const img = document.createElement("img");
  img.className = "product-list-img";
  // img.src = product.image[0];
  img.src = "/image/1.png";
  img.alt = product.productName;

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
