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
    next();
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Nastaveni Route
setRoute(app)

export default app