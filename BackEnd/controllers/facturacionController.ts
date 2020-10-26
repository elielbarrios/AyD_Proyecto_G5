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
        var finalValue = 0;
        var date = currentDate.getDay()+"-"+currentDate.getMonth()+"-"+currentDate.getFullYear();
        for(var i = 0; i < products.length; i++)
        {
            finalValue+=(products[i].cantidad*products[i].precioUnitario);
        }
        var finalObj = {fk_id_usuario: clientId, monto:finalValue,estado: 0,fecha: currentDate, No_articulos: products.length, tipo_pago: 0 };
        const firstInsertion = await db.query('INSERT INTO orden set ?',[finalObj]);
        console.log(firstInsertion);
        for(var i = 0; i < products.length; i++)
        {
            var orderProduct = {fk_id_producto: products[i].producto, fk_id_orden: firstInsertion.insertId, total: (products[i].cantidad*products[i].precioUnitario), cantidad: (products[i].cantidad)};
            const insertion = await db.query('INSERT INTO orden_producto set ? ', [orderProduct]);
        }
        res.send({msg:'Orden creada correctamente'});
    }



    async Cambiarestado(req : Request, res : Response) : Promise<void> //cambio de estado
    {
        const { id_orden, estado} = req.body;
        const retVal = await db.query('UPDATE orden SET estado=? WHERE id_orden = ?', [estado, id_orden] ); //valor a retornar
        res.status(200).json(retVal);
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