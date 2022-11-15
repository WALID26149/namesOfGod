const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("ublic"));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {

});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is running");
});
