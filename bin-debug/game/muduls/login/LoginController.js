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
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        var _this = _super.call(this) || this;
        _this.registerFunc(LoginConst.OPEN_LOGIN_VIEW, _this.onOpenLoginView, _this);
        _this.registerFunc(LoginConst.CLOSE_LOGIN_VIEW, _this.onCloseLoginView, _this);
        return _this;
    }
    LoginController.prototype.onOpenLoginView = function () {
        if (!this.loginView) {
            this.loginView = new LoginView(this, LayerManager.Ui_Home);
            App.ViewManager.register(Emview.Login, this.loginView);
        }
        App.ViewManager.open(Emview.Login);
    };
    LoginController.prototype.onCloseLoginView = function (data) {
        App.ViewManager.close(Emview.Login);
        this.loginView = null;
    };
    return LoginController;
}(BaseController));
__reflect(LoginController.prototype, "LoginController");
//# sourceMappingURL=LoginController.js.map