import {Response, Request} from 'express';
import db from '../conf/database';

class ProductController
{

    async getProducts(req : Request, res : Response ) : Promise<void> //listar todos los productos
    {
        const retVal = await db.query('SELECT * FROM producto', [req.body]); ///valor a retornar
        res.json(retVal);
    }

    async getProduct(req : Request, res : Response) : Promise<void> //obtener la informacion de un producto en especifico
    {
        const retVal = await db.query('SELECT * FROM producto WHERE nombre = ?', [req.params.id]);//valor a retornar
        res.json(retVal);
    }
    
    async addProduct(req : Request, res : Response) : Promise<void> ///agregar un producto nuevo 
    {
        const retVal = await db.query('INSERT INTO producto set ?', [req.body])
        res.json(retVal);
    }

    async updateProduct(req : Request, res : Response) : Promise<void>///actualizar los datos de un producto en especifico
    {
        const retVal = await db.query('UPDATE producto SET ? WHERE id_producto = ?', [req.body, req.params.id] ); //valor a retornar
        res.status(200).json(retVal);
    }

    async deleteProduct(req : Request, res : Response) : Promise<void>//eliminar un producto  en especifico
    {
        const retVal = await db.query('DELETE FROM producto WHERE id_producto = ?', [req.params.id]); //valor a retornar
        res.status(200).json(retVal);
    }

    async deleteAllProducts(req : Request, res : Response) : Promise<void>//eliminar todos los productos
    {
        const retVal = await db.query('DELETE FROM producto'); //valor a retornar
        res.status(200).json(retVal);
    }
    async getProductAlfa(req : Request, res : Response ) : Promise<void> //listar todos los productos
    {
        const retVal = await db.query('SELECT * FROM producto order by nombre ASC', [req.body]); ///valor a retornar
        res.json(retVal);
    }
    async getProductPrecio(req : Request, res : Response ) : Promise<void> //listar todos los productos
    {
        const retVal = await db.query('SELECT * FROM producto ORDER BY precio ASC', [req.body]); ///valor a retornar
        res.json(retVal);
    }
    async getProductCategoria(req : Request, res : Response ) : Promise<void> //listar todos los productos
    {
        const retVal = await db.query('select p.descripcion,p.nombre,p.imagen,p.precio,c.nombre_categoria from detalle_producto_categoria d inner join producto p on (d.fk_id_producto = p.id_producto) inner join categoria c on (d.fk_id_categoria = c.id_categoria) order by c.nombre_categoria ASC;', [req.body]); ///valor a retornar
        res.json(retVal);
    }

    

}

export const productController = new ProductController();