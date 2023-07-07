🔔 🔔 🔔
---
## About the project

This is a **5.1-node-customers-rest-api-implementation** project developed as part of the "Node.js" course at Metropolia University of Applied Sciences. The course is designed to introduce the fundamental concepts of Node.js and provide hands-on experience in building web applications and APIs.

## Task decription

Create REST API that handle customers data. Use the following customers data in your implementation:

```
let customers = [
  {id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
  {id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113'},
  {id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176'},
];

```

The id is generated using Date.now() function.

The root endpoint of the REST API is http://localhost:3000/api/customers

REST API has following endpoints and actions.


| HTTP Method | Endpoint                 | Functionality                                 |
|-------------|--------------------------|-----------------------------------------------|
| GET         | /api/customers           | Fetch all customers                           |
|-------------|--------------------------|-----------------------------------------------|
| GET         | /api/customers/{id}      | Fetch customer by id.                         |
|             |                          | Id is sent in the route parameter             |
|-------------|--------------------------|-----------------------------------------------|
| POST        | /api/customers           | Add new customer.                             |
|             |                          | New customer is sent inside the request body. |
|-------------|--------------------------|-----------------------------------------------|
| DELETE      | /api/customers/{id}      | Delete customer by id.                        |
|             |                          | Id is sent in the route parameter             |
|-------------|--------------------------|-----------------------------------------------|
| PUT         | /api/customers/{id}      | Edit customer by id.                          |
|             |                          | Id is sent in the route parameter and         |
|             |                          | updated customer inside the request body.     |


### Prerequisites

To run this web server locally, you'll need the following installed on your machine:

- Node.js
- npm
- Postman

## Installation

1.Clone the repository or download the source code.

`git clone https://github.com/ElenaCoder/node.js-course/5.1-node-customers-rest-api-implementation`

2.Change into the project directory:.

`cd 5.1-node-customers-rest-api-implementation`

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
 - Enter the URL for your Node.js app, including the appropriate endpoint you want to test (e.g., http://localhost:3000/api/customers).
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