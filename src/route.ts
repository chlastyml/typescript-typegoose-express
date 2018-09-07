import { Application } from "express";
import { UserRepository } from "./models/entities/user";

export function setRoute(app: Application): void {
    app.get('/', async (req, res, next) => {
        try {
            const user = await UserRepository.Create({
                name: req.query.name
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    });
}