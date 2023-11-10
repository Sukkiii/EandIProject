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

document.addEventListener("DOMContentLoaded", async () => {
    const baseURL = "http://kdt-sw-7-team05.elicecoding.com/";
    try {
        const response = await fetch(baseURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }

        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
            const htmlData = await response.text();
            console.log(htmlData); // HTML 데이터를 콘솔에 출력하거나 다른 처리를 수행
        } else {
            const jsonData = await response.json();
            console.log(jsonData); // JSON 데이터를 콘솔에 출력하거나 다른 처리를 수행
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});