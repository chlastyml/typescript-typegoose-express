import express = require("express");
import { setRoute } from "./route";
import { logEnd, logStart } from "./express-logger";

const app = express();

// Logging
app.use((req, res, next) => {
    const hrStart = logStart(req, res);
    res.on('finish', function () { logEnd(req, res, hrStart) });
    next();
})

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nastaveni Route
setRoute(app);

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || 500;
    let errMsg: any = {
        status,
        message: 'Unkown error'
    }
    if (err instanceof Error) {
        errMsg = {
            ...errMsg,
            message: err.message,
            stack: err.stack
        }
    }
    res.status(status).json(errMsg);
})

export default app;