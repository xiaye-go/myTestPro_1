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
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this._skin = SkinPath.loginSkin;
        return _this;
    }
    LoginView.prototype.initData = function () {
    };
    LoginView.prototype.initUi = function () {
        this.btnRun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRun, this);
    };
    LoginView.prototype.onClickRun = function () {
        var data = { "a": 1, "b": 2 };
        // this.applyFunc(LoginConst.CLOSE_LOGIN_VIEW, 1);
        App.ControllerManager.applyFunc(Emcontroller.Login, LoginConst.CLOSE_LOGIN_VIEW, 1);
        App.SceneManager.runScene(EmScene.MainUi);
    };
    return LoginView;
}(BaseEuiView));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map