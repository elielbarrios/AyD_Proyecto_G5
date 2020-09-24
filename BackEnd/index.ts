import express, {Application} from 'express';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import userRoutes from './routes/usuariologinRoutes';
import cors from 'cors';

class Server
{
    public app : Application;
    public abstractServer : any; //Utilizada para poder apagar el servidor desde afterAll (jasmine unit testing)
    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void
    {
        this.app.set('port', 3000);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    routes() : void
    {
        this.app.use('/api/',productRoutes);
        this.app.use('/api/',categoryRoutes);
        this.app.use('/api/',userRoutes);
    }

    listen() : void
    {
        this.abstractServer = this.app.listen(this.app.get('port'), () => {
            console.log("Server listening on port "+this.app.get('port'));
        })
    }

    close() : void
    {
        this.abstractServer.close();
    }
}

const serverInstance = new Server();
serverInstance.listen();

module.exports = serverInstance;///jasmine unit testing required