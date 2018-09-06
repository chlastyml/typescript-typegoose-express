import { ModelType } from "typegoose";

export abstract class Repository<T> {
    public Model: ModelType<T>;

    protected constructor(model: ModelType<T>) {
        this.Model = model;
    }

    public GetAll() {
        return this.Model.find().exec();
    }

    public GetByID(id: string) {
        return this.Model.findById(id).exec();
    }

    public Create(doc: T) {
        if(doc instanceof this.Model) console.log('true');
        else console.log('false');
        return this.Model.create(doc);
    }

    public RemoveByID(id: string) {
        return this.Model.findById(id).remove().exec();
    }

    // public Update(obj: T) {
    //     return obj.save();
    // }
}