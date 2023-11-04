const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');

const loginRequired = require('./middlewares/login-required');
const getUserFromJWT = require('./middlewares/get-user-from-jwt');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users')
const adminRouter = require('./routes/admin')
const sellerRouter = require('./routes/seller')

require('./passport')(); //서버의 요청(req 객체)에 passport/index.js의 설정을 입력

mongoose.connect('mongodb://localhost:27017/').then(() => {
  console.log("MongoDB connect Success!");
}).catch((err) => console.log(err));

const app = express();
app.use(express.json());// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//라우터
app.use(passport.initialize()) //  passport를 미들웨어화
app.use(getUserFromJWT)
app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/users', usersRouter)
// app.use('/users', loginRequired, usersRouter);
app.use('/admin', adminRouter)
app.use('/seller', sellerRouter)

//에러 핸들러
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log("Server Started");
});

// //추가 // 모든 커넥션 끊기
// process.on('SIGINT', async () => {
//   console.log('MongoDB 커넥션 연결 종료')
//   await mongoose.disconnect();
// })

// 유저가 나가면 카운트 되어야


/**
 * 모듈 생성
 *    npm i passport passport-local
 *    npm i jsonwebtoken
 * 파일 생성
 *  middlewares -> get-user-from-jwt.js
 *  uils -> async-handler.js
 *       -> jwt.js
 *  passport->index.js
 *  passport -> stratigies -> jwt.js
 * 폴더 생성
 *  passport
 *  passport -> stratigies
 */

// const testuser = new User({
//   email: 'str@ga.ne',
//   userName: 'sssss',
//   password: 'ff'
// });

// testuser.save().then(() => {
//   console.log("저장 성공!", testuser);
// }).catch((err) => {
//   console.log(err);
// });
