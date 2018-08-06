var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ControllerManager = (function (_super) {
    __extends(ControllerManager, _super);
    function ControllerManager() {
        var _this = _super.call(this) || this;
        _this._muduls = {};
        return _this;
    }
    ControllerManager.prototype.register = function (key, controler) {
        if (this._isExit(key)) {
            console.error("Err: this controller is exit!!!");
            return;
        }
        if (!controler) {
            console.error("Err :this controller is cannot undifined!!!");
            return;
        }
        this._muduls[key] = controler;
    };
    ControllerManager.prototype._isExit = function (key) {
        return this._muduls[key] != null;
    };
    ControllerManager.prototype.unRegister = function (key) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        this._muduls[key] = null;
        delete this._muduls[key];
    };
    ControllerManager.prototype.applyFunc = function (key, msg) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        var newArr = [];
        newArr[0] = msg;
        for (var i = 0; i < param.length; i++) {
            newArr[i + 1] = param[i];
        }
        var modul = this._muduls[key];
        modul.applyFunc.apply(modul, newArr);
    };
    ControllerManager.prototype.getController = function (key) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        return this._muduls[key];
    };
    ControllerManager.prototype.getControllerModel = function (key) {
        if (!this._isExit(key)) {
            console.error("Err: this controller is not exit!!!");
            return;
        }
        return this._muduls[key].getModel();
    };
    return ControllerManager;
}(BaseClass));
__reflect(ControllerManager.prototype, "ControllerManager");
var Emcontroller;
(function (Emcontroller) {
    Emcontroller[Emcontroller["Login"] = 0] = "Login";
    Emcontroller[Emcontroller["Loading"] = 1] = "Loading";
})(Emcontroller || (Emcontroller = {}));
//# sourceMappingURL=ControllerManager.js.map