import app from './app'

const server = app.listen(app.get("port"), () => {
    console.log(
        "App is running on http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    )

    call(app.get('port'), 100)
});

import http = require('http')
function call(PORT: any, time: number) {
    setTimeout(() => {
        http.get(`http://localhost:${PORT}`, res => {
            // resolve(_res)
        })
    }, time)
}

export default server