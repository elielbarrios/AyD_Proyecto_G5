import {Response, Request} from 'express';
import db from '../conf/database';

class CategoryController
{

    async getCategories(res : Response, req : Request) : Promise<void>
    {
        const retVal = await db.query('SELECT * FROM categoria');
        console.log(retVal);
        res.json(retVal);
    }

    
}

export const categoryController = new CategoryController();