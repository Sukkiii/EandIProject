//디비에서 아이디와 일치하는 회원의 정보를 받고
//마이페이지의 각 필드에 뿌린다?
const Data = [
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
  {
    date: "2023/08/23",
    name: "rkdgksdjf@naver.com",
    item: "짱구휴지 맹구양말 훈이와사비",
    status: "배송 중",
  },
];

const itemImg = document.getElementById("itemImg");
Data.forEach((data) => {
  itemImg.innerHTML += `<div>
    ${data.date} - ${data.name} - ${data.item} - ${data.status}
  </div>`;
});
