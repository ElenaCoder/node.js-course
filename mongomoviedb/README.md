🔔 🔔 🔔
---

## Project Description

This is a RESTful API project built with Node.js, Express, and MongoDB. It provides endpoints to manage a movie database, allowing users to perform CRUD (Create, Read, Update, Delete) operations on movie documents.

The goal of this project is to create a MongoDB database in Atlas specifically for managing movies. The database is named "moviedb" and contains a collection called "movies". Each movie document in the collection has the following required fields: title, director, year.

The root endpoint of the REST API is http://localhost:3000/movies.

REST API has the following endpoints and actions:

| Method and endpoint        | Action                                                                                      |
|----------------------------|---------------------------------------------------------------------------------------------|
| GET /api/movies            | Fetch all movies                                                                            |
| POST /api/movies           | Add new movie. New movie details are sent inside the request body                           |
| DELETE /api/movies         | Delete movie by title. Id is sent in the request body.                                      |
| PUT /api/movies/{id}       | Edit movie by id. Id is sent in the route parameter and updated car inside the request body.|


## Features

- Fetch all movies: Retrieve a list of all movies in the database.
- Add new movie: Create a new movie entry in the database.
- Delete movie by title: Remove a movie record from the database.
- Update movie by ID: Modify the details of a movie in the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas Cloud database
- Postman or cURL

## How to Use

1. Clone the repository to your local machine.

   `git clone https://github.com/ElenaCoder/node.js-course/tree/main/mongomoviedb`

2. Install Dependencies: Make sure you have Node.js and npm (Node Package Manager) installed on your machine. Open a terminal, navigate to the project directory, and run the following command to install the project dependencies:
  `npm install`


3. Database Setup: Set up the MongoDB Atlas connection by providing the connection string or connection URL in the index.js file.

4. Start the Server: Run the following command to start the server:

   `npm start`

5. Access the API: The API will be available at `http://localhost:3000/movies`. You can use an HTTP client (e.g., cURL, Postman) to interact with the endpoints mentioned in the "Features" section.


## Testing
To test the API endpoints, you can use tools like **cURL** or **Postman** (a popular API development and testing tool) to interact with the endpoints mentioned in the "Features" section. Here are some sample requests you can make to the API using Postman:

1. Fetch all movies:
    - Set the request method to GET.
    - Enter the request URL: http://localhost:3000/movies.
    - Click the "Send" button to send the GET request.
    - Review the response to see the list of movies returned.

- Add new movie:
    - Set the request method to POST.
    - Enter the request URL: http://localhost:3000/movies.
    - Set the request body to JSON format and provide the movie details. For example:
    ```
    {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994
    }
    ```
    - Click the "Send" button to send the POST request.
    - Check the response to see if the movie was successfully added.


- Delete movie by title:
    - Set the request method to DELETE.
    - Enter the request URL: http://localhost:3000/movies.
    - Set the request body to JSON format and provide the title of the movie you want to delete. For example:
    ```
    {
        "title": "The Shawshank Redemption"
    }
    ````
    - Click the "Send" button to send the DELETE request.
    - Inspect the response to verify if the movie with the specified title was deleted.

- Update/edit movie by ID:
    - Set the request method to PUT.
    - Enter the request URL: http://localhost:3000/movies/{movie_ID} (replace {movie_ID} with the actual ID of the movie you want to update).
    - Set the request body to JSON format and provide the updated movie details. For example:
    ```
    {
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": 1994
    }
    ```
    - Click the "Send" button to send the PUT request.
    - Verify the response to see if the movie details were successfully updated.



## License

This project is licensed under the MIT License.


---