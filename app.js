const express = require("express");
const ejs = require('ejs'); //
const path = require("path"); // altta kullandik path.join olarak ondan dolayi aktif durumda

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs'); // kullanacaginiz motor
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/add", (req, res) => {
  res.render('add');
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening at http: //localhost:port`);
});
