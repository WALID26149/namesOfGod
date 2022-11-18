const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(favicon(path.join(__dirname, 'public', 'icon-islam-png')));
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.listen(process.env.PORT || 3000, function () {
  console.log("server is running");
});
