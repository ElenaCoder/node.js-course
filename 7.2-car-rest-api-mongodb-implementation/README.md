🔔 🔔 🔔
---

## Project Description

This is a RESTful API project built with Node.js, Express, and MongoDB. It provides endpoints to manage a car database, allowing users to perform CRUD (Create, Read, Update, Delete) operations on car documents.

The goal of this project is to create a MongoDB database in Atlas specifically for managing cars. The database is named *"cardb"* and contains a collection called "cars". Each car document in the collection has the following required fields: brand, model, color and year.

The root endpoint of the REST API is http://localhost:3000/cars.

REST API has the following endpoints and actions:

| Method and endpoint        | Action                                                                                    |
|----------------------------|-------------------------------------------------------------------------------------------|
| GET /api/cars              | Fetch all cars                                                                            |
| POST /api/cars             | Add new car. New car details are sent inside the request body                             |
| DELETE /api/cars           | Delete car by brand. Brand is sent in the request body.                                   |
| PUT /api/cars/{id}         | Edit car by id. Id is sent in the route parameter and updated car inside the request body.|


## Features

- Fetch all cars: Retrieve a list of all cars in the database.
- Add new car: Create a new car entry in the database.
- Delete car by brand: Remove a car record from the database.
- Update car by ID: Modify the details of a car in the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas Cloud database
- Postman or cURL

## How to Use

1. Clone the repository to your local machine.

   `git clone https://github.com/ElenaCoder/node.js-course/tree/main/7.2-car-rest-api-mongodb-implementation`

2. Install Dependencies: Make sure you have Node.js and npm (Node Package Manager) installed on your machine. Open a terminal, navigate to the project directory, and run the following command to install the project dependencies:
  `npm install`


3. Database Setup: Set up the MongoDB Atlas connection by providing the connection string or connection URL in the index.js file.

4. Start the Server: Run the following command to start the server:

   `npm start`

5. Access the API: The API will be available at `http://localhost:3000/cars`. You can use an HTTP client (e.g., cURL, Postman) to interact with the endpoints mentioned in the "Features" section.

## Deployment

This project has been deployed on RENDER service, and it is available at the following URL: [Car REST API on RENDER](https://elenacoder-7-2-car-rest-api-mongodb.onrender.com/cars)
You can use this deployed version of the API to interact with the car database and perform CRUD operations mentioned in the "Features" section on car documents.

## Testing
To test the API endpoints, you can use tools like **cURL** or **Postman** (a popular API development and testing tool) to interact with the endpoints mentioned in the "Features" section. Here are some sample requests you can make to the API using Postman:

1. Fetch all cars:
    - Set the request method to GET.
    - Enter the request URL: http://localhost:3000/cars.
    - Click the "Send" button to send the GET request.
    - Review the response to see the list of cars returned.

- Add new car:
    - Set the request method to POST.
    - Enter the request URL: http://localhost:3000/cars.
    - Set the request body to JSON format and provide the car details. For example:
    ```
    {
        "brand": "Toyota",
        "model": "Camry",
        "color": "Silver",
        "year": "2022"
    }
    ```
    - Click the "Send" button to send the POST request.
    - Check the response to see if the car was successfully added.


- Delete car by brand:
    - Set the request method to DELETE.
    - Enter the request URL: http://localhost:3000/cars.
    - Set the request body to JSON format and provide the title of the car you want to delete. For example:
    ```
    {
        "brand": "Toyota"
    }
    ````
    - Click the "Send" button to send the DELETE request.
    - Inspect the response to verify if the car with the specified title was deleted.

- Update/edit car by ID:
    - Set the request method to PUT.
    - Enter the request URL: http://localhost:3000/cars/{car_ID} (replace {car_ID} with the actual ID of the car you want to update).
    - Set the request body to JSON format and provide the updated car details. For example:
    ```
    {
        "brand": "Toyota2",
        "model": "Camry2",
        "color": "Silver2",
        "year": "2022"
    }
    ```
    - Click the "Send" button to send the PUT request.
    - Verify the response to see if the car details were successfully updated.



## License

This project is licensed under the MIT License.


---