import * as Express from 'express';
import { Request, Response, Router } from 'express';

/**
 * A static class that produces an Express router for use in the application.
 * Any route-based business logic is contained here.
 */
export default class API {

    /**
     * Get a mountable router.
     * 
     * @returns a complete routing system to be mounted
     */
    public static setupRouter(): Router {        
        let router: Router = Express.Router();
        this.setRoutes(router);
        return router;
    }

    /**
     * Defines routes with respective handlers. 
     */
    private static setRoutes(router: Router): void {
        router.get('/', (req: Request, res: Response) => {
          res.send('Hello World!')
        });
    }
}
    