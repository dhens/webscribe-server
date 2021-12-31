const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 80 || process.env.PORT;
app.use(bodyParser.text({type:"*/*"}));

app.post('/', function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, function() {
    console.log("Server is warmed up.");
});