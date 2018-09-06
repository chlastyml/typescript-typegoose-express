import { ModelType } from "typegoose";

export abstract class Repository<Input, Output> {
    public Model: ModelType<Output>;

    protected constructor(model: ModelType<Output>) {
        this.Model = model;
    }

    public GetAll() {
        return this.Model.find().exec()
    }

    public GetByID(id: string) {
        return this.Model.findById(id).exec()
    }

    public Create(doc: Input) {
        return this.Model.create(doc)
    }

    public RemoveByID(id: string) {
        return this.Model.remove({ _id: id }).exec()
    }
}