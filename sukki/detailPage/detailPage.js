// const bestProductsFile = "../data/dummyData.json";
const productsFile = "../data/dummyData2.json";

// 페이지 상세 제품 url이 https://쇼핑몰/product-detail.html?id=123
// 위와같은 형태로 제공된다고 가정했을 때, 아래와 같은 코드를 사용해야할 것 같다.

function fetchProductData(url) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const productId = urlParams.get("id");
  const productId = 5;

  return (
    fetch(url)
      // return fetch("/api/products")

      .then((response) => response.json())
      .then((data) => {
        const product = data.products.find((p) => p.ProductId === productId);
        if (product) {
          return product;
        } else {
          throw new Error("상품을 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("데이터 오류", error);
      })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  fetchProductData(productsFile)
    .then((data) => {
      displayDetailProduct(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// 이 위에는 dummyData 불러오는 코드
// product.Image는 배열 형식으로 구성되어 있음.

function displayDetailProduct(product) {
  const detailThumbnail = document.querySelector(".detail-thumbnail-random");
  const detailArea = document.querySelector(".detail-area");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = product.Image[0];
  detailThumbnail.appendChild(thumbnailImg);

  for (let i = 1; i < product.Image.length; i++) {
    const detailImg = document.createElement("img");
    detailImg.src = product.Image[i];
    detailArea.appendChild(detailImg);
  }

  const detailMsg = document.querySelector(".product-detail-msg");
  detailMsg.innerHTML = `
  <div class="product-name">${product.ProductName}</div>
  <div class="product-price">${product.Price}원</div>
  <div class="product-explain">${product.Description}</div>
  `;
  const priceCalculate = document.querySelector(".price-calculate");
  priceCalculate.innerHTML = `${product.Price}원`;
}
