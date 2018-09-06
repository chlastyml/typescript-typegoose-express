import { prop, Typegoose } from 'typegoose';
import { Repository } from "../repository";

export class User extends Typegoose {
    @prop({ required: true })
    name?: string;
}

class UserRepository extends Repository<User>{
    constructor() {
        super(new User().getModelForClass(User));
    }
}

export const UserRepositoryInstace = new UserRepository();