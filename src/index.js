const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("testing!");
});

app.listen(port, () => {
  console.log("El servidor está operando en el puerto " + port);
});
