// 프록시 설정 or 쿠키사용을 위한 옵션 추가

document.addEventListener("DOMContentLoaded", async () => {
  // const baseURL = "http://kdt-sw-7-team05.elicecoding.com";
  const baseURL = "http://localhost:3000";

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const categoryId = url.searchParams.get("id");
  // const categoryId = `figure`;

  const apiURL = `${baseURL}/api/categories/?id=${categoryId}`;

  // const response = await fetch(apiURL);
  const response = await fetch(apiURL, {
    credentials: "include",
  });

  const data = await response.json();
  console.log(data);
  const productUl = document.querySelector(".product-ul");

  if (!response.ok) {
    console.error("Error:", response.status);
    return;
  }

  data.products.forEach((product) => {
    product.image[0] = `${baseURL}${product.image[0]}`;
    // console.log(product.price);
    const productLi = createProductElement(product);
    productUl.appendChild(productLi);
  });
});

function createProductElement(product) {
  const productLi = document.createElement("li");
  productLi.className = "product-li";

  const img = document.createElement("img");
  img.className = "product-list-img";
  img.src = product.image[0];
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

// function extractCategoryId(path) {
//   const matches = path.match(/\/categories\/([^/]+)/);
//   return matches ? matches[1] : null;
//   // return path.searchParams.get("id");
// }
