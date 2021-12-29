const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.text({type:"*/*"}));

app.post('/', function (req) {
  console.log(req.body);
})

app.listen(8008, function() {
    console.log("Server is warmed up.");
})