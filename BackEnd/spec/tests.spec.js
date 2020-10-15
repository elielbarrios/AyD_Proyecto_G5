var Request = require("request");

describe("Pruebas unitarias", () => {
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
    var newEntity3 = {nombre:"PruebaNombre", apellido: "PruebaApellido", email:"prueba@email.com", password:"655e786674d9d3e77bc05ed1de37b4b6bc89f788829f9f3c679e7687b410c89b"};
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

    it("POST /newuser - status code", (done) => 
    {
        Request.post("http://localhost:3000/api/newuser", {form:newEntity3} , (error, response, body) => {
            newEntityID3 = JSON.parse(response.body).insertId;
            
            console.log(JSON.parse(response.body));
            console.log('NewEntityID -->>'+newEntityID3);
            console.log("POST /newuser - status code -> "+newEntityID3);
            expect(response.statusCode).toBe(200);
            done();
        })

    });
    
    it("GET /user/:id - especific object", (done) => 
    {   
        console.log(newEntityID3);
        Request.get("http://localhost:3000/api/users/"+newEntityID3, (error, response, body) => {
            expect(response.body).toBe([{nombre_usuario:"NombreUsuario", password_usuario:"0000"}]);
            done();
        })
    });



    ///Inicio facturacion
    describe("GIVEN: El usuario entra a sus detalles de facturacion", () => { 
        var userid = 1;

        describe("WHEN: Da click en visualizar detalles guardados", ()=>{

            it("THEN: Retorna un status code 200 con sus detalles guardados", (done)=>{
                Request.get("http://localhost:3000/api/facturacion/detalles", (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    
    });

    describe("GIVEN: El usuario entra a sus detalles de facturacion", () => { 
        var userid = 1;

        describe("WHEN: Da click en guardar nuevo metodo de pago", ()=>{
            var metodoDePago = {fk_id_usuario: userid, fecha: '2020/08', cvv: 334};
            it("THEN: Retorna un arreglo con todos sus metodos de pago guardados", (done)=>{
                Request.post("http://localhost:3000/api/facturacion/detalles", {form: metodoDePago}, (error, response, body) => {
                    expect(response.body.length).toBeGreaterThan(0);
                    done();
                })
            });

        });
    
    });


    // Recuperacion de contraseña
    describe("GIVEN: El usuario quiere recuperar  contraseña", () => { 

        describe("WHEN: accede en recuperar contraseña", ()=>{
            var recuperar = {email: 'prueba@gmail.com', nit: '123456-7'};
            var estado;
            var pass;
            it("THEN: Retorna la contraseña del ususario", (done)=>{
   
                Request.post("http://localhost:3000/api/recupera", {form:recuperar} , (error, response, body) => {
                    estado = JSON.parse(response.body).estado;
                    pass = JSON.parse(response.body).password;      
                   if(estado === 1){
                    expect(pass).not.toBe("");
                    done();
                   }else{
                    expect(pass).toBe("");
                    done();
                   }

                })


            });

        });
    
    });



     // Personalizacion
     describe("GIVEN: El usuario quiere editar su cuenta", () => { 

        describe("WHEN: envia sus nuevos valores", ()=>{
            var enviar = {id_usuario:'1',nombre: 'Alvin', apellido: 'Espino',email : 'alvine@gmail.com',password:'54321',celular:'88877700',nit:'1235-5',direccion:'usac ingenieria'};
            var estado;
            var verifi;
            it("THEN: Retorna un mensaje de verificacion", (done)=>{
   
                Request.post("http://localhost:3000/api/editarperfil", {form:enviar} , (error, response, body) => {
                    estado = JSON.parse(response.body).estado;
                    verifi= JSON.parse(response.body).mensaje;
                   if(estado === 1){
                    expect(verifi).toBe("Editado Exitoso");
                    done();
                   }else{
                    expect(verifi).toBe("Fallo Edicion");
                    done();
                   }
                   

                })


            });

        });
    
    });


    
});



