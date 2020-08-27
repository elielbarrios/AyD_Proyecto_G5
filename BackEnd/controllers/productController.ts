import {Response, Request} from 'express';
import db from '../conf/database';

class ProductController
{

    async getProducts(res : Response, req : Request) : Promise<void>
    {
        const retVal = await db.query('SELECT * FROM Producto', [req.body]);
        console.log(retVal);
        res.json(retVal);
    }

    async getProduct(res : Response, req : Request) : Promise<void>
    {
        const retVal = await db.query('SELECT * FROM Producto WHERE id_producto = ?', [req.params.id]);
        res.json(retVal);
    }
    
}

export const productController = new ProductController();