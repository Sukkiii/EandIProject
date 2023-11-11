const selectedProduct = {
  productId: null,
  name: null,
  price: null,
  quantity: 1,
  thumbnail: null,
};

function fetchProductData() {
  const baseURL = "http://kdt-sw-7-team05.elicecoding.com";

  const currentURL = window.location.search;

  const params = new URLSearchParams(currentURL);
  const productId = params.get("id");

  const apiURL = `${baseURL}/api/products/${productId}`;

  return fetch(apiURL, {
    credentials: "include",
  })
    .then(async (response) => {
      const data = await response.json();
      selectedProduct.productId = productId;
      selectedProduct.name = data.productName;
      selectedProduct.price = data.price;
      selectedProduct.thumbnail = data.image[0];
      return data;
    })
    .catch((error) => {
      console.error("데이터 오류", error);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchProductData();
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
});

// 이 위에는 dummyData 불러오는 코드
// product.Image는 배열 형식으로 구성되어 있음.

function displayDetailProduct(product) {
  console.log(product);

  const detailThumbnail = document.querySelector(".detail-thumbnail-random");
  const detailArea = document.querySelector(".detail-area");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = product.image[0];
  // thumbnailImg.src = "/image/1.png"; // product.image[0];
  detailThumbnail.appendChild(thumbnailImg);

  for (let i = 1; i < product.image.length; i++) {
    const detailImg = document.createElement("img");
    detailImg.src = product.image[i];
    detailArea.appendChild(detailImg);
  }

  const detailMsg = document.querySelector(".product-detail-msg");
  const priceCalculate = document.querySelector(".price-calculate");

  detailMsg.innerHTML = `
  <div class="product-name">${product.productName}</div>
  <div class="product-price">${formatPriceWithCommas(product.price)}원</div>
  <div class="product-explain">${product.description}</div>
  `;

  priceCalculate.innerHTML = `${formatPriceWithCommas(product.price)}원`;
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
