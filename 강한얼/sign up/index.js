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
const submitButton = document.querySelector("#submitButton");
const valid = document.querySelector("#valid");
//id길이검사
const idLen = (val) => {
  return val.length >= 4 && val.length <= 12;
};

//id중복검사

 passwordCheckInput.addEventListener("keyup",pwdOnchange );
function pwdOnchange() {
  let div = document.createElement("div");
  if (passwordInput.value !== passwordCheckInput.value) {
    div.innerHTML= "일치하지않습니다"
    valid.appendChild(div);
 
  } else {
    div.innerHTML = "일치합니다."
    valid.appendChild(div);
  }
}


//pwd검사 //pwdCheck
// const pwdCheck = (password1, password2) => {
//   return password1 === password2;
// };
//  ===>true면 append로 pwdchk밑에 요소추가(일치합니다)
//  ===>false면 append로 pwdchk밑에 요소추가 (틀립니다)


//버튼누르면정보를백으로뿌려주는최종함수
const submitHandler = (e) => {
  e.preventDefault();

  signup(
    emailInput.value,
    passwordInput.value,
    birthInput.value,
    addressInput.value
  );
};

submitButton.addEventListener("click", submitHandler);

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
