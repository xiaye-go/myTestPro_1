var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadingConst = (function () {
    function LoadingConst() {
    }
    LoadingConst.OPEN_LOADING_VIEW = 10000;
    LoadingConst.CLOSE_LOADING_VIEW = 10001;
    return LoadingConst;
}());
__reflect(LoadingConst.prototype, "LoadingConst");
//# sourceMappingURL=LoadingConst.js.map