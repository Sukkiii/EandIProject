const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { productSchema } = require('./models/model');
const indexRouter = require('./routes/index');
const path = require('path');

mongoose.connect('mongodb+srv://ragnarok810:!apffhel810@board-cluster.vik4cbf.mongodb.net/').then(() => {
  console.log("MongoDB connect Success!");
}).catch((err) => console.log(err));

// const product = productSchema.Product({
//   productId: 1001,
//   productName: "잠옷",
//   price: 10000,
//   categoryId: 1,
//   description: "잠잘 때 입는 옷",
//   image: "1",
// });

// product.save().then(() => {
//   console.log("저장 성공!");
// }).catch((err) => {
//   console.log(err);
// });

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log("Server Started");
});