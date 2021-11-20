# tech-challenge
technical challenge endo_code

Level 1
Create an HTTP service that complies with the following requirements:

1. Command-line flag for the listening port (defaults to 8080) and environment variable override.
https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs

(read about CL flags: https://en.wikipedia.org/wiki/Command-line_interface)
https://nodejs.org/dist/latest-v16.x/docs/api/cli.html

2. Use mostly standard libraries.
mode.js, express

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
ISO date
HTTP status
Request
7. Write a readme file with usage examples.

8. Unit testing of all functionalities (flags, endpoints, etc.).

9. A production-ready Dockerfile, so the service can run safely inside a
container.

10. Documentation where it makes sense.



what is a command line flag? 
here is an example for the programming language go
https://gobyexample.com/command-line-flags

Debugging and Environment Variables
https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html

add gitignore;
https://codeburst.io/how-to-easily-set-up-node-environment-variables-in-your-js-application-d06740f9b9bd


