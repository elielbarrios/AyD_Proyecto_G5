import {Response, Request} from 'express';
import db from '../conf/database';

class FacturacionController
{

    async getMetodosDePago(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        
    }
    
    async addMetodoDePago(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        
    }

    

}

export const facturacionController = new FacturacionController();