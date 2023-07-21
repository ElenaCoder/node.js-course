🔔 🔔 🔔
---

## About

This repository is my study companion for the Node.js course offered by Metropolia University of Applied Sciences. It helps me keep track of the course structure and acts as a summary of the topics I've learned. I also use the projects in this repository to showcase my skills in my portfolio. It's a way for me to show my dedication and growth as a web developer.

# Node.js Course README

Welcome to the Node.js course repository! This repository contains the projects for the Node.js course, covering a range of topics to help you build web applications using Node.js.

## Table of Contents

1. [Introduction](#introduction)
2. [Basics of Node.js & Development Tools](#basics-of-nodejs--development-tools)
3. [Creating a Web Server with Node.js](#creating-a-web-server-with-nodejs)
4. [Using Express](#using-express)
5. [Creating a REST API](#creating-a-rest-api)
6. [Using Databases with Node.js](#using-databases-with-nodejs)
7. [Using MongoDB with Node.js](#using-mongodb-with-nodejs)
8. [Testing](#testing)
9. [Securing REST API](#securing-rest-api)
10. [Template Engines](#template-engines)
11. [Deployment](#deployment)

## 1. Introduction

To get the most out of this course, it is recommended that you have the following prerequisites:

1. **Familiarity with JavaScript Syntax and Fundamentals:** Having a solid understanding of JavaScript syntax and fundamentals is crucial for working with Node.js. You should have a strong grasp of concepts like variables, functions, objects, and control flow in JavaScript.
2. **Basic Knowledge of Working with the Command Line:** Node.js applications are typically developed and run using the command line interface. It is important to have a basic understanding of command line usage, such as navigating directories, running commands, and managing files.
3. **Basic Knowledge of SQL:** In some sections of this course, we work with databases, particularly relational databases. Having a basic understanding of SQL (Structured Query Language) is beneficial for understanding concepts related to database management and querying.
4. **Understanding the Basics of HTTP Protocol:** Since web applications heavily rely on the HTTP protocol for communication, it is essential to have a basic understanding of how HTTP works. You should be familiar with concepts such as HTTP methods (GET, POST, PUT, DELETE), request and response structure, and status codes.

## 2. Basics of Node.js & Development Tools

This section introduces the fundamentals of Node.js and the essential development tools used in Node.js projects. It covers the following topics:
1. **Understanding Node.js:** Gain a comprehensive understanding of Node.js, an event-driven JavaScript runtime designed for server-side development. Explore its key features and benefits.
2. **Installing Node.js:** Follow step-by-step instructions to install Node.js on your machine. Refer to the specific installation guidelines for your operating system to ensure a smooth setup process.
3. **Development Tools for Node.js:** Discover a range of development tools commonly used in Node.js projects. Learn about popular package managers like npm or yarn, and explore additional tools that enhance the Node.js development workflow.
4. **Utilizing the Web Browser's Console:** Learn how to effectively use the web browser's console for debugging and logging purposes in web development. Explore its capabilities and leverage it to analyze and troubleshoot your Node.js applications.
5. **Exploring ES6 (ECMAScript 6) Features:** Dive into the powerful features introduced in ECMAScript 6 (ES6) and their relevance to Node.js development. Explore concepts such as arrow functions, template literals, destructuring, and modules, which can enhance your productivity and code organization.

## 3. Creating a Web Server with Node.js

This section provides guidance on creating a web server using Node.js. It covers the following topics:
1. **Initializing a Node.js project:** Learn how to initialize a new Node.js project by using the `npm init` command. This step helps set up the project's configuration, including package name, version, and dependencies.
2. **Creating a web server with Node.js:** Discover the process of building a basic web server using Node.js. Gain insights into handling HTTP requests, defining routes, and serving static files, all through the built-in `http` module.
3. **Running the Node.js web server:** Understand how to run the Node.js web server locally. Execute the appropriate command or script to launch the server, making it accessible on your local machine.
4. **Source code for the Node.js web server:** Explore the provided source code for the Node.js web server. Analyze the code structure, including the necessary module imports, server configuration, and request handling logic.

**Projects**: [helloworld](https://github.com/ElenaCoder/node.js-course/tree/main/helloworld)

## 4. Using Express

This section explores the usage of **Express**, a powerful and popular web framework for Node.js. It covers the following topics in detail:
1. **Understanding Express web framework:** Understand the basics of Express and why it is widely used for building web applications in Node.js.
2. **Creating a web server with Express:** Learn how to create a web server using Express. Follow step-by-step instructions to set up an Express application, define routes, and handle HTTP requests with ease.
3. **The basics of routing in Express:**  Get familiar with the basics of routing in Express. Learn how to define routes for different URL patterns and handle different types of requests.
4. **Working with route parameters in Express:** Discover how to use route parameters in Express. Learn how to extract dynamic values from URLs, allowing you to create more flexible routes for your application.
5. **Nodemon:** A helpful development tool: Discover Nodemon, a useful tool for developers. Learn how to install and use Nodemon with Express, which automatically restarts the server when files change, making development easier.
6. **Sending responses with JSON data in Express:** Master the art of sending JSON responses in Express. Learn how to structure and send data in JSON format to communicate with client-side applications effectively.
7. **Setting HTTP response status in Express:** Learn about HTTP response status codes and their significance in web development. Understand how to set appropriate response status codes in Express for different scenarios, providing meaningful feedback to clients.

**Projects**:
- [helloexpress](https://github.com/ElenaCoder/node.js-course/tree/main/helloexpress)
- [4.1-welcome-web-server](https://github.com/ElenaCoder/node.js-course/tree/main/4.1-welcome-web-server)
- [4.2-conditional-response](https://github.com/ElenaCoder/node.js-course/tree/main/4.2-conditional-response)

## 5. Creating a REST API

This section provides guidance on creating a REST API using Node.js and Express. It teach how to implement CRUD operations and handle data validation for building efficient and powerful web services.
It covers the following topics:
1. **What is REST:** Understand the principles and concepts of Representational State Transfer (REST), a widely adopted architectural style for designing web services. Learn about RESTful principles, resource-oriented design, and the stateless nature of REST APIs.
2. **What is Postman and how to use it:** Discover Postman, a powerful API development and testing tool. Learn how to install Postman and utilize its features for making HTTP requests, testing APIs, and analyzing responses.
3. **How to create REST API using Node.js and Express:** Dive into the process of creating a RESTful API using Node.js and Express. Follow step-by-step instructions to set up an Express application, define routes for different endpoints, implement CRUD operations (Create, Read, Update, Delete), and handle common API features such as authentication and validation.

**Projects**:
- [nodemovies](https://github.com/ElenaCoder/node.js-course/tree/main/nodemovies)
- [5.1-node-customers-rest-api-implementation](https://github.com/ElenaCoder/node.js-course/tree/main/5.1-node-customers-rest-api-implementation)


## 6. Using Databases with Node.js

This section provides detailed guidance on working with **PostgreSQL**, a powerful relational database management system.
It covers the following topics:
1. **How to install PostgreSQL relational database:** Learn how to install PostgreSQL on your machine. Follow the installation instructions specific to your operating system to set up PostgreSQL and prepare it for database operations.
2. **How to create a database and tables using the SQL Shell (psql):** Dive into the SQL Shell (psql) and discover how to create databases and tables using SQL commands. Learn how to define table structures, specify data types, and establish relationships between tables.
3. **How to use PostgreSQL with Node.js and Express:** Explore how to integrate PostgreSQL with Node.js and the Express web framework. Learn about the necessary packages and libraries, establish a database connection, and utilize PostgreSQL within your Node.js application.
4. **How to connect to the database using Node.js:** Understand the process of connecting to a PostgreSQL database using Node.js. Learn about configuring database connection settings, establishing a connection using a driver or library, and handling potential errors.
5. **How to fetch data from the database using Node.js:** Discover different techniques for retrieving data from a PostgreSQL database using Node.js. Learn about executing SQL queries, fetching result sets, and handling data retrieval errors.
6. **How to create a REST API with a PostgreSQL database:** Learn how to create a RESTful API that interacts with a PostgreSQL database. Follow step-by-step instructions to define API routes, handle HTTP requests, perform CRUD operations on the database, and ensure data integrity.

**Projects**:
- [nodemoviedb](https://github.com/ElenaCoder/node.js-course/tree/main/nodemoviedb)
- [6.2-customer-rest-api-implementation](https://github.com/ElenaCoder/node.js-course/tree/main/6.2-customer-rest-api-implementation)

##  7. Using MongoDB with Node.js

This section provides comprehensive guidance on working with MongoDB, a popular NoSQL database.
It covers the following topics:
1. **How to create a MongoDB collection:** Learn how to create collections in MongoDB, which are analogous to tables in relational databases. Understand the process of defining collections, specifying document structures, and organizing data within MongoDB.
2. **How to use MongoDB with Node.js and Express:** Explore the integration of MongoDB with Node.js and the Express web framework. Learn about the required packages and libraries, establish a connection to MongoDB, and leverage its features within your Node.js application.
3. **How to connect to the MongoDB database using Node.js:** Understand the process of connecting to a MongoDB database using Node.js. Learn about the configuration settings, establishing a connection using a driver or library, and handling connection-related issues.
4. **How to create a REST API with a MongoDB database:** Learn how to create a RESTful API that interacts with a MongoDB database. Follow step-by-step instructions to define API routes, handle HTTP requests, perform CRUD operations on MongoDB collections, and ensure data integrity.

**Projects**:
- [mongomoviedb](https://github.com/ElenaCoder/node.js-course/tree/main/mongomoviedb)
- [7.2-car-rest-api-mongodb-implementation](https://github.com/ElenaCoder/node.js-course/tree/main/7.2-car-rest-api-mongodb-implementation)

## 8. Testing

This section provides comprehensive guidance on testing Node.js applications.
It covers the following topics:
1. **Node.js testing libraries:** Explore various testing libraries available for Node.js, such as Mocha, Chai, and ChaiHTTP. Understand their features, advantages, and use cases to make an informed choice for your testing needs.
2. **How to install testing libraries:** Learn how to install and set up testing libraries in your Node.js project. Follow step-by-step instructions to install the chosen testing library and configure it for your testing environment.
3. **How to create tests for the REST API:** Understand the process of writing tests for your REST API. Learn about different types of tests, including unit tests and integration tests.
4. **How to run test cases:** Discover how to execute your test cases and obtain test results. Learn about test runners and how to configure them to run your tests automatically. Understand how to interpret test output and identify and resolve any issues.

**Projects**:
- [nodemoviedb](https://github.com/ElenaCoder/node.js-course/tree/main/nodemoviedb)
- [6.2-customer-rest-api-implementation](https://github.com/ElenaCoder/node.js-course/tree/main/6.2-customer-rest-api-implementation)

## 9. Securing REST API

This section provides a comprehensive guide on securing your REST API using JSON Web Tokens (JWT).
It covers the following topics:
1. **What is JSON Web Token (JWT):** Understand the concept of JSON Web Tokens and how they are used for authentication and authorization in web applications
2. **How to install security libraries:** Explore different security libraries and packages available for securing your Node.js applications. Learn how to install and set up these libraries to work with JWT.
3. **How to secure the REST API using JWT:** Learn how to implement JWT-based authentication and authorization in your REST API. Follow step-by-step instructions to generate and validate JWTs, protect routes, and enforce authentication and authorization rules.
4. **How to implement login functionality:** Discover how to implement user login functionality in your REST API

**Projects**:
- [nodemoviedb](https://github.com/ElenaCoder/node.js-course/tree/main/nodemoviedb)
- [6.2-customer-rest-api-implementation](https://github.com/ElenaCoder/node.js-course/tree/main/6.2-customer-rest-api-implementation)

## 10. Template Engines

This section provides a comprehensive guide on working with template engines and styling in Node.js applications.
It covers the following topics:
1. **What are template engines:** Understand the concept of template engines and their role in generating dynamic HTML views.
2. **How to install Pug template engine:** Explore Pug, a popular template engine for Node.js. Learn how to install and set up Pug in your Node.js project to efficiently generate HTML views.
3. **How to use Pug template engine in a Node.js application:** Learn how to leverage Pug to create dynamic views in your Node.js application. Follow step-by-step instructions to define templates, pass data to views, and render dynamic content on the server-side.
4. **How to style your application using Bootstrap:** Discover Bootstrap, a widely-used CSS framework for building responsive and visually appealing web applications. Learn how to integrate Bootstrap into your Node.js project to enhance the styling and layout of your application.

**Projects**:
- [nodepug](https://github.com/ElenaCoder/node.js-course/tree/main/nodepug)
- [10.2-customer-template-engine](https://github.com/ElenaCoder/node.js-course/tree/main/10.2-customer-template-engine)

## 11. Deployment

This section provides a comprehensive guide on preparing and deploying your Node.js application.
It covers the following topics:
1. **Preparing your Node.js application for deployment:** Understand the necessary steps to prepare your Node.js application for deployment.
2. **Deploying a Node.js application to the Heroku cloud:** Explore the deployment process using the Heroku cloud platform. Follow step-by-step instructions to set up a Heroku account, configure your application for deployment, and deploy your Node.js application to the cloud.
3. **What is Helmet and how to use it:** Discover Helmet, a security middleware for Node.js applications. Learn about the importance of securing your web applications and how Helmet protects against common web vulnerabilities.

**Projects**:
- [nodepug](https://elena-coder-nodepug.onrender.com/)
- [10.2-customer-template-engine](https://elenacoder-10-2-customer-pug-template.onrender.com/)

---