const express = require("express");
const path = require("path");

const indexRouter = express.Router();

const serveStatic = (resource) => {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };
  return express.static(resourcePath, option);
};

// 메인 페이지
indexRouter.use("/", serveStatic("main"));

// 카테고리 페이지
indexRouter.use("/categories", serveStatic("categories"));

// 상품 페이지
indexRouter.use("/products", serveStatic("products"));

// 로그인 페이지
indexRouter.use("/login", serveStatic("login"));

// 로그아웃 페이지
indexRouter.use("/logout", serveStatic("logout"));

// 회원가입 페이지
indexRouter.use("/signup", serveStatic("signup"));

// 장바구니 페이지
indexRouter.use("/shoppingBasket", serveStatic("shoppingBasket"));

// 결제 페이지
indexRouter.use("/payment", serveStatic("payment"));

// 사용자 페이지
indexRouter.use("/users", serveStatic("users"));

// 관리자 페이지
indexRouter.use("/manager", serveStatic("manager"));

// 에러 페이지
indexRouter.use("/page-not-found", serveStatic("page-not-found"));

export { indexRouter };
