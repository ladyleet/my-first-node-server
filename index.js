const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static("./styles"));

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.render('index');
});

app.post("/", function(req, res) {
  console.log(req.body.pun);

  res.render('responses', { response: req.body });
});

app.listen(8888);

console.log("yolo");
console.log("this is the :D coolest thing ever");


// require("openurl").open("http://localhost:8888");
