var Request = require("request");

describe("Category resources", () => {
    var server;
    beforeAll(()=>{
        server =  require("../build/index");
    });

    afterAll(()=>{
        server.close();
    });

    it("GET /category", (done) => {
         //var data = {};
         Request.get("http://localhost:3000/api/categories", (error, response, body) => {
             /*data.status = response.statusCode;
             data.body = response.body;*/
             expect(response.statusCode).toBe(200);
             
             done();
         })
    });
});