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

    async generarOrden(req : Request, res : Response) : Promise<void>
    {
        var clientId = req.body.clientId;
        var products = req.body.products;
        var currentDate = new Date();
        //STR_TO_DATE('1-01-2012', '%d-%m-%Y') 
        var finalValue
    }



    async Cambiarestado(req : Request, res : Response) : Promise<void> //cambio de estado
    {
        const { id_orden, estado} = req.body;
        const retVal = await db.query('UPDATE orden SET estado=? WHERE id_orden = ?', [estado, id_orden] ); //valor a retornar
        if(retVal.affectedRows ==0){
            res.status(400).json({cambio: "0"});
        }else{
            res.status(200).json({cambio: "1"});
        }
   
    }
    /*
    {
		productId: idNumerico,
		Productos : [
			{
				producto: IdProducto,
				cantidad: CantidadSeleccionada
				precioUnitario: precio
			}

		]
	}*/
}

export const facturacionController = new FacturacionController();