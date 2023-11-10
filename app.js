const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
dotenv.config();

<<<<<<< HEAD
const indexRouter = require('./routes')
const permission = require('./middlewares/permission'); // 유저인증 & 권한 체크

=======
const multer  = require('multer'); //이미지 파일 받을 수 있는 미들웨어
const upload = multer({ dest: 'view/uploads/' }); // 파일이 저장될 위치

const indexRouter = require('./routes')

>>>>>>> onlyBack
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connect Success!");
}).catch((err) => console.log(err));

const app = express();
app.use(express.json());// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.static("views"));
app.use("/image", express.static("image"));
<<<<<<< HEAD
=======

>>>>>>> onlyBack
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//라우터
app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/user', permission('user'));
// app.use('/seller', permission('seller'));
app.use('/admin', permission('admin'));
=======
>>>>>>> onlyBack

//에러 핸들러
app.use((err, req, res, next) => {
  // console.log(err)
  // set locals, only providing error in development
  res.locals.message = err.message; // res.locals는 응답 객체의 로컬 변수(local variable)를 나타내며, 응답을 렌더링하는 뷰(view)에서 사용
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // 재사용하기 어려움

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});

const port = process.env.PORT || 3000;
<<<<<<< HEAD
app.listen(port, console.log('Server is start'))
=======
app.listen(port, console.log('Server is start'))
>>>>>>> onlyBack
