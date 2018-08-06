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
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this._views = {};
        return _this;
    }
    ViewManager.prototype.register = function (key, view) {
        if (this._views[key]) {
            console.error("Err: this view is exit!!!");
            return;
        }
        this._views[key] = view;
    };
    ViewManager.prototype.unRegister = function (key) {
        if (!this._views[key]) {
            console.error("Err: this view is not exit!!!");
            return;
        }
        this._views[key] = null;
        delete this._views[key];
    };
    ViewManager.prototype.open = function (key) {
        var view = this._views[key];
        if (!view) {
            console.error("Err: this view is not exit!!!");
            return;
        }
        view.addToParent();
        if (view.isInit()) {
            view.open();
            view.setVisible(true);
            return;
        }
        view.loadExml(function () {
            view.setVisible(false);
        }, function () {
            view.initData();
            view.initUi();
            view.setVisible(true);
            view.open();
        });
    };
    ViewManager.prototype.close = function (key) {
        var view = this._views[key];
        if (!view) {
            console.error("Err: this view is not exit!!!");
            return;
        }
        view.parent.removeChild(view);
        this.unRegister(key);
    };
    ViewManager.prototype.getTopView = function () {
    };
    ViewManager.prototype.setViewTop = function () {
    };
    return ViewManager;
}(BaseClass));
__reflect(ViewManager.prototype, "ViewManager");
var Emview;
(function (Emview) {
    Emview[Emview["Login"] = 0] = "Login";
})(Emview || (Emview = {}));
//# sourceMappingURL=ViewManager.js.map