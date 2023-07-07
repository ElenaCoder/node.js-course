import express from 'express';
// const express = require('express');

const app = express();

const port = 3000;

let customers = [
    {id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176'},
  ]

//GET method: Fetch all customers
app.get("/api/customers", (req, res) => {
    res.json(customers);
})


app.listen(port, () => {
   console.log(`Server is running on port ${port}.`);
});

