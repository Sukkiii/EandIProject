const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
dotenv.config();

// const multer  = require('multer'); //이미지 파일 받을 수 있는 미들웨어
// const upload = multer({ dest: 'view/uploads/' }); // 파일이 저장될 위치

const apiRouter = require("./routes");
// api
const indexRouter = require("./routes/indexRouter");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connect Success!");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credentials: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
  })
);

app.use(express.json()); // express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.static("views"));
app.use("/images", express.static("images"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//라우터
app.use("/api", apiRouter);
app.use("/", indexRouter);

//에러 핸들러
app.use((err, req, res, next) => {
  // console.log(err)
  // set locals, only providing error in development
  res.locals.message = err.message; // res.locals는 응답 객체의 로컬 변수(local variable)를 나타내며, 응답을 렌더링하는 뷰(view)에서 사용
  res.locals.error = req.app.get("env") === "development" ? err : {}; // 재사용하기 어려움

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, console.log("Server is start"));
