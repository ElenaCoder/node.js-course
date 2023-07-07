import express from 'express';
import bodyParser from 'body-parser';
// const express = require('express');

const app = express();
app.use(bodyParser.json())

const port = 3000;

let movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus'}
  ];

//GET method: Fetch all movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
})

//GET method:Get movie by id
app.get("/api/movies/:id", (req, res) => {
    const movieId = req.params.id;

    const movie = movies.filter(movie => movie.id === movieId);
    if(movie.length > 0) res.json(movie);
    res.status(404).end();
})

//POST method: Add new movie
app.post("/api/movies", (req, res) => {
    // Extract movie from the request body and generate id
    const newMovieId = Date.now();
    const newMovie = {newMovieId, ...req.body}

    // Add new movie at the end of the movies array
    movies = [...movies, newMovie];

    res.json(newMovie); // it used to send a JSON response back to the client
})

//DELETE method: delete movie by id
app.delete("/api/movies/:d", (req, res) => {
    const movieId = req.params.id;

    movies = movies.filter(movie => movie.id !== movieId);

    res.status(204).end();
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}.`);
});

