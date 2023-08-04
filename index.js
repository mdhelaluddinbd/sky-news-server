const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.listen(port, () => {
    console.log("Sky News Server is Running On Port: ",port);
  });



app.get("/"),
  (req, res) => {
    res.send("Sky News API is Running");
  };

  app.get("/news",(req,res)=>{
    res.send(news)
  })

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "1") {
    res.send(news);
  } else {
    const newsCategory = news.filter((n) => n.category_id === id);
    res.send(newsCategory);
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});


