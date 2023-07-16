🔔 🔔 🔔
---

## Project Description

The goal of this project was to create a secure RESTful API that allows users to interact with a **movie** database.
The API endpoints are protected using authentication with JSON Web Tokens (JWT) and password hashing with bcrypt.
The root endpoint of the REST API is http://localhost:3000/api/movies.

REST API has the following endpoints and actions:

| Method and endpoint        | Action                                                                                  |
|----------------------------|-----------------------------------------------------------------------------------------|
| GET /api/movies            | Fetch all movies                                                                        |
| GET /api/movies/{id}       | Fetch movie by id. Id is sent in the route parameter                                    |
| POST /api/movies           | Add new movie. New movie details are sent inside the request body                       |
| DELETE /api/movies/{id}    | Delete movie by id. Id is sent in the route parameter                                   |
| PUT /api/movies/{id}       | Edit movie by id. Id is sent in the route parameter and updated movie details           |


## Features

- Fetch all movies: Retrieve a list of all movies in the database.
- Fetch movie by ID: Get the details of a movie by its unique ID.
- Add new movie: Create a new movie entry in the database.
- Delete movie by ID: Remove a movie record from the database.
- Update movie by ID: Modify the details of a movie in the database.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Postman
- Mocha
- Chai
- Chai-HTTP
- jsonwebtoken
- bcrypt

## How to Use

1. Install Dependencies: Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

2. [Database Setup](#database-setup): Set up a PostgreSQL database server and create a database called "movie". Run the provided SQL statements to create the necessary table and populate it with sample data.

3. Configuration: Update the database connection details in the `dbconfig.js` file to match your PostgreSQL database credentials.

4. Installation: Open a terminal, navigate to the project directory, and run the following command to install the project dependencies:

   `npm install`

5. Start the Server: Run the following command to start the server:

   `npm start`

6. Access the API: The API will be available at `http://localhost:3000/api/movies`. You can use an HTTP client (e.g., cURL, Postman) to interact with the endpoints mentioned in the "Features" section.

7. Authentication: To access protected endpoints, include a valid JWT token in the Authorization header of your requests. You can obtain a token by making a POST request to the `/api/login` endpoint with valid user credentials. The response will include a token that can be used for subsequent authenticated requests.
   **Obtaining the JWT Token:**
   To obtain a JWT token, we will use Postman. Follow these steps:

   - Open Postman and create a new request.
   - Set the HTTP method to POST.
   - Enter the following URL: http://localhost:3000/api/login.
   - Select the "Body" tab.
   - Choose the "raw" option.
   - Set the body format to JSON (application/json).
   - In the request body, enter the following JSON:
         ```
         {
            "email":"john@john.com",
            "password":"john007"
         }
         ```
   - Click the "Send" button to make the request.
   - The response from the /api/login endpoint will include a JWT token. Copy this token from the response body.

   **Include JWT Token:**
    To access protected endpoints, include the JWT token in the Authorization header of your requests.
    Here's an example using Postman:
      - Create a new request in Postman for a protected endpoint (e.g., GET /api/movies).
      - Set the HTTP method to the appropriate method (e.g., GET).
      - Set the request URL to http://localhost:3000/api/movies.
      - In the request headers, add a new header with the key Authorization and the value Bearer <your-jwt-token>.
      - Replace <your-jwt-token> with the actual JWT token.
      - Click the "Send" button to make the request. You should receive a response with the desired data from the protected endpoint.

## Database Setup

To set up the PostgreSQL database for the Movie Database REST API, follow these steps:

1. Install PostgreSQL: If you haven't already, download and install PostgreSQL from the official website (https://www.postgresql.org) based on your operating system.

2. Open a terminal or command prompt and connect to your PostgreSQL server using the appropriate credentials.
   Create a PostgreSQL database called "movie" using the following SQL statement:

   `CREATE DATABASE movie;`

3. Connect to the "movie" database (`\c movie` command) and create a table called "movies" into the "movie" database using the following SQL statement:

      ```
         CREATE TABLE movies (
         id serial PRIMARY KEY,
         title VARCHAR (200) NOT NULL,
         director VARCHAR (200) NOT NULL,
         year INTEGER NOT NULL
         );
      ```
4. Populate the "movies" table using the SQL statements below:

      ```
         INSERT INTO movies (title, year, director) VALUES ('Star Wars: Episode IX - The Rise of Skywalker', 2019,'J.J. Abrams');
         INSERT INTO movies (title, year, director) VALUES ('The Irishman', 2019, 'Martin Scorsese');
         INSERT INTO movies (title, year, director) VALUES ('Harry Potter and the Sorcerers Stone', 2001, 'Chris Columbus');
      ```

5. Check that movies are added to the "movies" table:

   `SELECT * FROM movies;`


## Testing
To test the API endpoints, you can use tools like **cURL** or **Postman**. Here are some example requests:

- Fetch all movies:
GET http://localhost:3000/api/movies

- Fetch movie by ID:
GET http://localhost:3000/api/movies/{id}

- Add new movie:
POST http://localhost:3000/api/movies
Content-Type: application/json

   {
   "title": "Casino Royale",
   "year": 2006,
   "director": "Martin Campbell"
   }

- Delete movie by ID:
DELETE http://localhost:3000/api/movies/{id}

- Update movie by ID:
PUT http://localhost:3000/api/movies/{id}
Content-Type: application/json

   {
   "title": "The Irishman",
   "year": 2015,
   "director": "Martin Scorsese"
   }

## Automated integration testing
To test the API endpoints, the project utilizes the **Mocha** testing framework along with the **Chai** assertion library and **Chai-HTTP** plugin.
The tests are written in JavaScript and can be found in the test directory.

To run the tests, use the following command:

`npm test`

Make sure the server is running before executing the tests.

## License

This project is licensed under the MIT License.


---