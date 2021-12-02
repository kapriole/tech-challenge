
# tech-challenge
technical challenge by endo_code

**INTRODUCTION**

This project focuses on one way how to create an HTTP service.
It uses node.js and a few more dependencies which you can find in the package.file under "dependencies".

**INSTALLATION**

To complete this project you need a text editor (like VS Code), a terminal, installations of <a href="https://www.npmjs.com/">npm</a>, <a href="https://git-scm.com/">git</a>, <a href="https://nodejs.dev/">node.js</a>, <a href="https://mochajs.org/">mocha</a> and <a href="https://www.docker.com/">docker</a>

The right make file creates the basic file architecture of the project.
It "makes" the right files for you and can clean up after you, too.
you can run the command "make" in the console

OR 

clone this git repository!

**HTTP ENDPOINTS**

To try out the 3 HTTP endpoints, please 

1. open your terminal
2. cd in the directory of the file "server.js"
3. type "node server.js" and click enter

the port is set inside the server.js to 3000 and the host to localhost

When the server is running, type in your browser's address bar "http://localhost:3000/helloworld" and wait for the result.

To end the connection to the server, press CTRL+C

For the next endpoint you can run "name=AlfredENeumann node server_query.js" in your command line (the name value "AlfreadENeumann" is replacable with any other string value) and then when the server is running check the outcome under http://localhost:3000/helloworld?name=AlfredENeumann

To check out the last endpoint you have to run "node server.js" in your command line and when the server is running check the outcome under http://localhost:3000/versionz

ALTERNATIVELY: you can use the command line with <a href="https://curl.se/">curl</a>

**API TESTING WITH POSTMAN**

1. Sign up for free at <a href="https://www.postman.com/">Postman</a>
2. Open your Postman App 
3. Type in your HTTP endpoints and check if everything works as 
4. Alternatively you can use Postman in your console <a href="https://testfully.io/blog/postman-api-testing/">Read More</a>

**WRITE A LOG**
The logger.js file uses information thru added logger.info to each request and when you start the server with "node server.js" and try out one of the endpoints then the logger.js creates a server.log in the folder "logs". When you are lucky, you can find a lot of valueable information about the HTTP status and the request methods of each endpoint.

**TESTING**

To run the test file cd into the test folder and run "npm test"

**DOCKERFILE**

Check out the Dockerfile in the root directory of the project

<a href="https://www.docker.com/blog/getting-started-with-docker-using-node-jspart-i/">Read More</a> 


Good luck!


