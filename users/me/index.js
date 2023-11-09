//디비에서 아이디와 일치하는 회원의 정보를 받고
let email = document.getElementById("emailInput");
let birth = document.getElementById("birthInput");
let mobile = document.getElementById("mobileInput");
let address = document.getElementById("addressInput");
fetch("./Data.json")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    // console.log(res.user)
    user = res.user;
    user.forEach((el) => {
      email.value = el.email;
      birth.value = el.birth;
      mobile.value = el.mobile;
      address.value = el.address;
    });
  });
//기존비밀번호
fetch("userData", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    password: passwordInput,
  }),
});
//새로운비밀번호
