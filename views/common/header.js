const headerStyles = `
body {
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  background-color: #fff;
  font-size: 1rem;
}
body,
input,
textarea,
select,
button,
table {
  word-break: keep-all;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #000;
}
* {
  box-sizing: border-box;
}
#hd {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 150px;
  background-color: #fff;
  box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
}
#hd > h1 {
  display: flex;
  width: 17%;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  min-width: 230px;
}
h1 a {
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.main-logo {
  width: 70%;
  display: flex;
}
header .head-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
.category-info {
  display: flex;
  width: 100%;
  display: block;
  box-sizing: border-box;
}
.category-ul {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  text-align: center;
  border-right: 2px solid #ebebeb;
}
.category-move {
  position: relative;
  display: flex;
  border-left: 2px solid #ebebeb;
  z-index: 1;
  height: 150px;
  list-style: none;
}
.category-move > a:hover {
  background-color: #d12d32;
  font-size: 21px;
  color: #fff;
  font-weight: 900;
}
.category-move:hover .category-icon {
  filter: invert(100%) sepia(100%) saturate(38%) hue-rotate(254deg)
    brightness(110%) contrast(110%);
}
.category-move > a {
  width: 120px;
  position: relative;
  display: flex;
  padding-top: 90px;
  margin-right: -4px;
  border-right: 1px solid #ebebeb;
  background-color: #fff;
  justify-content: center;
  /* align-items: 500; */
  transition: 0.5s;
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 700;
}
.category-icon {
  position: absolute;
  top: 40px;
  left: 50%;
  width: 35px;
  height: 34px;
  background-size: contain;
  transition: 0.5s;
  transform: translateX(-50%);
  background-color: transparent;
}
.cus-service {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}
.service-move {
  margin: 0 15px;
  /* padding-top: 45px; */
  display: block !important;
  font-size: 20px;
  font-weight: 700;
  /* padding-bottom: 2px; */
}
.service-move > a {
  text-decoration: none;
  color: #000;
}
.service-move > a:hover {
  text-decoration-line: underline;
  text-decoration-color: #d12d32;
  text-underline-offset: 4px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = headerStyles;
document.head.appendChild(styleSheet);

function createHeader() {
  const header = document.createElement("header");
  header.id = "hd";
  header.innerHTML = `
  <h1>
    <a href="/">
      <img class="main-logo" src="/common/img/logo.png" />
    </a>
  </h1>
  <div class="head-container">
    <nav class="category-info">
      <ul class="category-ul">
        <li class="category-move">
          <a href="/categories?id=figure">
            <img class="category-icon" src="/common/img/figure.png" alt="" />
            피규어
          </a>
        </li>
        <li class="category-move">
          <a href="/categories?id=doll">
            <img
              class="category-icon"
              src="/common/img/doll.png"
              alt=""
            />인형</a
          >
        </li>
        <li class="category-move">
          <a href="/categories?id=pencil">
            <img
              class="category-icon"
              src="/common/img/stationery.png"
              alt=""
            />학용품</a
          >
        </li>
        <li class="category-move">
          <a href="/categories?id=clothes">
            <img
              class="category-icon"
              src="/common/img/clothes.png"
              alt=""
            />옷</a
          >
        </li>
        <li class="category-move">
          <a href="/categories?id=etc">
            <img
              class="category-icon"
              src="/common/img/etc.png"
              alt=""
            />기타</a
          >
        </li>
      </ul>
    </nav>
    <ul class="cus-service">
      <li class="service-move">
        <a href="/signup/">회원가입</a>
      </li>
      <li class="service-move">
        <a id='loginBtn' href="/login/">로그인</a>
      </li>
      <li class="service-move">
        <a id='logoutBtn' href="/login/">로그아웃</a>
      </li>
      <li class="service-move">
        <a href="/shoppingBasket/">장바구니</a>
      </li>
      <li class="service-move">
        <a id='mypage' href="/users/">마이페이지</a>
      </li>
    </ul>
  </div>
  `;
 
  document.body.appendChild(header);
  // document.getElementById('loginBtn').style.display = "none";
  document.getElementById('logoutBtn').style.display = "none";
  document.getElementById('mypage').style.display = "none";
}
createHeader();
 
const logOutButton = document.querySelector("#logoutBtn");
 

const logOutHandle = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/api/logout", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    if (data.message) {
      // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log(data.message,'data.message');
      alert("Logout successful");
      window.location.assign("http://localhost:3000");
      document.getElementById('loginBtn').style.display = "unset";
      document.getElementById('logoutBtn').style.display = "none";
      document.getElementById('mypage').style.display = "none";
    } else {
      console.log(data,'data');
      alert("Logout failed");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to logout. Please try again later.");
  }
};

logOutButton.addEventListener("click", logOutHandle);