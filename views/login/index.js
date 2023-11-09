//이메일데이터
//비밀번호데이터
//submit눌렀을때
//db에서검색후
//로그인

// function loginFetch(url) {
//     return (
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           const email = data.email.find({email:email});
//           if (email===emailInput.value) {
//             return 'login';
//           } else {
//             throw new Error("유저를 찾을 수 없습니다.");
//           }
//         })
//         .catch((error) => {
//           console.error("데이터 오류", error);
//         })
//     );
//   }

//   const signin = async (email, password) => {
//     try {
//       const response = await fetch("http://localhost:5500/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,

//         }),
//       });
//       if(true){
//       console.log(response)}
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

const url = "http://localhost:5500";
const submitButton = document.querySelector("#signInSubmit");
const email = document.querySelector("#emailInput").value;
const password = document.querySelector("#passwordInput").value;

submitButton.addEventListener("submit", loginHandle);

const loginHandle = () => {
  fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (data) => {
        if (data.token) {
          localStorage.setItem("jwtToken", token);
          alert("로그인");
          redirect(`${url}/main`);
        } else {
          alert("로그인 실패");
        }
      }
      //리디렉 메인url로 (토큰x)
      //토큰을 로컬스토리지에 저장하는 로직 생각해보기.
    )
    .catch((err) => {
      alert(err, "에러발생");
    });
};

// fetch("/protected-resource", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// }).then((response) => {
//   response;
// });
