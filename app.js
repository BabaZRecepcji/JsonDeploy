const { json } = require('express');
fs = require('fs');
const express = require("express");
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors())

app.get("/", (req, res) =>{
  let rawdata = fs.readFileSync('data.json');
  let year = JSON.parse(rawdata);
  res.json(year)
});

app.post('/', (req, res) => {
  try {
    fs.writeFileSync('./data.json', JSON.stringify(req.body));
    res.json({
      "message":"success",
    })
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: 'This is an error!'
  })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

