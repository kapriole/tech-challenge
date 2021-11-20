// add all the libraries by require
const axios = require("axios");
const _ = require("lodash");
const bodyParser = require("body-parser");

const http = require("http");
const port = 8080;

const express = require("express");
const app = express();


const requestListener = function(req, res) {
    res.writeHead(200);

    if (req.url === '/') {
        res.write('Hello, World!');
    }
    res.end();
};

const server = http.createServer(requestListener);
server.listen(port);

// use express to add an endpoint

// I added "Hello Stranger" at http://localhost:3000/helloWorld


// post request with axios

app.get("/helloworld", (req, res) => {
    res.send("Hello Stranger!");
});

app.listen(3000, () => console.log("Server ready"));

//app.listen() returns an instance of http. You would use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.

app.post("/helloworld", (req, res) => {
    res.send("Hello Stranger!");
});

// test environment variables
// https://www.thirdrocktechkno.com/blog/how-to-set-environment-variable-in-node-js/
// The process core module of Node.js provides the env property which hosts all the environment variables that were set at the moment the process was started.
// If you have multiple environment variables in your node project, you can also create an .env file in the root directory of your project, and then use the dotenv package to load them during runtime.

require("dotenv").config();
//npm install dotenv

const user = process.env.USER_ID; // "239482"
const key = process.env.USER_KEY; // "foobar"

console.log("USER:", user);
console.log("KEY:", key);



// in bash I passed USER_ID=239482 USER_KEY=foobar node server.js 
// result USER: 239482

// add the user to url 
// urlObject.search For example: '?query=string'.

// set the urlObject.search to the bash input

// append the userinput => user to the url

// use curl ? : https://www.section.io/engineering-education/node-curl/

// USE req.query to retrieve values for the URL paras


//use the req. object

// you can pass arguments thru the command line: e.g. node app.js name=joe

// IMPORTANT: https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// the process and argv objects

// REPL also known as Read Evaluate Print Loop is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.

// parse the argument arg[0] is name=joe

const args = require("minimist")(process.argv.slice(2));
args["name"]; //joe
console.log("hello?", args);
// result: hello? { _: [], name: 'joe' }

// bash: node app.js --name=joe

const chalk = require("chalk");
console.log(chalk.yellow("hi!"));


// URL HASH https://nodejs.org/api/url.html#new-urlinput-base



// nmp install body parser


// get hash of the most recent commit
require("child_process").exec("git rev-parse HEAD", function(err, stdout) {
    console.log("Last commit hash on this branch is:", stdout);
});

// get the information and export into a json file and serve it at the endpoint /versionz
// Last commit hash on this branch is: 6bcb69310041f89f2a87c325ba525f3af6db7742



// JSON PART: response also has a json() method, which returns a promise that will resolve with the content of the body processed and transformed into JSON.

// Write a file with node: https://nodejs.dev/learn/writing-files-with-nodejs


// ERROR HANDLING IN NODE.JS https://nodejs.dev/learn/error-handling-in-nodejs



//RESOURCES returning different data types with node.js https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module