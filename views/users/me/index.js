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
fetch("http://kdt-sw-7-team05.elicecoding.com/api/users/mypage", {
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
// const submitHandle = () => {
//   fetch("http://127.0.0.1:3000/api/users/mypage/:id", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: emailInput.value,
//       userName: nameInput.value,
//       password: newpasswordInput.value,
//       birth: birthInput.value,
//       address: addressInput.value,
//       mobile: mobileInput.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res)
//       console.log(res.message)
//       alert("수정되었습니다.");
//       console.log("success");
//       // window.location.href ='http://localhost:3000'
//     })
//     .catch((err) => {
//       alert("실패하였습니다.");
//       console.log("fail");
//     });
// };

// submitButton.addEventListener("submit", submitHandle);

const submitHandle = (e) => {
  e.preventDefault(); // 기본 submit 동작을 막음

  // 여기서 사용자의 ID를 얻어와서 URL을 동적으로 생성
  const userId = "123"; // 사용자 ID를 실제 값으로 대체
  const url = `http://kdt-sw-7-team05.elicecoding.com/:${userId}`;

  fetch(url, {
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
      if(res.status(200)){
        alert("수정되었습니다.");
      }
      console.log(res);
      console.log(res.message);
      
      console.log("success");
      window.location.href ='http://kdt-sw-7-team05.elicecoding.com/'
    })
    .catch((err) => {
      alert("실패하였습니다.");
      console.log("fail");
    });
};

submitButton.addEventListener("submit", submitHandle);

document.addEventListener(
  "DOMContentLoaded",
  (window.onload = function (e) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("logoutBtn").style.display = "unset";
      document.getElementById("mypage").style.display = "unset";
      document.getElementById("signupBtn").style.display = "none"; 
    }
  })
);
