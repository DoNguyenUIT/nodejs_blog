class NewsController {
  //[GET], /news
  index(req, res) {
    res.render("news");
  }
  //hàm này sẽ được vào khi http://localhost:3000/news/haha
  showdetail(req, res) {
    res.send("newww detailll .....");
  }
}

module.exports = new NewsController; //tạo ra 1 đối tượng của class trên và export ra ngoài, để khi ta require ở bên file khác 