const multer = require('multer'); //이미지 파일 받을 수 있는 미들웨어
const upload = multer({ dest: 'view/uploads/' }); // 파일이 저장될 위치

///////
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'views/pictures/')
   },
   filename: function (req, file, cb) {
      cb(null, 'product-' + req.body.id + path.extname(file.originalname)) // 상품 ID를 파일 이름에 포함시킵니다.
   }
})

///////
const imagePath = path.join(__dirname, 'views/uploads/my-image.jpg'); // 이미지 파일의 경로를 설정합니다.
res.sendFile(imagePath); // 이미지 파일을 응답으로 보냅니다.

////////
app.post('/upload', upload.single('image'), (req, res) => {
   const productData = req.body; // 상품 데이터에 접근합니다.
   const imageFile = req.file; // 이미지 파일에 접근합니다.
   // 이제 productData와 imageFile을 사용하여 필요한 처리를 할 수 있습니다.
   res.send('상품 데이터와 이미지가 성공적으로 업로드되었습니다.');
});
//////
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'views/uploads/') // 이미지 파일의 경로를 'views/uploads/'로 변경합니다.
    },
    filename: function (req, file, cb) {
        cb(null, 'product-' + req.body.id + path.extname(file.originalname))
    }
});

module.exports = storage;