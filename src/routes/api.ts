import * as express from 'express';

export default class API {
    router;

    static setupRouter() {        
        let router = express.Router();
        this.setRoutes(router);
        return router;
    }
    private static setRoutes(router) {
        router.get('/', (req, res) => {
          res.send('Hello World!')
        });
    }
}
    