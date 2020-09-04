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
        this.router.post('/products',productController.addProduct);
        this.router.delete('/products/:id',productController.deleteProduct);
        this.router.delete('/products',productController.deleteAllProducts);
        this.router.put('/updateproduct/:id',productController.updateProduct);
    }
}
const categoriesRoutes = new ProductRoutes();
export default categoriesRoutes.router;