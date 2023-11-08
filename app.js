const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport'); // 추가

const { productSchema } = require('./models/model');
const loginRequired= require('./middlewares/login-required');
const getUserFromJWT = require('./middlewares/get-user-from-jwt'); // 추가
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');

mongoose.connect('mongodb://localhost:27017').then(() => {
  console.log("MongoDB connect Success!");
}).catch((err) => console.log(err));

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', loginRequired, authRouter) // 로그인요구

//라우터
app.use(passport.initialize()) // 추가
app.use(getUserFromJWT) // 추가
app.use('/', indexRouter);
app.use('/auth',authRouter)

app.listen(3000, () => {
    console.log("Server Started");
});


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