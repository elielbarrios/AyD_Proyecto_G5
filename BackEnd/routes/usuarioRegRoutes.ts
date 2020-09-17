import {Router} from 'express';
import { usuarioRegController } from '../controllers/usuarioRegController';


class UsuarioRegRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.post('/newuser',usuarioRegController.addUser);
    }
}
const userRegRoutes = new UsuarioRegRoutes();
export default userRegRoutes.router;