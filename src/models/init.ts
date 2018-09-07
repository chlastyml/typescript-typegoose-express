import fs = require("fs");
import mongoose = require('mongoose');
import path = require("path");
const normalizedPath = path.join(__dirname, "entities");

// Load all files from entities directory
fs.readdirSync(normalizedPath).forEach((file: string) => {
    // console.log('file: ', file);
    require("./entities/" + file);
});

export class DB {
    public static connect(db: string) {
        mongoose.connect(db, { useNewUrlParser: true }).then((_) => {
            console.log(`Connection to DB(${db}) succesful !`);
        }).catch((err) => {
            console.error(err);
            process.exit();
        });
    }
}
