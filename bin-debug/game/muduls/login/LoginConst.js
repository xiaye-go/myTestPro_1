var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoginConst = (function () {
    function LoginConst() {
    }
    LoginConst.OPEN_LOGIN_VIEW = 10000;
    LoginConst.CLOSE_LOGIN_VIEW = 10001;
    return LoginConst;
}());
__reflect(LoginConst.prototype, "LoginConst");
//# sourceMappingURL=LoginConst.js.map