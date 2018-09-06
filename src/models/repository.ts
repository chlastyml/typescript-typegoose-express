import { ModelType } from "typegoose";

export abstract class Repository<Input, Output> {
    public Model: ModelType<Output>;

    protected constructor(model: ModelType<Output>) {
        this.Model = model;
    }

    public GetAll() {
        return this.Model.find().exec();
    }

    public GetByID(id: string) {
        return this.Model.findById(id).exec();
    }

    public Create(doc: Input) {
        if (doc instanceof this.Model) console.log('true');
        else console.log('false');
        return this.Model.create(doc);
    }

    public RemoveByID(id: string) {
        return this.Model.remove({ _id: id }).exec()
        // return this.Model.findById(id).remove().exec();
    }

    // public Update(obj: T) {
    //     return obj.save();
    // }
}