import express from 'express';
import { Express } from 'express';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello Worlds'
            })
        });
        this.express.use('/', router);
    }
}

export default new App().express;