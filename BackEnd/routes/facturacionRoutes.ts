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
        this.router.post('/facturacion/nuevaOrden', facturacionController.generarOrden);
        this.router.post('/facturacion/cambioestado', facturacionController.Cambiarestado);
    }
}
const facturacionRoutes = new FacturacionRoutes();
export default facturacionRoutes.router;