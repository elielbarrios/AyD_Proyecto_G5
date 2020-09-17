import {Response, Request} from 'express';
import db from '../conf/database';

class UserRegController
{

    async addUser(req : Request, res : Response) : Promise<void> ///agregar un nuevo usuario -> registro
    {
        const retVal = await db.query('INSERT INTO usuario set ?', [req.body])
        res.json(retVal);
    }
    
}

export const usuarioRegController = new UserRegController();