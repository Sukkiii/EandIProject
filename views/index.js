

const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout(function () {
    target.classListNaNpxove("vibration");
  }, 400);
};
function expandSticky() {
  console.log("expandSticky function called");

  if (stickyImg.classList.contains("stick-img-happy")) {
    console.log("stick-img-happy class found, removing it");
    stickyImg.classListNaNpxove("stick-img-happy");
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
  // const baseURL = "http://kdt-sw-7-team05.elicecoding.com/";
  const baseURL = "http://localhost:3000/api";
  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      const htmlData = await response.text();
      console.log(htmlData); // HTML 데이터를 콘솔에 출력하거나 다른 처리를 수행
    } else {
      const mainData = await response.json();
      const totalData = mainData.products;
      console.log(mainData); // JSON 데이터를 콘솔에 출력하거나 다른 처리를 수행

      const popItemList = totalData.slice(0,4);
      const newItemList = totalData.slice(4);
      console.log(popItemList,"popItemList");
      console.log(newItemList,"new");

      const mainNewList = document.querySelector(".main-new-list");
      newItemList.forEach(item => {
        console.log(item.image[0]);
        mainNewList.innerHTML += `<div class="new-list-box">
        <a class = "image-box">
          <img
            class="new-box-img"
            src="/image/1.png"
            alt=""
          />
        </a>
        <div class="new-item-content">
          <p class="new-item-name">
            상품명 : ${item.productName}
          </p>
          <p class="new-item-price">가격: ${item.price}</p>
        </div>
      </div>`
      });

      // const imageBox = document.querySelectorAll(".image-box");

      // imageBox.forEach((item, index) => {
      //   const plusImage = document.createElement("img");
      //   plusImage.className = "hot-box-img";
      //   plusImage.src = newItemList[index].image[0];
      //   console.log("newItemList[index].image[0]", newItemList[index].image[0])
      //   item.appendChild(plusImage);
      // });



      // <img
      //   class="hot-box-img"
      //   src="/views/image/1.png"
      //   alt=""
      // />
      

      const mainHotList = document.querySelector(".main-hot-list");
      popItemList.forEach(item => {
        mainHotList.innerHTML += `<div class="hot-list-box" >
        <a>
          <img
            class="hot-box-img"
            src="/image/1.png"
           alt=""
          />
        </a>
        <div class="hot-item-content">
          <p class="hot-item-name">
            상품명 : ${item.productName}
          </p>
          <p class="hot-item-price">가격: ${item.price}</p>
        </div>
      </div >`
      });


    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


// const mainHotList = document.querySelector(".main-hot-list");
// popItemList.forEach(item => {
//   mainHotList.innerHTML += `<div class="hot-list-box" >
//         <a>
//           <img
//             class="hot-box-img"
//             src="${item.image[0]}"
//             alt=""
//           />
//         </a>
//         <div class="hot-item-content">
//           <p class="hot-item-name">
//             상품명 : ${item.productName}
//           </p>
//           <p class="hot-item-price">가격: ${item.price}</p>
//         </div>
//       </div >`
// });

// const mainNewList = document.querySelector(".main-new-list");
// newItemList.forEach(item => {
//   console.log("img", item.image[0]);
//   console.log("img", item.image);
//   mainNewList.innerHTML += `<div class="hot-list-box" >
//         <a>
//       <img
//         class="hot-box-img"
//         src="/image/1.png"
//         alt=""
//       />
//         </a>
//         <div class="hot-item-content">
//           <p class="hot-item-name">
//             상품명 : ${item.productName}
//           </p>
//           <p class="hot-item-price">가격: ${item.price}</p>
//         </div>
//       </div >`
// });