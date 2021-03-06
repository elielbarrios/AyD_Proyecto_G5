import {Response, Request, response} from 'express';
import db from '../conf/database';

class UserController
{

    async getUsers(req : Request, res : Response ) : Promise<void> //listar todos los usuarios
    {
        const retVal = await db.query('SELECT * FROM usuario', [req.body]); ///valor a retornar
        res.status(200).json(retVal);
    }

    async getUser(req : Request, res : Response) : Promise<void> //obtener la informacion de un usuario en especifico
    {
        const retVal = await db.query('SELECT * FROM usuario Where id_usuario=?',[req.params.id]);
        console.log(retVal);
        res.json(retVal[0]);
    }
    

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { email, password} = req.body;
        const query = await db.query('SELECT * FROM usuario WHERE email=? and password=?',[email,password]);
        console.log(query.rows);
         
        if(query.length == 1){
            console.log('Acceso correcto');
            res.status(200).json(query[0]);
        }else{
            console.log('Acceso denegado'); 
            res.status(404).json({Acceso: "Denegado"});
        }
    }


    //recuperacion
    async Recupera(req : Request, res : Response) : Promise<void>  
    {
        const { email, nit} = req.body;
        const query = await db.query('SELECT password FROM usuario WHERE email=? and nit=?',[email,nit]);
        if(query.length == 1){
            console.log('Recuperacion Correcta');
            res.status(200).json({estado: "1", password: query[0].password});
        }else{
            console.log('Usuario no existe'); 
            res.status(404).json({estado: "0", password: ""});
        }
    }

    //Edita
    async EditaPerfil(req : Request, res : Response) : Promise<void>  
    {
        const {id_usuario,nombre,apellido,email ,password,celular,nit,direccion} = req.body;
        const query = await db.query('UPDATE usuario SET nombre=?,apellido=?,email=?,password=?,celular=?,nit=?,direccion=?  WHERE id_usuario=?',[nombre,apellido,email,password,celular,nit,direccion,id_usuario]);
        var mesa ="Editado Exitoso"
        var est =1;
        if(query.affectedRows ===0){
            mesa = "Fallo Edicion"
            est =0
        }
        res.json({estado:est,mensaje:mesa});
    }
    //Eliminar Cuenta
    async Eliminar(req : Request, res : Response) : Promise<void>  
    {
        const {id_usuario} = req.body;
        const query1 = await db.query('DELETE FROM tarjeta WHERE fk_id_usuario=?',[id_usuario]);
        
        const query4 = await db.query('select count(id_orden) as numero from orden where fk_id_usuario =?',[id_usuario]);
        const query5 = await db.query('select id_orden from orden where fk_id_usuario =?',[id_usuario]); 
        var numero = query4[0].numero;
        for (let i = 0; i < numero; i++) {
            const query3 = await db.query('DELETE FROM orden_producto WHERE fk_id_orden =?',[query5[i].id_orden]); 
        }   
        const query2 = await db.query('DELETE FROM orden WHERE fk_id_usuario=?',[id_usuario]);
        const query = await db.query('DELETE FROM usuario WHERE id_usuario=?',[id_usuario]);
        var est =1;
        if(query.affectedRows ===0){
            est =0;
        }
        res.json({estado:est});
    }
}

export const usuarioController = new UserController();