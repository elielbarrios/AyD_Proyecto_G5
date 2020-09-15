import {Router} from 'express';
//import {usuarioController} from '../controllers/usuarioController'


class UsuarioRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        /*this.router.get('/users',usuarioController.getUsers);
        this.router.get('/user/:id', usuacrioController.getUser);
        this.router.post('/newuser',usuarioController.addUser);*/
    }
}
const userRoutes = new UsuarioRoutes();
export default userRoutes.router;