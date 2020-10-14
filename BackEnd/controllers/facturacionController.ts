import {Response, Request} from 'express';
import db from '../conf/database';

class FacturacionController
{

    async getMetodosDePago(req : Request, res : Response) : Promise<void> //obtener TARJETA
    {
        var userid = req.body.userid;
        const retVal = await db.query('SELECT * FROM tarjeta WHERE fk_id_usuario = ?', [userid]); ///valor a retornar
        res.json(retVal);
    }
    
    async addMetodoDePago(req : Request, res : Response) : Promise<void> //AGREGAR tarjera
    {
        const retVal = await db.query('INSERT INTO tarjeta set ?', [req.body])
        res.json(retVal);
    }

    async deleteMetodosDePago(req : Request, res : Response) : Promise<void> //Eliminar tarjeta
    {
        var userid = req.body.userid;
        var idtarj = req.body.idtarjeta;
        const retVal = await db.query('delete from tarjeta WHERE fk_id_usuario = ? AND id_tarjeta = ?', [userid,idtarj]); ///valor a retornar
        res.json(retVal);
    }
}

export const facturacionController = new FacturacionController();