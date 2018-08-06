var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseController = (function () {
    function BaseController() {
        this._event = {};
    }
    BaseController.prototype.registerFunc = function (msg, func, target) {
        if (this._event[msg]) {
            console.error("Err: this event is exit!!!");
            return;
        }
        if (!func || !target) {
            console.error("Err: register event error !!!");
            return;
        }
        this._event[msg] = [func, target];
    };
    BaseController.prototype.applyFunc = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._event[msg]) {
            console.error("Err: this event is not exit!!!");
            return;
        }
        var event = this._event[msg];
        event[0].apply(event[1], args);
    };
    BaseController.prototype.setModel = function (model) {
        this.model = model;
    };
    BaseController.prototype.getModel = function () {
        return this.model;
    };
    return BaseController;
}());
__reflect(BaseController.prototype, "BaseController");
//# sourceMappingURL=BaseController.js.map