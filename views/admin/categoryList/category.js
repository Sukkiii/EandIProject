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

add.addEventListener("click", (e) => {
  e.preventDefault();
  let div = document.createElement("div");
  div.className = 'category-item'
  div.innerHTML = `
 <img class="item-img" src="../../common/img/etc.png" alt="">
 <p class="category-item-name">${catInput.value}</p>
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
