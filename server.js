const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.text({type:"*/*"}));

app.post('/', function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(80, function() {
    console.log("Server is warmed up.");
});