var Request = require("request");

describe("Category resources", () => {
    var server;
    var newEntityID;
    var newEntity = {nombre_categoria:"Prueba", "root_id": 1};
    beforeAll(()=>
    {
        server =  require("../build/index");
    });

    afterAll(()=>
    {
        server.close();
    });

    it("GET /categories - statusCode", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3000/api/categories", (error, response, body) => {
             /*data.status = response.statusCode;
             data.body = response.body;*/
             expect(response.statusCode).toBe(200);
             
             done();
         })
    });

    it("GET /categories - content type", (done) => 
    {
        Request.get("http://localhost:3000/api/categories", (error, response, body) => {
            expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
            done();
        })
    });

    it("POST /categories - status code", (done) => 
    {
        Request.post("http://localhost:3000/api/categories", {form:newEntity} , (error, response, body) => {
            newEntityID = response.body.insertId;
            expect(response.statusCode).toBe(200);
            done();
        })

    });


    it("PUT /categories - especific object", (done) => 
    {
        Request.put("http://localhost:3000/api/categories", {form: {nombre_categoria:"PruebaEditted", "root_id": 1}} ,(error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        })

    });

    it("DELETE /categories/:id - especific object", (done) => 
    {
        Request.delete("http://localhost:3000/api/categories/"+newEntityID , (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        })

    });
});


describe("Product resources", () => {
    var server;
    var newEntityID;
    var newEntity = {descripcion: "NuevoProducto", nombre:"NombreProducto", imagen:"Path", precio: 22.50};
    beforeAll(()=>
    {
        server =  require("../build/index");
    });

    afterAll(()=>
    {
        server.close();
    });

    it("GET /products - statusCode", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3000/api/products", (error, response, body) => {
             expect(response.statusCode).toBe(200);
             
             done();
         })
    });

    it("GET /products - content type", (done) => 
    {
        Request.get("http://localhost:3000/api/products", (error, response, body) => {
            expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
            done();
        })
    });

    it("POST /products - status code", (done) => 
    {
        Request.post("http://localhost:3000/api/products", {form:newEntity} , (error, response, body) => {
            newEntityID = response.body.insertId;
            console.log("POST /products - status code -> "+newEntityID);
            expect(response.statusCode).toBe(200);
            done();
        })

    });


    it("PUT /products/:id - especific object", (done) => 
    {
        Request.put("http://localhost:3000/api/products/"+newEntityID, {form: {descripcion: "NuevoProductoEditted", nombre:"NombreProducto", imagen:"Path", precio: 22.50}} ,(error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        })

    });

    it("GET /products/:id - especific object", (done) => 
    {
        Request.get("http://localhost:3000/api/products/"+newEntityID, (error, response, body) => {
            expect(response.body).toBe([{descripcion: "NuevoProductoEditted", nombre:"NombreProducto", imagen:"Path", precio: 22.50}]);
            done();
        })
    });

    it("DELETE /products/:id - especific object", (done) => 
    {
        Request.delete("http://localhost:3000/api/products/"+newEntityID , (error, response, body) => {
            newEntityID = response.body.insertId;
            expect(response.statusCode).toBe(200);
            done();
        })

    });

});


