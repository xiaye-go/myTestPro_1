class ControllerManager extends BaseClass {

    public constructor() {
        super();
    }

    private _muduls: any = {};

    public register(key: Emcontroller, controler: BaseController) {
        if (this._isExit(key)) {
            console.error("Err: this controller is exit!!!");
            return;
        }
        if (!controler) {
            console.error("Err :this controller is cannot undifined!!!");
            return;
        }
        this._muduls[key] = controler;
    }

    private _isExit(key: Emcontroller) {
        return this._muduls[key] != null;
    }

    public unRegister(key: Emcontroller) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        this._muduls[key] = null;
        delete this._muduls[key];
    }

    public applyFunc(key: Emcontroller, msg, ...param: any[]) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        let newArr: Array<any> = [];
        newArr[0] = msg;
        for (let i = 0; i < param.length; i++) {
            newArr[i + 1] = param[i];
        }
        let modul: BaseController = this._muduls[key];
        modul.applyFunc.apply(modul, newArr);
    }

    public getController(key: Emcontroller) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        return this._muduls[key];
    }

    public getControllerModel(key: Emcontroller) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        return this._muduls[key].getModel();
    }


}

enum Emcontroller {
    Login,
    Loading
}