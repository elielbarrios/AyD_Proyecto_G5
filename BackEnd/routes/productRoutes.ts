import {Router} from 'express';
import {productController} from '../controllers/productController'


class ProductRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/products',productController.getProducts);
        this.router.get('/products/:id', productController.getProduct);
    }
}
const categoriesRoutes = new ProductRoutes();
export default categoriesRoutes.router;