class BaseController {

    public model: BaseModel;
    private _event: any = {};



    public registerFunc(msg: any, func: Function, target) {
        if (this._event[msg]) {
            console.error("Err: this event is exit!!!");
            return;
        }
        if (!func || !target) {
            console.error("Err: register event error !!!");
            return;
        }

        this._event[msg] = [func, target];
    }

    public applyFunc(msg: any, ...args: any[]) {
        if (!this._event[msg]) {
            console.error("Err: this event is not exit!!!");
            return;
        }

        let event = this._event[msg];
        event[0].apply(event[1], args);
    }

    public setModel(model: BaseModel) {
        this.model = model;
    }

    public getModel() {
        return this.model;
    }

}