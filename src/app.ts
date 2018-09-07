import express = require("express");
import { logEnd, logStart } from "./express-logger";
import { setRoute } from "./route";

const app = express();

// Logging
app.use((req, res, next) => {
    const hrStart = logStart(req, res);
    res.on('finish', () => logEnd(req, res, hrStart));
    next();
});

import bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nastaveni Route
setRoute(app);

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const status = err.status || 500;
    let errMsg: any = {
        message: 'Unkown error',
        status,
    };
    if (err instanceof Error) {
        errMsg = {
            ...errMsg,
            message: err.message,
            stack: err.stack,
        };
    }
    res.status(status).json(errMsg);
});

export default app;
