import { Application } from "express";

export function setRoute(app: Application): void {
    app.get('/', (_req, res) => {
        res.send("Nazdar")
    });
}