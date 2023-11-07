// // // JSON 데이터
// const productData = {
//     "bestProducts" : [
//         {
//             "name": "짱구 피규어",
//             "price": 25000,
//             "productId": 1,
//             "quantity": 1,
//             "thumbnail": "./image/jjangu-chochobi-figure.png"
//         },
//         {
//             "name": "유리 피규어",
//             "price": 25000,
//             "productId": 2,
//             "quantity": 1,
//             "thumbnail": "./image/yuri-figure.png"
//         },
//         {
//             "name": "철수 피규어",
//             "price": 25000,
//             "productId": 3,
//             "quantity": 1,
//             "thumbnail": "./image/chulsu-figure.png"
//         },
//         {
//             "productId": 4,
//             "name": "맹구 피규어",
//             "price": 25000,
//             "quantity": 2,
//             "thumbnail": "./image/mangu-figure.png"
//         }
//     ]
// }

// // JSON 데이터를 문자열로 변환하여 로컬 스토리지에 저장
// localStorage.setItem("cart", JSON.stringify(productData.bestProducts));

// function getData(URL) {
//     return fetch(URL)
//         .then((res) => res.json())
// }

// function makeItem(data) {
//     data.forEach(data => {
//         shoppingCart.innerHTML += `<div class="item-container">
//                             <input type="checkbox" class="item-ck-btn">
//                             <img class= "item-img" src="${data.Image}" alt="">
//                             <p class="item-name item">${data.ProductName}</p>
//                             <p class="item-price item">${data.Price}</p>
//                             <p class="item-count item">1개</p>
//                             <p class="item-del item">기본 배송</p>
//                             <p class="item-delval item">3000</p>
//                         </div>`
//     });
//     console.log(data);
// }

// getData("./data/dummyData2.json")
//     .then((data) => {
//         const dataList = data.products;
//         makeItem(data.products);
//     })

// document.addEventListener("DOMContentLoaded", () => {
//     getData("./data/dummyData2.json")
//         .then((data) => {
//             const dataList = data.products;
//             makeItem(data.products);
//         })
// })


const shoppingCart = document.querySelector(".cart-container");

const LocalStorageData = localStorage.getItem("cart");

let data = JSON.parse(LocalStorageData);

console.log("data", data);

if (data) {
    data.forEach(data => {
        shoppingCart.innerHTML += `<div class="item-container">
        <input type="checkbox" class="item-ck-btn" autocomplete='off'>
        <img class="item-img" src="${data.thumbnail}" alt="">
            <p class="item-name item">${data.name}</p>
            <p class="item-price item">${data.price}</p>
            <div class="handle-quantity-box">
                <button class="minus-quantity">-</button>
                <p class="item-count item1">${data.quantity}</p>
                <button class="add-quantity">+</button>
            </div>
            <p class="item-del item">기본 배송</p>
            <p class="item-delval item">3000</p>
        </div>`
    });
}

const printItemPrice = document.querySelector(".sum-item-price");
const printTotalPrice = document.querySelector(".total-price");

// 모든 체크박스 요소 선택
const checkboxes = document.querySelectorAll(".item-ck-btn");

// 모든 아이템 이름 요소 선택
const itemNames = document.querySelectorAll(".item-name");
const itemQuantityElements = document.querySelectorAll(".item-count");

const selectList = [];

let printPrice = 0;

// 각 체크박스에 클릭 이벤트 핸들러 추가
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", function () {
        const itemName = itemNames[index].textContent;
        const itemPrice = Number(itemNames[index].nextElementSibling.textContent);
        const itemCount = Number(itemQuantityElements[index].textContent);

        if (this.checked) {
            // 선택한 상품 이름 추출해서 배열에 저장
            selectList.push(itemName);

            // 선택한 상품들 합 가격 출력
            printPrice += itemPrice * itemCount;
        } else {
            printPrice -= itemPrice * itemCount;
            for (let i = 0; i < selectList.length; i++) {
                if (selectList[i] === itemName) {
                    selectList.splice(i, 1);
                }
            }
        }
        // 가격 업데이트
        printItemPrice.innerHTML = printPrice;
        printTotalPrice.innerHTML = `= ${printPrice + 3000}`;
    });
});


// 모든 상품을 선택하는 체크박스 기능
const totalSelectBtn = document.querySelector(".total-ck-btn");

totalSelectBtn.addEventListener('click', (e) => {
    checkboxes.forEach((checkbox, index) => {
        const itemName = itemNames[index].textContent;
        const itemPrice = Number(itemNames[index].nextElementSibling.textContent);
        const itemCount = Number(itemQuantityElements[index].textContent);
        if (checkbox.checked == false) {
            checkbox.checked = true;
            printPrice += itemPrice * itemCount;
            selectList.push(itemName);
        } else {
            checkbox.checked = false;
            printPrice -= itemPrice * itemCount;
            for (let i = 0; i < selectList.length; i++) {
                if (selectList[i] === itemName) {
                    selectList.splice(i, 1);
                }
            }
        }
    });
    printItemPrice.innerHTML = printPrice;
    printTotalPrice.innerHTML = `=    ${printPrice + 3000}`;
})

// 선택 삭제 버튼 이벤트 리스너
const deletePartialBtn = document.querySelector(".delete-partial-item-btn");
deletePartialBtn.addEventListener('click', (e) => {
    // 모든 체크박스 요소 선택
    const checkboxes = document.querySelectorAll(".item-ck-btn");

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const itemName = itemNames[index].textContent;
            // 선택된 아이템의 이름을 가져와서 해당 아이템을 삭제
            data = data.filter(item => item.ProductName !== itemName);
        }
    });

    // 수정된 데이터를 로컬 스토리지에 저장
    localStorage.setItem("cart", JSON.stringify(data));

    // 화면 새로고침
    location.reload();
});

// 전체 삭제 버튼 기능 구현
const deleteAllBtn = document.querySelector('.delete-total-item-btn');
deleteAllBtn.addEventListener('click', (e) => {
    localStorage.removeItem("cart");
    console.log("localStorage값 확인", localStorage.getItem("cart"));
    location.reload();
}
)


const orderPartialBtn = document.querySelector(".order-partial");
orderPartialBtn.addEventListener('click', (e) => {

    console.log("selectList", selectList);
    console.log("data", data);
    const userByList = data.filter((item) => selectList.includes(item.name));
    console.log("filter", userByList);
    localStorage.setItem("userBy", JSON.stringify(userByList));
})

const orederTotalBtn = document.querySelector(".oreder-total");

orederTotalBtn.addEventListener('click', () => {
    localStorage.setItem("userBy", JSON.stringify(data));
})

// 상품 개별 아이템 추가
const addQuantityButtons = document.querySelectorAll(".add-quantity");
const minusQuantityButtons = document.querySelectorAll(".minus-quantity");
const itemCountElements = document.querySelectorAll(".item-count");

addQuantityButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // 현재 수량 가져오기
        let currentQuantity = parseInt(itemCountElements[index].textContent);

        // 수량 증가
        currentQuantity++;

        // 화면에 수량 업데이트
        itemQuantityElements[index].textContent = currentQuantity;

        // 가격 업데이트 (가격 * 수량)
        printPrice += Number(itemNames[index].nextElementSibling.textContent);
        // 가격 업데이트
        printItemPrice.innerHTML = printPrice;
        printTotalPrice.innerHTML = `= ${printPrice + 3000}`;

        // 해당 상품의 수량을 데이터에도 업데이트
        data[index].quantity = currentQuantity;

        // 장바구니 데이터를 로컬 스토리지에 다시 저장
        localStorage.setItem("cart", JSON.stringify(data));
    });
});

minusQuantityButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // 현재 수량 가져오기
        let currentQuantity = parseInt(itemCountElements[index].textContent);

        // 수량 감소
        if (currentQuantity > 1) {
            currentQuantity--;
        }

        // 화면에 수량 업데이트
        itemQuantityElements[index].textContent = currentQuantity;

        // 가격 업데이트 (가격 * 수량)
        printPrice -= Number(itemNames[index].nextElementSibling.textContent);
        // 가격 업데이트
        printItemPrice.innerHTML = printPrice;
        printTotalPrice.innerHTML = `= ${printPrice + 3000}`;

        // 해당 상품의 수량을 데이터에도 업데이트
        data[index].quantity = currentQuantity;

        // 장바구니 데이터를 로컬 스토리지에 다시 저장
        localStorage.setItem("cart", JSON.stringify(data));
    });
});
