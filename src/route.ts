import { Application } from "express";
import { UserRepository } from "./models/entities/user";

export function setRoute(app: Application): void {
    app.get('/', async (req, res) => {
        // throw new Error('Nejaka chyba')
        const user = await UserRepository.Create({
            name: req.query.name
        })
        res.status(200).json(user)
        // const users = await UserRepository.GetAll()
        // for (let i = 0; i < users.length; i++) {
        //     const user = users[i]
        //     user.name = 'NOOO'
        //     await user.save()
        // }
    });
}