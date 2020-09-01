import {Response, Request} from 'express';
import db from '../conf/database';

class CategoryController
{

    async getCategories(res : Response, req : Request) : Promise<void> //obtener todas las Categorias
    {
        const retVal = await db.query('SELECT * FROM categoria'); //valor a retornar
        console.log(retVal);
        res.json(retVal);
    }

    async createCategory(res : Response, req : Request) : Promise<void> //creacion de una nueva categoria
    {
        const retVal =  await db.query('INSERT INTO category set ?', [req.body]); //valor a retornar
        res.json(retVal);
    }

    async updateCategory(res : Response, req : Request) : Promise<void>///actualizar una categoria en especifico
    {
        
        const retVal = await db.query('UPDATE categoria SET nombre_categoria = ? WHERE id_categoria = ?', [req.body.nombre_categoria, req.body.id_categoria] ); //valor a retornar
        res.json(retVal);
    }

    async deleteCategory(res : Response, req : Request) : Promise<void>//eliminar una categoria en especifico
    {
        const retVal = await db.query('DELETE FROM categoria WHERE id_categoria = ?', [req.params.id]); //valor a retornar
        res.json(retVal);
    }
    
}

export const categoryController = new CategoryController();