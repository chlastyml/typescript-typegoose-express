import { Request, Response, NextFunction } from "express";
import moment = require('moment')

const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const Reset = "\x1b[0m"

// const Bright = "\x1b[1m"
// const Dim = "\x1b[2m"
// const Underscore = "\x1b[4m"
// const Blink = "\x1b[5m"
// const Reverse = "\x1b[7m"
// const Hidden = "\x1b[8m"

// const FgBlack = "\x1b[30m"
// const FgBlue = "\x1b[34m"
// const FgMagenta = "\x1b[35m"
// const FgCyan = "\x1b[36m"
// const FgWhite = "\x1b[37m"

// const BgBlack = "\x1b[40m"
// const BgRed = "\x1b[41m"
// const BgGreen = "\x1b[42m"
// const BgYellow = "\x1b[43m"
// const BgBlue = "\x1b[44m"
// const BgMagenta = "\x1b[45m"
// const BgCyan = "\x1b[46m"
// const BgWhite = "\x1b[47m"

export let requestCounter = 0
export function clearCount() { requestCounter = 0 }

export function logStart(_req: Request, _res: Response) {
    requestCounter++
    // console.log(`${reverse('▼▼▼▼▼')} ${req.method} ${moment().format('HH:mm:ss')} ${req.url}`)
    return process.hrtime()
}
export function logEnd(req: Request, res: Response, hrStart: [number, number]) {
    const measure = hrTimeToString(hrStart).padStart(6);
    console.log(`${reverse('▲▲▲▲▲')} ${moment().format('HH:mm:ss')} ${colorStatusCode(res.statusCode)} ${req.method} ${measure} ${req.url}`)
}

const reverse = (text: string) => { return `\x1b[47m\x1b[30m${text}\x1b[0m` }
const hrTimeToString = (hrStart: [number, number]) => {
    const hr = process.hrtime(hrStart)
    const s = hr[0] * 1000;
    const ms = Math.round(hr[1] / 1000000);
    return `${s + ms}ms`
}
const between = (value: number, bottom: number, top: number) => { return bottom <= value && value < top }
const colorStatusCode = (status: number): string => {
    if (between(status, 200, 300)) return `${FgGreen}${status}${Reset}`
    if (between(status, 300, 400)) return `${FgYellow}${status}${Reset}`
    if (between(status, 400, 600)) return `${FgRed}${status}${Reset}`
    return status.toString();
}
