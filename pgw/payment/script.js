
const LocalStorageData = localStorage.getItem("cart");

const orderItemList = document.querySelector(".order-item-list");

let data = JSON.parse(LocalStorageData);

console.log("data", data);

if (data) {
    data.forEach(data => {
        orderItemList.innerHTML += `<div class="item-container">
            <div class = "item-info">
                    <img class="item-img" src="${data.thumbnail}" alt="">
                    <p class="item-name">${data.name}</p>
            </div>
            <p class="item-count info">${data.quantity}</p>
            <p class="item-delval info">3000</p>
            <p class="item-price info">${data.price}</p>
        </div>`
    });
}