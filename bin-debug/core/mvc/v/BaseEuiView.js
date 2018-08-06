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
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    function BaseEuiView(controller, parent) {
        var _this = _super.call(this) || this;
        _this._isInit = false;
        _this._skin = null;
        _this._loadPreFunc = null;
        _this._loadEndFunc = null;
        _this._loadCallBack = null;
        _this._loadCallBackTarget = null;
        _this._controller = controller;
        _this._parent = parent;
        return _this;
    }
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    BaseEuiView.prototype.isShow = function () {
        return this.visible;
    };
    BaseEuiView.prototype.setVisible = function (flag) {
        this.visible = flag;
    };
    BaseEuiView.prototype.initData = function () {
        this._isInit = true;
    };
    BaseEuiView.prototype.initUi = function () {
        //子类实现
    };
    BaseEuiView.prototype.open = function () {
        //子类实现
    };
    BaseEuiView.prototype.close = function () {
        //子类实现
    };
    BaseEuiView.prototype.setViewTop = function () {
        if (!this._parent) {
            console.error("Err: this view.s parent is not exit!!");
            return;
        }
        this._parent.setChildIndex(this, 999);
    };
    BaseEuiView.prototype.loadExml = function (loadPreFunc, loadEndFunc) {
        this._loadPreFunc = loadPreFunc;
        this._loadEndFunc = loadEndFunc;
        if (!this._skin) {
        }
        else {
            EXML.load(this._skin, this.loadExmlComplete, this, true);
        }
    };
    BaseEuiView.prototype.loadExmlComplete = function (clazz) {
        this.skinName = clazz;
        this._loadPreFunc();
        this._loadEndFunc();
        if (this._loadCallBack) {
            if (this._loadCallBackTarget) {
                this._loadCallBack.apply(this._loadCallBackTarget);
            }
            else {
                this._loadCallBack();
            }
        }
        this._loadCallBack = null;
        this._loadCallBackTarget = null;
    };
    BaseEuiView.prototype.setLoadCallBack = function (func, target) {
        this._loadCallBack = func;
        this._loadCallBackTarget = target;
    };
    BaseEuiView.prototype.addToParent = function () {
        this._parent.addChild(this);
    };
    BaseEuiView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        this._controller.applyFunc.apply(this._controller, arguments);
    };
    return BaseEuiView;
}(eui.Component));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseUi"]);
//# sourceMappingURL=BaseEuiView.js.map