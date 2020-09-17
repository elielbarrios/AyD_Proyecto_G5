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
        
    }
    

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
       
    }

    async addUser(req : Request, res : Response) : Promise<void> ///agregar un nuevo usuario -> registro
    {
       
    }
    

}

export const usuarioController = new UserController();