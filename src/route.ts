import { Application } from "express";

export function setRoute(app: Application): void {
    app.get('/', async (_req, res) => {
        res.status(200).json('OK')
    });
}