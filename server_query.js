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

// this is my server set up

const server = http.createServer((req, res) => {
    // query part in a new file

    // query part add a new file for the query

    const queryObject = url.parse(req.url, true).query;
    // query object console.log("This is the query object:", queryObject);

    const myNameCut = queryObject.name
        .match(/([A-Z]?[^A-Z]*)/g) // match throws error put it in a function
        .slice(0, -1)
        .join(" ");

    console.log("This is what I typed in the query:", queryObject.name);
    // cut name

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`Hello, ${myNameCut}`);
    logger.info(`${myNameCut} logged in`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    logger.info(`Server started and running on http://localhost:${port}`);

});