//dependencies required for app 
var express = require("express");
var app = express();

app.use(express.static("public"));//render css file

app.set('view engine', 'ejs');

//Function to display Hello World
function saySomething() {
  console.log("Hello World!");
}
saySomething();

//server on port 3000
app.listen(3000, function ()
{
  console.log("App working on port 3000");
});