// const bestProductsFile = "../data/dummyData.json";
const productsFile = "../data/dummyData2.json";

const selectedProduct = {
  productId: null,
  name: null,
  price: null,
  quantity: 1,
  thumbnail: null,
};
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
          selectedProduct.productId = productId;
          selectedProduct.name = product.ProductName;
          selectedProduct.price = product.Price;
          selectedProduct.thumbnail = product.Image[0];
          // selectedProduct.quantity = 1;
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

      const addToCartButton = document.querySelector(".into-basket");
      addToCartButton.addEventListener("click", () => {
        addToCart();
      });

      const directBuyButton = document.querySelector(".direct-buy");
      directBuyButton.addEventListener("click", () => {
        directBuy();
      });
      const quantityDownButton = document.querySelector(".quantity-down");
      quantityDownButton.addEventListener("click", () => {
        decreaseQuantity();
      });

      const quantityUpButton = document.querySelector(".quantity-up");
      quantityUpButton.addEventListener("click", () => {
        increaseQuantity();
      });
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
  const priceCalculate = document.querySelector(".price-calculate");

  detailMsg.innerHTML = `
  <div class="product-name">${product.ProductName}</div>
  <div class="product-price">${formatPriceWithCommas(product.Price)}원</div>
  <div class="product-explain">${product.Description}</div>
  `;

  priceCalculate.innerHTML = `${formatPriceWithCommas(product.Price)}원`;
}

function addToCart(data) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let found = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId === selectedProduct.productId) {
      cartItems[i].quantity += parseInt(selectedProduct.quantity, 10);
      found = true;
      break;
    }
  }

  if (!found) {
    cartItems.push(selectedProduct);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function directBuy(data) {
  let buyItems = JSON.parse(localStorage.getItem("buyItems")) || [];
  buyItems.push(selectedProduct);
  localStorage.setItem("buyItems", JSON.stringify(buyItems));
}

function decreaseQuantity() {
  const quantityInput = document.querySelector(".option-box-quantity");
  let currentQuantity = parseInt(quantityInput.value, 10);
  if (currentQuantity > 1) {
    currentQuantity--;
  }
  quantityInput.value = currentQuantity;

  selectedProduct.quantity = currentQuantity;
  updatePrice(currentQuantity);
}

function increaseQuantity() {
  const quantityInput = document.querySelector(".option-box-quantity");
  let currentQuantity = parseInt(quantityInput.value, 10);
  currentQuantity++;
  quantityInput.value = currentQuantity;

  selectedProduct.quantity = currentQuantity;
  updatePrice(currentQuantity);
}

function formatPriceWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updatePrice(quantity) {
  const productPrice = document.querySelector(".product-price");
  const priceCalculate = document.querySelector(".price-calculate");

  const priceValue = parseInt(
    productPrice.innerText.replace("원", "").replace(/,/g, "")
  );
  priceCalculate.innerHTML = `${formatPriceWithCommas(
    priceValue * quantity
  )}원`;
}

// 1. 장바구니를 거치지 않고 구매하기 버튼을 눌렀을 때, 장바구니에 추가는 하지 않을건지
// 2. 구매하기 버튼을 눌렀을때, 상세페이지에서 구매하기 페이지로 바로 데이터를 보내야할 지?
// 3.
