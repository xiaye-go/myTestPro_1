var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SkinPath = (function () {
    function SkinPath() {
    }
    SkinPath.Root = "resource/";
    SkinPath.loginSkin = SkinPath.Root + "exmls/LoginSkin.exml";
    SkinPath.loadingSkin = SkinPath.Root + "exmls/LoadingSkin.exml";
    return SkinPath;
}());
__reflect(SkinPath.prototype, "SkinPath");
//# sourceMappingURL=SkinPath.js.map