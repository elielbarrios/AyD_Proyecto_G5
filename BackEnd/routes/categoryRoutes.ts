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
        this.router.post('/categories',categoryController.createCategory);
        this.router.get('/categories',categoryController.getCategories);
        this.router.put('/categories',categoryController.updateCategory);
        this.router.delete('/categories/:id',categoryController.deleteCategory);
    }
}
const categoriesRoutes = new CategoryRoutes();
export default categoriesRoutes.router;