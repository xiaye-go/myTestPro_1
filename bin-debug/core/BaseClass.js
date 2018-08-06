var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseClass = (function () {
    function BaseClass() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    BaseClass.getInstance = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            var len = args.length;
            if (len == 0) {
                Class._instance = new Class();
            }
            else if (len == 1) {
                Class._instance = new Class(args[0]);
            }
            else if (len == 2) {
                Class._instance = new Class(args[0], args[1]);
            }
            else if (len == 3) {
                Class._instance = new Class(args[0], args[1], args[2]);
            }
            else if (len == 4) {
                Class._instance = new Class(args[0], args[1], args[2], args[3]);
            }
            else if (len == 5) {
                Class._instance = new Class(args[0], args[1], args[2], args[3], args[4]);
            }
            return Class._instance;
        }
        else {
            return Class._instance;
        }
    };
    return BaseClass;
}());
__reflect(BaseClass.prototype, "BaseClass");
//# sourceMappingURL=BaseClass.js.map