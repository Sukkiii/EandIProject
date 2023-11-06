//각필드가비어있으면버튼을눌렀을때타켓필드에일림+채워지면알림x
//비밀번호와비밀번호확인이틀리면필드에알림
//약관체크
//성별체크
//submit누르면각필드의밸류를전달(어떻게?)
//  추가기능1. js써서 필드가 다 차면 secondary에서 success로 class변경
const signupForm = document.querySelector("#signupForm");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const passwordCheckInput = document.querySelector("#passwordCheckInput");
const birthInput = document.querySelector("#birthInput");
const addressInput = document.querySelector("#addressInput");
const termsButton = document.querySelector("#termsButton");
const submitButton = document.getElementById("submitButton");
const submitButton2 = document.getElementById("submitButton2");
const pwValid = document.querySelector("#pwValid");
const idValid = document.querySelector("#idValid");
const birthValid = document.querySelector("#birthValid");
//id중복검사

//id길이검사
const idLen = (id) => {
  return id.value.length >= 10 && id.value.length <= 25;
};
emailInput.addEventListener("keyup", (e) => {
  if (!idLen(emailInput)) {
    idValid.innerText = "아이디는 10-25 글자 사이로 입력해주세요.";
  } else {
    idValid.innerText = "";
     
  }
});

//pwd검사 //pwdCheck
const pwdLen = (pw1,pw2) => {
  return pw1.value === pw2.value
};
passwordCheckInput.addEventListener("keyup", pwdOnchange);
function pwdOnchange() {
  if (pwdLen(passwordInput, passwordCheckInput)) {
    pwValid.innerText = "비밀번호가 일치합니다.";
  } else {
    pwValid.innerText = "비밀번호가 일치하지않습니다";
  }
}

//생년월일형식
const birthCheck = (birth) => {
  return birth.value.length === 6
};
birthInput.addEventListener("keyup", () => {
  if (birthCheck(birthInput)) {
    birthValid.innerText = "";
  } else {
    birthValid.innerText = "yymmdd형식으로 작성해주세요.";
  }
});







//전체칸이 다 채워져있어야 submit을 수행하는 함수
function beforeSubmit (){
  if(emailInput.value&&passwordInput.value&&passwordCheckInput.value&&
    birthInput.value&&termsButton.checked&&
    idLen(emailInput)&&
pwdLen(passwordInput, passwordCheckInput)&&
birthCheck(birthInput)
    ){
      submitToggle()
  }
  }
   
//토글
function submitToggle(){
  submitButton2.style.display = "none";
  submitButton.style.display = "unset";
}

window.onload(beforeSubmit)




  
  // submitButton.addEventListener("submit", submitHandler);
  // //버튼누르면정보를백으로뿌려주는최종함수
  // const submitHandler = (e) => {
  //   e.preventDefault();
  
  //   signup(
  //     emailInput.value,
  //     passwordInput.value,
  //     birthInput.value,
  //     addressInput.value
  //   );
  // };

//정보를json화하여body에담아보내는함수
const signup = async (email, password, birth, address) => {
  try {
    const response = await fetch("http://localhost:5500/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        birth: birth,
        address: address,
      }),
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
};


// new daum.Postcode({
//   oncomplete: function(data) {
//       // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
//       // 예제를 참고하여 다양한 활용법을 확인해 보세요.
//   }
// }).open();
