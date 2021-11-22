// install mocha
const server = require("../server");

describe("server", function() {
    before(function() {
        server.listen(3000);
    });

    after(function() {
        server.close();
    });
});

const assert = require("assert");
const http = require("http");

describe("/helloworld", function() {
    it("should return 200", function(done) {
        http.get("http://localhost:3000/helloworld", function(res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "Hello Stranger !"', function(done) {
        http.get("http://localhost:3000/helloworld", function(res) {
            var data = "";

            res.on("data", function(chunk) {
                data += chunk;
            });

            res.on("end", function() {
                assert.equal("Hello Stranger !\n", data);
                done();
            });
        });
    });
});