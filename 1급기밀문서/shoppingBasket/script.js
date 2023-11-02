// Example order data objects
const orderData1 = {
    productId: "product_1",
    productName: "Product Name1",
    price: 20.99,
    imageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwjajY6r4KSCAxW3YA8CHR1qDX0YABAJGgJ0Yg&ase=2&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5UBFYz_-Ztd6a07NCQgjuPprrVrAH30IyqvNbXgF6ZpElA5UqpOXKhoCCekQAvD_BwE&sig=AOD64_35Hgp23X_oBIe5OFkhcPvEI4Z-hA&ctype=5&nis=6&adurl&ved=2ahUKEwj6j_6q4KSCAxXkRvUHHfJwBG8Qvhd6BAgBEGw",
    quantity: 2
};

const orderData2 = {
    productId: "product_2",
    productName: "Product Name2",
    price: 15.99,
    imageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwjajY6r4KSCAxW3YA8CHR1qDX0YABAHGgJ0Yg&ase=2&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5YRRS3KUziHvYFKN5Lwx6xgqzySF_WUhijsaeIE7oH_ZcGQTi0XTIRoCtAEQAvD_BwE&sig=AOD64_3t6_M8Waeib067eNecYNVwxo3F2A&ctype=5&nis=6&adurl&ved=2ahUKEwj6j_6q4KSCAxXkRvUHHfJwBG8Qvhd6BAgBEGc",
    quantity: 1
};

const orderData3 = {
    productId: "product_3",
    productName: "Product Name3",
    price: 30.49,
    imageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwjajY6r4KSCAxW3YA8CHR1qDX0YABAFGgJ0Yg&ase=2&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5TowHNSJhaPA2EyzyjCiCnjXXBsRgTblC4SGEDwg-QMvHaflpzz2RBoCIfcQAvD_BwE&sig=AOD64_064H6oKm24r7AYmeuW8voOW1Sz_A&ctype=5&nis=6&adurl&ved=2ahUKEwj6j_6q4KSCAxXkRvUHHfJwBG8Qvhd6BAgBEGI",
    quantity: 4
};

const orderData4 = {
    productId: "product_4",
    productName: "Product Name4",
    price: 25.99,
    imageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwjajY6r4KSCAxW3YA8CHR1qDX0YABADGgJ0Yg&ase=2&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5SsqNP37k66hmL1dvGZFYXzO6GNp_pYVPSgR02UgfFFKW_lsfF_ErxoCJLsQAvD_BwE&sig=AOD64_1-wp5OJy9PdSAtBUBS_8xjERQKhw&ctype=5&nis=6&adurl&ved=2ahUKEwj6j_6q4KSCAxXkRvUHHfJwBG8Qvhd6BAgBEF0",
    quantity: 3
};

const orderData5 = {
    productId: "product_5",
    productName: "Product Name5",
    price: 18.99,
    imageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwjajY6r4KSCAxW3YA8CHR1qDX0YABABGgJ0Yg&ase=2&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5YXrXHCbJmWf_CeeRnPSoIPYAYDeZ2OvG063wyU99T91i7X60qoMcBoCqfEQAvD_BwE&sig=AOD64_2YKY6AiY0zpICQHFYArVfaZaCh9g&ctype=5&nis=6&adurl&ved=2ahUKEwj6j_6q4KSCAxXkRvUHHfJwBG8Qwg96BAgBEFU",
    quantity: 5
};

// Create an array to hold the order data
const orderArray = [orderData1, orderData2, orderData3, orderData4, orderData5];

// Serialize the array to a JSON string and store in local storage
localStorage.setItem("orders", JSON.stringify(orderArray));


const shoppingCart = document.querySelector(".cart-container");


const data = localStorage.getItem("orders");
if (data) {
    const userorder = JSON.parse(data);
    console.log(userorder);
    
    userorder.forEach(data => {
        shoppingCart.innerHTML += `<div class="item-container">
                            <img class= "item-img" src=".${data.imageUrl}" alt="">
                            <p class="item-name">${data.productName}</p>
                            <p class="item-price">${data.price}</p>
                            <p class="item-count">${data.quantity}</p>
                            <div class="cart-btn-container">
                                <div class="btn-select-buy">선택 구매</div>
                                <div class="btn-delete-buy">삭제</div>
                            </div>
                        </div>`
    });

}

