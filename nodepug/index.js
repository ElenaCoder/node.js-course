const express = require('express');;

const app = express();

const port = 3000;

app.set('view engine', 'pug');

app.get("/hello", (req, res) => {
    res.render("hello", {name: 'Lena'});
  })

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}.`);
});