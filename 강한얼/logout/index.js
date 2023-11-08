//!로그아웃 함수
const logOutButton = document.querySelector("#logOutButton"); //html상존재X
logOutButton.addEventListener("click", logOutHandle);
const logOutHandle = () => {
  fetch("url/logout", {
    method: "DELETE",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      if (!data) {
        localStorage.removeItem('jwtToken');
        alert("logOut");
        
      }
    })
    .catch((err) => {
      console.log(err,'에러발생');
    });
};

