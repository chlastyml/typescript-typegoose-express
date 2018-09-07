import { prop, Typegoose } from 'typegoose';
import { Repository } from "../repository";

interface IUser {
    name: string;
}

class User extends Typegoose implements IUser {
    @prop({ required: true })
    name: string = "no name";
}

class UserRepositoryClass extends Repository<IUser, User> {
    constructor() {
        super(new User().getModelForClass(User));
    }
}

export const UserRepository = new UserRepositoryClass();
export default UserRepository;
