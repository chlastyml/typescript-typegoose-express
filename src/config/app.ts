import parser = require('../helpers/convertor')
export const config = {
    db: parser.parseString('DB', "mongodb://localhost:6667/cook"),
    port: parser.parseInt('PORT', 6666),
}

export default config;