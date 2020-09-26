import {Router} from 'express';
import {facturacionController} from '../controllers/facturacionController'


class FacturacionRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/facturacion/detalles', facturacionController.getMetodosDePago);
        this.router.post('/facturacion/detalles', facturacionController.addMetodoDePago); 
    }
}
const facturacionRoutes = new FacturacionRoutes();
export default facturacionRoutes.router;