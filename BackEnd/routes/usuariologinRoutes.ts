import {Router} from 'express';
import { usuarioController } from '../controllers/usuariologinController';


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
        this.router.get('/users',usuarioController.getUsers);
        this.router.get('/users/:id', usuarioController.getUser);
        this.router.post('/users/login/',usuarioController.Login);
        this.router.post('/recupera',usuarioController.Recupera);
        this.router.post('/editarperfil',usuarioController.EditaPerfil);
        this.router.post('/elimina',usuarioController.Eliminar);
    }
}
const userRoutes = new UsuarioRoutes();
export default userRoutes.router;