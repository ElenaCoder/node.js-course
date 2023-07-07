🔔 🔔 🔔
---
## About the project

This is a **nodemovies** project developed as part of the "Node.js" course at Metropolia University of Applied Sciences. The course is designed to introduce the fundamental concepts of Node.js and provide hands-on experience in building web applications and APIs.

## Task decription

Create REST API that handle movies data. Use the following movies data in your implementation:

```
let movies = [
  {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
  {id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese'},
  {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus'}
];

```

The id is generated using Date.now() function.

The root endpoint of the REST API is http://localhost:3000/api/movies

REST API has following endpoints and actions.

| HTTP Method | Endpoint              | Functionality          |
|-------------|-----------------------|------------------------|
| GET         | /api/movies           | Get all movies         |
| GET         | /api/movies/{id}      | Get movie by id        |
| POST        | /api/movies           | Add new movie          |
| DELETE      | /api/movies/{id}      | Delete movie by id     |
| PUT         | /api/movies/{id}      | Edit movie by id       |


### Prerequisites

To run this web server locally, you'll need the following installed on your machine:

- Node.js
- npm
- Postman

## Installation

1.Clone the repository or download the source code.

`git clone https://github.com/ElenaCoder/node.js-course/nodemovies`

2.Change into the project directory:.

`cd nodemovies`

3.Install the dependencies:

`npm install`


## Usage

1.Start the server.

`node index.js`
or
`npm start`
The server will start running on port 3000.

2.Launch the Postman application.
 - Click on the "New" button to create a new request.
 - Enter the URL for your Node.js app, including the appropriate endpoint you want to test (e.g., http://localhost:3000/api/movies).
 - Choose the appropriate HTTP method from the dropdown menu (e.g., GET, POST, PUT, DELETE).
 - Set request headers and parameters (if applicable):
    - If your API requires headers or parameters, you can add them in the relevant sections in Postman.
    - For example, if you have an endpoint that requires an ID parameter, you can add it as a path parameter or a query parameter
 - Click the "Send" button to send the request to your Node.js app.
 - View the response:
    - Postman will display the response received from your app, including the status code, headers, and the response body (if applicable).
    - You can examine the response to verify that your Node.js app is functioning correctly.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


---