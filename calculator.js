const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
app.listen(3000, function () {
  console.log("server started");
});
//to grab the form data that get posted from html pages
app.use(express.urlencoded({ extended: true }));

//To send individual bits of html we use res.send
// app.get("/", function (req, res) {
//   res.send("<h1>hello calc</h1>");
// });

//to send html files use re.sendfile
//to send complete file we use __dirname
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log(req.body);
  //   console.log(req.body.num1);
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = Number(num1) + Number(num2);
  res.send("The result is" + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmicalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var result = weight / (height * height);
  res.send("Your BMI is" + result);
});
