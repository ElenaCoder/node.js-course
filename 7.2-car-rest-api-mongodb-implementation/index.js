const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://mongoviope:<password>@cluster0.ohce2rp.mongodb.net/cardb?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});