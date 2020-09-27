import {Response, Request} from 'express';
import db from '../conf/database';

class FacturacionController
{

    async getMetodosDePago(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        var userid = req.body.userid;
        const retVal = await db.query('SELECT * FROM Tarjeta WHERE fk_id_usuario = ?', [userid]); ///valor a retornar
        res.json(retVal);
    }
    
    async addMetodoDePago(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        const retVal = await db.query('INSERT INTO Tarjeta set ?', [req.body])
        res.json(retVal);
    }
}

export const facturacionController = new FacturacionController();