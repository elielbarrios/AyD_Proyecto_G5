import express, {Application} from 'express';
import productRoutes from './routes/productRoutes';


class Server
{
    public app : Application;
    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void
    {
        this.app.set('port', 3000);
        //this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    routes() : void
    {
        this.app.use('/api/',productRoutes);
        
    }

    listen() : void
    {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server listening on port "+this.app.get('port'));
        })
    }
}

const serverInstance = new Server();
serverInstance.listen();