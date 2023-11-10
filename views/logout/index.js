//!로그아웃 함수
const logOutButton = document.querySelector("#logOutButton"); //html상존재X
logOutButton.addEventListener("click", logOutHandle);
const logOutHandle = () => {
  fetch("url/logout", {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        alert("Logout successful");
        // 여기에서 다른 동작을 수행하거나 페이지를 리디렉션할 수 있습니다.
      } else {
        alert("Logout failed");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Failed to logout. Please try again later.");
    });
};
