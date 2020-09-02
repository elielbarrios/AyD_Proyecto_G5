import {Response, Request} from 'express';
import db from '../conf/database';

class ProductController
{

    async getProducts(res : Response, req : Request) : Promise<void> //listar todos los productos
    {
        const retVal = await db.query('SELECT * FROM Producto', [req.body]); ///valor a retornar
        res.json(retVal);
    }

    async getProduct(res : Response, req : Request) : Promise<void> //obtener la informacion de un producto en especifico
    {
        const retVal = await db.query('SELECT * FROM Producto WHERE id_producto = ?', [req.params.id]);//valor a retornar
        res.json(retVal);
    }
    
    async addProduct(res : Response, req : Request) : Promise<void> ///agregar un producto nuevo 
    {
        const retVal = await db.query('INSERT INTO Producto set ?', [req.body])
        res.json(retVal);
    }

    

}

export const productController = new ProductController();