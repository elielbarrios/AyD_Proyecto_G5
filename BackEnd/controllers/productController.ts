import {Response, Request} from 'express';

class ProductController
{

    async getProducts(res : Response, req : Request) : Promise<void>
    {
        //mysql integration
    }
    
}

export const productController = new ProductController();