// add all the libraries by require
const axios = require("axios");
const _ = require("lodash");
const bodyParser = require("body-parser");

const http = require("http");
const express = require("express");
const { stdout } = require("process");
const request = require('request')
const url = require("url");

const querystring = require("querystring");

const app = express();

const port = process.env.PORT || 3000;

const user = process.env.USER_ID; // "239482"
const key = process.env.USER_KEY; // "foobar"

console.log("USER:", user);

require("child_process").exec("git rev-parse HEAD", function(err, stdout) {
    console.log("Last commit hash on this branch is:", stdout);
});

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log("This is what I typed in the query:", queryObject);

    console.log("This is what I typed in the query:", queryObject.name);

    const myNameCut = queryObject.name.replace(/([a-z])([A-Z])/g, "$1 $2");

    // now I need to cut the name between the two upper Case

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
        `Hello, ${myNameCut}`);

    if (req.method !== "GET") {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === "/helloworld") {
            res.end(`<h1>Hello Stranger !</h1>`);
        }
        if (req.url === "/helloUserInput") {
            res.end(`<h1>Hello ${user} !!</h1>`);
        }
        if (req.url === "/versionz") {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                userInput: user,
                hash: stdout
            }));
        }
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// is stdout the hash ? // name of the project is in the project.json file


// write a log file with winston logger

// https://developer.ibm.com/tutorials/learn-nodejs-winston/


// simple and fund testing with: https://mochajs.org/

// OR jest ...

//https://developer.okta.com/blog/2020/01/27/best-nodejs-testing-tools

// I couldn't push to git why?

// DOCKER: https://geshan.com.np/blog/2020/11/nodejs-with-docker/