//디비에서 아이디와 일치하는 회원의 정보를 받고
let email = document.getElementById("emailInput");
let birth = document.getElementById("birthInput");
let mobile = document.getElementById("mobileInput");
let address = document.getElementById("addressInput");
let password = document.getElementById("passwordInput");
let newPassword = document.getElementById("newpasswordInput");

const submitButton = document.getElementById("submitButton");
const token = document.cookie
  .split("; ")
  .find((row) => row.startsWith("accessToken="))
  .split("=")[1];
console.log(token);
fetch("http://localhost:3000/api/users/mypage", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  credentials: "include"
})
// .then((res) =>
// res.json() 
//   )
  .then((res) => {
    console.log(res)
 
    email.value = res.email;
    birth.value = res.birthDay;
    mobile.value = res.userName;
    address.value = res.address;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    // 에러 처리 로직 추가
  });

//입력한value로재설정하는함수
const submitHandle = () => {
  fetch("http://127.0.0.1:3000/api/users/mypage/:id", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      userName: nameInput.value,
      password: newpasswordInput.value,
      birth: birthInput.value,
      address: addressInput.value,
      mobile: mobileInput.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert("수정되었습니다.");
      console.log("success");
    })
    .catch((err) => {
      alert("실패하였습니다.");
      console.log("fail");
    });
};

submitButton.addEventListener("submit", submitHandle);
