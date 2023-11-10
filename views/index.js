const vibration = (target) => {
    target.classList.add("vibration");

    setTimeout(function () {
        target.classList.remove("vibration");
    }, 400);
}
function expandSticky() {
    console.log("expandSticky function called");

    if (stickyImg.classList.contains('stick-img-happy')) {
        console.log("stick-img-happy class found, removing it");
        stickyImg.classList.remove('stick-img-happy');
    } else {
        console.log("stick-img-happy class not found, adding it");
        stickyImg.classList.add('stick-img-happy');
    }
}

const mainShoppingList = document.querySelector(".main-container");
const shoppingStartBtn = document.querySelector(".forSeelist");
const stickyImg = document.querySelector('.sticky-img');
const footer = document.querySelector(".footer-container");
const fakeFooter = document.querySelector(".fake-footer");

shoppingStartBtn.addEventListener('click',() => {
    mainShoppingList.style.display = "block";
    footer.style.visibility = "visible";
    fakeFooter.style.display = "none";

    setTimeout(() => {
        stickyImg.classList.add('stick-img-happy');
    }, 500);
})

const baseURL = "http://kdt-sw-7-team05.elicecoding.com";


const fetch = require(baseURL);

fetch(fetch)
    .then(response => response.json())
    .then(data => {
        console.log(data); // 서버에서 받아온 JSON 데이터
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });