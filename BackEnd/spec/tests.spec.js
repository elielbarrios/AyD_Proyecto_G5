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

    //Productos
    var server2;
    var newEntityID2;
    var newEntity2 = {descripcion: "NuevoProducto", nombre:"NombreProducto", imagen:"Path", precio: 22.50};
    beforeAll(()=>
    {
        server2 =  require("../build/index");
    });

    afterAll(()=>
    {
        server2.close();
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
        Request.post("http://localhost:3000/api/products", {form:newEntity2} , (error, response, body) => {
            newEntityID2 = response.body.insertId;
            console.log("POST /products - status code -> "+newEntityID2);
            expect(response.statusCode).toBe(200);
            done();
        })

    });


    /*it("GET /products/:id - especific object", (done) => 
    {
        Request.get("http://localhost:3000/api/products/"+newEntityID2, (error, response, body) => {
            expect(response.body).toBe([newEntity2]);
            done();
        })
    });*/
    
    it("PUT /products/:id - especific object", (done) => 
    {
        Request.put("http://localhost:3000/api/products/"+newEntityID2, {form: {descripcion: "NuevoProductoEditted", nombre:"NombreProducto", imagen:"Path", precio: 22.50}} ,(error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        })

    });

    it("DELETE /products/:id - especific object", (done) => 
    {
        Request.delete("http://localhost:3000/api/products/"+newEntityID2 , (error, response, body) => {
            newEntityID2 = response.body.insertId;
            expect(response.statusCode).toBe(200);
            done();
        })

    });




    //Usuarios

    var server3;
    var newEntityID3;
    var newEntity3 = {nombre_usuario:"Prueba", password_usuario: "1234"};
    beforeAll(()=>
    {
        server3 =  require("../build/index");
    });

    afterAll(()=>
    {
        server3.close();
    });

    it("GET /users - statusCode", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3000/api/users", (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         })
    });
    
    it("GET /users - content type", (done) => 
    {
        Request.get("http://localhost:3000/api/users", (error, response, body) => {
            expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
            done();
        })
    });

    it("GET /user/:id - especific object", (done) => 
    {
        Request.get("http://localhost:3000/api/user/"+newEntityID3, (error, response, body) => {
            expect(response.body).toBe([{nombre_usuario:"NombreUsuario", password_usuario:"0000"}]);
            done();
        })
    });

    it("POST /newuser - status code", (done) => 
    {
        Request.post("http://localhost:3000/api/newuser", {form:newEntity3} , (error, response, body) => {
            newEntityID3 = response.body.insertId3;
            console.log("POST /newuser - status code -> "+newEntityID3);
            expect(response.statusCode).toBe(200);
            done();
        })

    });

});



