const vibration = (target) => {
    target.classList.add("vibration");

    setTimeout(function () {
        target.classList.remove("vibration");
    }, 400);
}
function expandSticky() {
    
    if (stickyImg.classList.contains('stick-img-happy')) {
        stickyImg.classList.remove('stick-img-happy');
        console.log("in");
    } else {
        stickyImg.classList.add('stick-img-happy');
        console.log("no");
    }
}

const mainShoppingList = document.querySelector(".main-container");
const shoppingStartBtn = document.querySelector(".forSeelist");
const stickyImg = document.querySelector('.sticky-img');

shoppingStartBtn.addEventListener('click',() => {
    mainShoppingList.style.display = "block";
    setTimeout(() => {
        stickyImg.classList.add('stick-img-happy');
    }, 500);
})

