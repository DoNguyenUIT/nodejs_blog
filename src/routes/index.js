const newsRouter = require('./news');
//module.exports =  router; bên file site.js có tác dụng ở đây
const siteRouter = require('./site');//home va search

function route(app) {
    // tuyến đường cho news, sau đó nó  chọc vào hàm newsRouter cảu file  routes/new.js
    app.use('/news', newsRouter);

    app.use('/',siteRouter );

    

  // route:định nghĩa tuyến đường
  // mặc định localhost:3000  là home do có dấu / là trang hiện tại
  //lấy trên web express
  // app.get("/", (req, res) => {
  //   //req:request, res:respone
  //   // chọn render đến home.hbs
  //   res.render("home");
  // });

  // khi đó vẫn header và footer cũ (như home) thay body thành news
//   app.get("/news", (req, res) => {
//     //app.METHOD(PATH, HANDLER)  trong đó get là method ,/news là path , còn lại là handler
//     // chọn render đến news.hbs
//     res.render("news");
//   });
  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });

  
}

module.exports = route; //export để require bên file index.js(ngoài có thể sử dụng được)