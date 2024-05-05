const express = require('express');//khỏi tạo mà route nào cũng có
const router = express.Router();//khỏi tạo mà route nào cũng có
//quy ước là lúc nào viết cũng cách 1 hàng như này
const newsController = require('../app/controllers/NewsController');
// sau đó ta chọt vào hàm index( chứa funtion handler) của file NewController.js của đường dẫn trên 

//http://localhost:3000/news/haha
router.use('/haha', newsController.showdetail);
//phải để thằng cha dưới cùng vì nó sẽ kiểm tra các dk con trước, nếu không match thì sẽ xuống thằng cha
router.use('/' , newsController.index);// này chỉ là con ,trong thằng cha ( file index.js của routes đã định nghĩa tuyến đường /news rồi nên trong file con này chỉ cần /)

module.exports = router;
