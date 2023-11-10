// //디비에서 아이디와 일치하는 회원의 정보를 받고
// //마이페이지의 각 필드에 뿌린다?
// const Img = [
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
//   "./img/맹구.jpg",
// ];
// const itemImg = document.getElementById("itemImg")
// Img.forEach((img) => {
// itemImg.innerHTML += `<article><img src="${img}"></article>`;
// });


function addToRecentlyViewed(product) {
  // 현재 로컬 스토리지에서 기존에 저장된 최근 본 상품 배열을 불러옴
  let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

  // 중복 상품 제거
  recentlyViewed = recentlyViewed.filter(item => item.id !== product.id);

  // 새로 클릭한 상품을 배열에 추가
  recentlyViewed.unshift(product);

  // 배열을 다시 로컬 스토리지에 저장 (최대 8개까지 저장)
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed.slice(0, 8)));

  // 최근 본 상품 목록을 업데이트
  displayRecentlyViewed();
}

// 최근 본 상품을 표시하는 함수
function displayRecentlyViewed() {
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  const itemImg = document.getElementById('itemImg');

  // 최근 본 상품 목록을 비우고 다시 채움
  itemImg.innerHTML = '';
  recentlyViewed.forEach(product => {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('recently-viewed-item');

      const itemName = document.createElement('div');
      itemName.textContent = product.name;

      // 이미지를 표시하는 코드 (상황에 따라 수정 필요)
      const itemImage = document.createElement('img');
      itemImage.src = product.image;
      itemImage.alt = product.name;

      itemContainer.appendChild(itemImage);
      itemContainer.appendChild(itemName);

      itemImg.appendChild(itemContainer);
  });
}

// 초기화면에서 최근 본 상품 표시
displayRecentlyViewed();

