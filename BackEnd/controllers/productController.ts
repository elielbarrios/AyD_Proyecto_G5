import {Response, Request} from 'express';

class ProductController
{

    async getProducts(res : Response, req : Request) : Promise<void>
    {
        //investigar sobre la integracion con mysql
    }
    
}

export const productController = new ProductController();