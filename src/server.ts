import app from './app';
import { config } from "./config/app";
import { DB } from "./models/init";

DB.connect(config.db);

const server = app.listen(config.port, () => {
    console.log(`App is running on http://localhost:${config.port} in ${app.get("env")} mode`);
});

export default server;
