

const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classList.remove("vibration");
  }, 400);
};

function expandSticky() {
  console.log("expandSticky function called");

  const stickyImg = document.querySelector(".sticky-img");

  if (stickyImg.classList.contains("stick-img-happy")) {
    console.log("stick-img-happy class found, removing it");
    stickyImg.classList.remove("stick-img-happy");
  } else {
    console.log("stick-img-happy class not found, adding it");
    stickyImg.classList.add("stick-img-happy");
  }
}

const mainShoppingList = document.querySelector(".main-container");
const shoppingStartBtn = document.querySelector(".forSeelist");
const stickyImg = document.querySelector(".sticky-img");
const footer = document.querySelector(".footer-container");
const fakeFooter = document.querySelector(".fake-footer");

shoppingStartBtn.addEventListener("click", () => {
  mainShoppingList.style.display = "block";
  footer.style.visibility = "visible";
  fakeFooter.style.display = "none";

  setTimeout(() => {
    stickyImg.classList.add("stick-img-happy");
  }, 500);
});

document.addEventListener("DOMContentLoaded", async () => {
  const baseURL = "http://localhost:3000/api";
  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      const htmlData = await response.text();
      console.log(htmlData);
    } else {
      const mainData = await response.json();
      const totalData = mainData.products;
      console.log(mainData);

      const popItemList = totalData.slice(0,4);
      const newItemList = totalData.slice(4);

      const mainNewList = document.querySelector(".main-new-list");
      const mainHotList = document.querySelector(".main-hot-list");

      popItemList.forEach(item => {
        const itemBox = document.createElement("div");
        itemBox.className = "pop-list-box";
        const a = document.createElement("a");
        itemBox.appendChild(a);
        const itemImage = document.createElement("img");
        itemImage.className = "pop-box-img";
        itemImage.src = item.image[0];
        a.appendChild(itemImage);
        const hotItemContent = document.createElement("div");
        hotItemContent.className = "hot-item-content";
        hotItemContent.innerHTML = `
          <p class="hot-item-name">
            상품명 : ${item.productName}
          </p>
          <p class="hot-item-price">가격: ${item.price}</p>
        `;
        itemBox.appendChild(hotItemContent);
        mainHotList.appendChild(itemBox);
      });


      newItemList.forEach(item => {
        const itemBox = document.createElement("div");
        itemBox.className = "hot-list-box";
        const a = document.createElement("a");
        itemBox.appendChild(a);
        const itemImage = document.createElement("img");
        itemImage.className = "hot-box-img";
        itemImage.src = item.image[0];
        a.appendChild(itemImage);
        const hotItemContent = document.createElement("div");
        hotItemContent.className = "hot-item-content";
        hotItemContent.innerHTML = `
          <p class="hot-item-name">
            상품명 : ${item.productName}
          </p>
          <p class="hot-item-price">가격: ${item.price}</p>
        `;
        itemBox.appendChild(hotItemContent);
        mainNewList.appendChild(itemBox);
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
