🔔 🔔 🔔
---
## About the project

This is a **4.1-welcome-web-server** project developed as part of the "Node.js" course at Metropolia University of Applied Sciences. The course is designed to introduce the fundamental concepts of Node.js and provide hands-on experience in building web applications and APIs.

## Task decription

Create Node.js web server that listens port 3000 in the localhost. There is one route that waits request to /home/users end point and it takes two route parameters: name and age. When request arrives, the route parameters are extracted and following message is sent to the response.

Welcome {name_param_value}, you're {age_param_value} years old
See the screenshot [below.](./assets/4.1-image.jpg)

### Prerequisites

To run this web server locally, you'll need the following installed on your machine:

- Node.js

## Installation

1.Clone the repository or download the source code.

`git clone https://github.com/ElenaCoder/node.js-course/4.1-welcome-web-server`

2.Change into the project directory:.

`cd 4.1-welcome-web-server`


## Usage

1.Start the server.

`node index.js`
or
`npm start`
The server will start running on port 3000.

2.Open your web browser and navigate to http://localhost:3000/home/user/John/20. You should see the text 'Welcome John, you're 20 years old' displayed on the page.


## License

This project is licensed under the MIT License - see the LICENSE file for details.


---