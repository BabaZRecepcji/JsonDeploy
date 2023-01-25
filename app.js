const { json } = require('express')
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.json({
  "message":"success",
}));

app.post('/', (req, res) => {
  res.json({"message":"Post"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

