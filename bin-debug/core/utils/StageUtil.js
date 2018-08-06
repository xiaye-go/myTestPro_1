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
var StageUtil = (function (_super) {
    __extends(StageUtil, _super);
    function StageUtil() {
        var _this = _super.call(this) || this;
        if (!StageUtil._uiStage) {
            StageUtil._uiStage = new eui.UILayer();
        }
        _this.getStage().addChild(StageUtil._uiStage);
        return _this;
    }
    StageUtil.prototype.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    StageUtil.prototype.getUiStage = function () {
        return StageUtil._uiStage;
    };
    return StageUtil;
}(BaseClass));
__reflect(StageUtil.prototype, "StageUtil");
//# sourceMappingURL=StageUtil.js.map