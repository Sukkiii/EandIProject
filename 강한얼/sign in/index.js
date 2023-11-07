//이메일데이터
//비밀번호데이터
//submit눌렀을때
//db에서검색후
//로그인


function loginFetch(url) {
    return (
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const email = data.email.find({email:email});
          if (email===emailInput.value) {
            return 'login';
          } else {
            throw new Error("유저를 찾을 수 없습니다.");
          }
        })
        .catch((error) => {
          console.error("데이터 오류", error);
        })
    );
  }
  
  const signin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5500/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          
        }),
      });
      if(true){
      console.log(response)}
    } catch (error) {
      console.error("Error:", error);
    }
  };
  