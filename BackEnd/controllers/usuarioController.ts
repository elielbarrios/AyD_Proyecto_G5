import {Response, Request} from 'express';
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
        const {email} = req.body;
        const query = await db.query('SELECT * FROM usuario Where email=:email',[email]);
        console.log(query.rows);
    }
    

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { email, password} = req.body;
        const query = await db.query('SELECT * FROM usuario WHERE email=:email and password=:password',[email,password]);
        console.log(query.rows);
         
        if(query.rows?.length == 1){
            console.log('Acceso correcto');
            res.status(200).json(query.rows);
        }else{
            console.log('Acceso denegado'); 
            res.status(404).json({Acceso: "Denegado"});
        }
    }

    async addUser(req : Request, res : Response) : Promise<void> ///agregar un nuevo usuario -> registro 
    {
        const retVal = await db.query('INSERT INTO usuario set ?', [req.body])
        res.json(retVal);
    }
    

}

export const usuarioController = new UserController();