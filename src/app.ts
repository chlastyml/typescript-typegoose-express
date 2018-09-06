import express = require("express")
import { setRoute } from "./route"
import { DB } from "./models/init"
import { logEnd, logStart } from "./express-logger";
const PORT = 6666

const app = express()

app.set("port", PORT)

DB.connect("mongodb://localhost:6667/cook")

// Logging
app.use((req, res, next) => {
    const hrStart = logStart(req, res)
    res.on('finish', function () { logEnd(req, res, hrStart) })
    next()
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Nastaveni Route
setRoute(app)

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const status = err.status || 500
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
    res.status(status).json(errMsg)
})

// const HTTP_SERVER_ERROR = 500;
// app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
//     console.log('res.headersSent: ', res.headersSent)
//     if (res.headersSent) {
//         return next(err);
//     }

//     return res.status(err.status || HTTP_SERVER_ERROR).render('500');
// });

export default app