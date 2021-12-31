const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;
app.use(bodyParser.text({type:"text/plain"}));

app.post("/", function(req, res) {
  console.log(req.body);

  res.sendStatus(200);
});

app.all("*", function (req, res) {
  res.sendStatus(200);
});

app.listen(PORT, function() {
    console.log("Server is warmed up.");
});