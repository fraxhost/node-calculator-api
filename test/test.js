/** 
 * @author Ahmed Ryan <bsse1011@iit.du.ac.bd>
*/

const request = require("supertest");
const app = require("../index")

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    });
});

describe("GET /add/6/5", () => {
    it("Result: 11", (done) => {
        request(app).get("/add/6/5").expect("Result: 11", done);
    });
});

describe("GET /subtract/6/5", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/subtract/6/5").expect("Result: 1", done);
    });
});