🔔 🔔 🔔
---

## Project Description

The goal of this project was to create a RESTful API that allows users to interact with a **customer** database.
The root endpoint of the REST API is http://localhost:3000/api/customers.

REST API has following endpoints and actions:

| Method and endpoint        | Action                                                                         |
|----------------------------|--------------------------------------------------------------------------------|
| GET /api/customers         | Fetch all customers                                                            |
| GET /api/customers/{id}    | Fetch customer by id. Id is sent in the route parameter                        |
| POST /api/customers        | Add new customer- New customer is sent inside the request body                 |
| DELETE /api/customers/{id} | Delete customer by id. Id is sent in the route parameter                       |
| PUT /api/customers/{id}    | Edit customer by id.                                                           |
|                            | Id is sent in the route parameter and updated customer inside the request body |


## Features

- Fetch all customers: Retrieve a list of all customers in the database.
- Fetch customer by ID: Get the details of a customer by their unique ID.
- Add new customer: Create a new customer entry in the database.
- Delete customer by ID: Remove a customer record from the database.
- Update customer by ID: Modify the details of a customer in the database.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Postman
- Mocha
- Chai
- Chai-HTTP

## How to Use

1. Install Dependencies: Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

2. [Database Setup](#database-setup): Set up a PostgreSQL database server and create a database called "customer". Run the provided SQL statements to create the necessary table and populate it with sample data.

3. Configuration: Update the database connection details in the `dbconfig.js` file to match your PostgreSQL database credentials.

4. Installation: Open a terminal, navigate to the project directory, and run the following command to install the project dependencies:
  `npm install`


5. Start the Server: Run the following command to start the server:
  `npm start`


6. Access the API: The API will be available at `http://localhost:3000/api/customers`. You can use an HTTP client (e.g., cURL, Postman) to interact with the endpoints mentioned in the "Features" section.


## Database Setup

To set up the PostgreSQL database for the Customer Database REST API, follow these steps:

1. Install PostgreSQL: If you haven't already, download and install PostgreSQL from the official website (https://www.postgresql.org) based on your operating system.

2. Open a terminal or command prompt and connect to your PostgreSQL server using the appropriate credentials.
Create a Postgre database called customer using the following SQL statement.
  `CREATE DATABASE customer;`

3. Connect to the customer database (`\c customer` command) and create a table called customers into the customer database using the following SQL statement.
    ```
      CREATE TABLE customers (
        id serial PRIMARY KEY,
        firstname VARCHAR (250) NOT NULL,
        lastname VARCHAR (250) NOT NULL,
        email VARCHAR (250) NOT NULL,
        phone VARCHAR (250) NOT NULL
      );
    ```

4. Populate the customers table using the SQL statement below.

    ```
      INSERT INTO customers (firstname, lastname, email, phone) VALUES ('John', 'Johnson', 'john@johnson.com', '8233243');
      INSERT INTO customers (firstname, lastname, email, phone) VALUES ('Mary', 'Smith', 'mary@smith.com', '6654113');
      INSERT INTO customers (firstname, lastname, email, phone) VALUES ('Peter', 'North', 'peter@north.com', '901176');
    ```

5. Check that customers are added to the customers table
  `SELECT * FROM customers;`



## Manual testing

To test the API endpoints, you can use tools like **cURL** or **Postman**. Here are some example requests:

- Fetch all customers:
GET http://localhost:3000/api/customers

- Fetch customer by ID:
GET http://localhost:3000/api/customers/{id}


- Add new customer:
POST http://localhost:3000/api/customers
Content-Type: application/json

  {
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
  }


- Delete customer by ID:
DELETE http://localhost:3000/api/customers/{id}


- Update customer by ID:
PUT http://localhost:3000/api/customers/{id}
Content-Type: application/json

  {
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
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