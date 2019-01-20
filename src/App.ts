import express from 'express';
import { Express } from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = { hello: () => 'Hello Worlds!'}

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
        this.express.use('/graphql', graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true
        }));
    }
}

export default new App().express;