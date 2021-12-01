// add all the libraries by require
const axios = require("axios");
const _ = require("lodash");
const bodyParser = require("body-parser");

const http = require("http");
const express = require("express");
const { stdout } = require("process");
const request = require("request");
const url = require("url");

const querystring = require("querystring");

const app = express();

// add log
const logger = require("./utils/logger");

const port = process.env.PORT || 3000;

const user = process.env.USER_ID; // "239482"
const key = process.env.USER_KEY; // "foobar"

console.log("USER:", user);

console.log("process:", process.env.PWD);

// how do I get the package.json object?

// supposed to be the git hash
require("child_process").exec("git rev-parse HEAD", function(err, stdout) {
    console.log("Last commit hash on this branch is:", stdout);
});

// this is my server set up

const server = http.createServer((req, res) => {
    // query part in a new file

    if (req.method !== "GET") {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        logger.error(
            `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
        );
    } else {
        if (req.url === "/helloworld") {
            res.end("Hello Stranger !");
            logger.info(
                "Server Sent A Hello Stranger!",
                `${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
            );
        }
        if (req.url === "/helloUserInput") {
            res.end(`<h1>Hello ${user} !!</h1>`);
        }
        if (req.url === "/versionz") {
            res.setHeader("Content-Type", "application/json");
            res.end(
                JSON.stringify({
                    projectName: "My tech challenge",
                    hash: stdout
                })
            );
            logger.info("JSON File with projectName and hash object was created");
        }
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    logger.info(`Server started and running on http://localhost:${port}`);

});

// is stdout the hash ? // name of the project is in the project.json file

// write a log file with winston logger

// https://developer.ibm.com/tutorials/learn-nodejs-winston/

// simple and fund testing with: https://mochajs.org/

// OR jest ...

//https://developer.okta.com/blog/2020/01/27/best-nodejs-testing-tools

// I couldn't push to git why?

// DOCKER: https://geshan.com.np/blog/2020/11/nodejs-with-docker/