
# tech-challenge
technical challenge by endo_code

This project focuses on one way how to create a HTTP service.
It uses the JS library node.js and many more which you can find in the package.file under "dependencies".

The project aims to solve Level 1 of endo_codes' technical challenge, which contains following points:

Level 1
Create an HTTP service that complies with the following requirements:

1. Command-line flag for the listening port (defaults to 8080) and environment variable override.

2. Use mostly standard libraries.

3. Please provide a Makefile (or use a similar tool) to define tasks

4. Three HTTP endpoints:
/helloworld
--> returns "Hello Stranger"
/helloworld?name=AlfredENeumann (any filtered value)
--> returns "Hello Alfred E Neumann" (camel-case gets cut by spaces)
/versionz
--> returns a JSON with git hash and name of the project (needs to be
compiled in)

5. Test your API with Postman

6. A structured log is written to standard out with:

7. Write a readme file with usage examples.

8. Unit testing of all functionalities (flags, endpoints, etc.).

9. A production-ready Dockerfile, so the service can run safely inside a
container.

10. Documentation where it makes sense.


In the following I added comments under each point:

1. Command-line flag for the listening port (defaults to 8080) and environment variable override.
If you wish you can set the port to what you specify in the command line.
https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs

(read about CL flags: https://en.wikipedia.org/wiki/Command-line_interface)
https://nodejs.org/dist/latest-v16.x/docs/api/cli.html

2. Use mostly standard libraries.
I used node.js, an open-source and cross-platform JavaScript runtime environment and its libraries like express, etc.
For installations I used npm to install all the necessary libraries

3. Please provide a Makefile (or use a similar tool) to define tasks
https://opensource.com/article/18/8/what-how-makefile

The right make file creates the basic file architecture of the project.
It "makes" the right files for you and can clean up after you, too.

4. Three HTTP endpoints:

/helloworld
--> returns "Hello Stranger"

To check it out you have to run "node server.js" in your command line and then when the server is running check under http://localhost:3000/helloworld
(the 4 digit number should be your predefined port!) what you see in your in browser!


/helloworld?name=AlfredENeumann (any filtered value)
--> returns "Hello Alfred E Neumann" (camel-case gets cut by spaces)

To check it out you have to run "name=AlfredENeumann node server_query.js" in your command line and then when the server is running check under http://localhost:3000/helloworld?name=AlfredENeumann
(the 4 digit number should be your predefined port!) what you see in your in browser!

/versionz
--> returns a JSON with git hash and name of the project (needs to be
compiled in)

To check it out you have to run "node server.js" in your command line and then when the server is running check under http://localhost:3000/versionz
(the 4 digit number should be your predefined port!) what you see in your in browser!

5. Test your API with Postman
OK, made some screenshots (add later)

6. A structured log is written to standard out with:
I made a logger.js file and added logger.info to each request and when you start the server, then the logger.js creates a server.log in the folder "logs".

ISO date
Nach etablierten Schichtenmodellen zur Einordnung von Netzwerkprotokollen nach ihren grundlegenderen oder abstrakteren Aufgaben wird HTTP der sogenannten Anwendungsschicht zugeordnet. Diese wird von den Anwendungsprogrammen angesprochen, im Fall von HTTP ist das meist ein Webbrowser. Im ISO/OSI-Schichtenmodell entspricht die Anwendungsschicht der 7. Schicht.
tbh I'm still not sure what ISO date even means.

HTTP status
The current status of the service: send a status code

Request
show the request method (GET, POST, ...)

7. Write a readme file with usage examples.
This README.md file shows you how to try out the http service.

8. Unit testing of all functionalities (flags, endpoints, etc.).
OK. I tested a lot not sure if it always made sense.

9. A production-ready Dockerfile, so the service can run safely inside a
container.

I added a dockerfile but I couldn't make an image bc "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"

https://www.docker.com/blog/getting-started-with-docker-using-node-jspart-i/

Can'T connect to docker daemon: https://stackoverflow.com/questions/51857634/cannot-connect-to-the-docker-daemon-at-unix-var-run-docker-sock-is-the-docke

10. Documentation where it makes sense.






