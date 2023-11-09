
const LocalStorageData = localStorage.getItem("cart");

const orderItemList = document.querySelector(".order-item-list");

let data = JSON.parse(LocalStorageData);

console.log("data", data);

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let totalPrice = 0;

if (data) {
    data.forEach(data => {
        const itemPriceWithCommas = addCommas(data.price * data.quantity);
        totalPrice += data.price * data.quantity;
        orderItemList.innerHTML += `<div class="item-container">
            <div class = "item-info">
                    <img class="item-img" src="${data.thumbnail}" alt="">
                    <p class="item-name">${data.name}</p>
            </div>
            <p class="item-count info">${data.quantity}</p>
            <p class="item-delval info">3,000</p>
            <p class="item-price hide info">${data.price}</p>
            <p class="item-price info">${itemPriceWithCommas}</p>
        </div>`
    });
}

const paymentBtn = document.querySelector(".payment-btn");
let printTotalPrice = addCommas(totalPrice);
console.log(printTotalPrice);
paymentBtn.innerHTML += `${printTotalPrice}원 결제하기`;

const serverUrl = "";

paymentBtn.addEventListener('click',() => {
    const serverUrl = "";

    const requestOptions = {


        method: "POST",


        headers: {
            "Content-Type": "application/json", // Set the appropriate content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
    };

    fetch(serverUrl, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json(); // Parse the response as JSON if necessary
            } else {
                throw new Error("Request failed");
            }
        })
        .then((data) => {
            // Handle the server's response data (if needed)
            console.log("Server response:", data);
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error("Error:", error);
        });
})