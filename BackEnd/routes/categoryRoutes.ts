import {Router} from 'express';
import {categoryController} from '../controllers/categoryController'


class CategoryRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/categories',categoryController.getCategories);
    }
}
const categoriesRoutes = new CategoryRoutes();
export default categoriesRoutes.router;