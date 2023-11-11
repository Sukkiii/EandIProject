document.addEventListener("DOMContentLoaded", () => {
  const bannerWraps = document.querySelectorAll(".each-banner-wrap");

  bannerWraps.forEach((bannerWrap) => {
    bannerWrap.addEventListener("click", (event) => {
      const pageName = event.currentTarget.getAttribute("href");
      window.location.href = pageName;
    });
  });
});

const add = document.getElementById("addBtn");
const del = document.getElementById("delBtn");
const catInput = document.getElementById("catInput");
const priceInput = document.getElementById("priceInput");

add.addEventListener("click", (e) => {
  e.preventDefault();
  let div = document.createElement("div");
  div.className = "category-item";
  div.innerHTML = `
   
  <div class="box">
    <p class="category-item-name">${catInput.value}</p>
    <p class="category-item-price">${priceInput.value}</p>
  </div>
`;
  let container = document.getElementsByClassName("category-container")[0];
  container.appendChild(div);
});

del.addEventListener("click", (e) => {
  e.preventDefault();
  let container = document.getElementsByClassName("category-container")[0];
  let catItem = document.getElementsByClassName("category-item");
  container.removeChild(catItem[catItem.length - 1]);
});

function loadFile(input) {
    let file = input.files[0]
    let img = document.createElement("img");
    img.className = "itemImg";
    img.src = URL.createObjectURL(file);
    let categoryItem = document.getElementsByClassName("category-item")

    categoryItem[categoryItem.length - 1].prepend(img);
  
}
let chooseFile = document.getElementById('chooseFile'); 
chooseFile.addEventListener('onchange',loadFile)