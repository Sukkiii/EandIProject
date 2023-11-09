//디비에서 아이디와 일치하는 회원의 정보를 받고
let email = document.getElementById("emailInput");
let birth = document.getElementById("birthInput");
let mobile = document.getElementById("mobileInput");
let address = document.getElementById("addressInput");
let password = document.getElementById("passwordInput");
let newPassword = document.getElementById("newpasswordInput");

const submitButton = document.getElementById("submitButton");

fetch("http://localhost:5000/user/users/:id", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    res.forEach((el) => {
      email.value = el.email;
      birth.value = el.birth;
      mobile.value = el.mobile;
      address.value = el.address;
    });
  });
//기존정보화면에뿌려주는함수

//기존비밀번호
// fetch("userData", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     password: passwordInput,
//   }),
// });

//입력한value로재설정하는함수
const submitHandle = () => {
  fetch("http://127.0.0.1:5500/user/users/:id", {
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
