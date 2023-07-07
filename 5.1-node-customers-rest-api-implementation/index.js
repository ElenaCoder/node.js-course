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

//GET method:Get customer by id
app.get("/api/customers/:id", (req, res) => {
    const customerId = req.params.id;

    const customer = customers.filter(customer => customer.id === customerId);
    if(customer.length > 0) res.json(customer);
    res.status(404).end();
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}.`);
});

