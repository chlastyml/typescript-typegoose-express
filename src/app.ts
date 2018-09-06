import express = require("express");
import { setRoute } from "./route";
import { DB } from "./models/init";
const PORT = 6666;

const app = express();

app.set("port", PORT);

DB.connect("mongodb://localhost:6667/cook");

// Nastaveni Route
setRoute(app);

export default app;