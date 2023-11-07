//디비에서 아이디와 일치하는 회원의 정보를 받고
//마이페이지의 각 필드에 뿌린다?
const Img = [
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
  "./img/맹구.jpg",
];
const itemImg = document.getElementById("itemImg")
Img.forEach((img) => {
itemImg.innerHTML += `<article><img src="${img}"></article>`;
});



