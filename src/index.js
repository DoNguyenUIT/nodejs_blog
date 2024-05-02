const path = require("path");
// đi vào node_modules để lấy express
//lấy trên web express
const express = require("express");
//nén thư viện handle vào biến handlebars
const handlebars = require("express-handlebars");
//lấy trên web express
const app = express();
//lấy trên web express
const port = 3000;
// set cho nó khi mở local:3000 thì mặc định đang ở public
// khi localhost:3000/img/logo.png thì mở được ảnh
// nếu ở trong đó để public/img thì chỉ cần localhost:3000/logo.png
// bắt đầu từ src
// cung cấp cái thư đường dẫn của thư mục public cho static, nó sẽ vào đó kiểm tra và lấy file tĩnh ra, hoặc là ảnh, haowcj là file app.css đã link

app.use(express.static(path.join(__dirname, "./public")));

// template engine
// ( sau khi rút gọn tên miền thì handlebar thành hbs)
app.engine(
  "hbs",
  handlebars.engine({
    //cú pháp dổi tên miền
    extname: ".hbs",
  })
); // nén thư viên vào hbs và đặt tên là handlebars ( sau khi rút gọn tên miền thì handlebar thành hbs)
app.set("view engine", "hbs"); //set cho view engine là tên handlebars đã định nghĩa ở trên( sau khi rút gọn tên miền thì handlebar thành hbs)
// đưa vào thư mục views để lấy ra 2 file home.hbs hoặc news.hbs
// bắt đầu từ src
app.set("views", path.join(__dirname, "./resources/views"));

// route:định nghĩa tuyến đường
// mặc định localhost:3000  là home do có dấu / là trang hiện tại
//lấy trên web express
app.get("/", (req, res) => {
  // chọn render đến home.hbs
  res.render("home");
});
// khi đó vẫn header và footer cũ (như home) thay body thành news
app.get("/news", (req, res) => {
  // chọn render đến news.hbs
  res.render("news");
});
// 127.0.0.1 - localhost ví dụ như http://127.0.0.1:3000 bằng với http://localhost:3000
//lấy trên web express
// app được khởi tạo từ thằng express và lắng nghe cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
