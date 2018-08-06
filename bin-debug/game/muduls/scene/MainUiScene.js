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
var MainUiScene = (function (_super) {
    __extends(MainUiScene, _super);
    function MainUiScene() {
        return _super.call(this) || this;
    }
    MainUiScene.prototype.onEnter = function () {
        this.addLayer(EmLayer.Ui_Home, LayerManager.Ui_Home);
        this.addLayer(EmLayer.Ui_MainUi, LayerManager.Ui_MainUi);
        this.addLayer(EmLayer.Ui_Pop, LayerManager.Ui_Pop);
        this.addLayer(EmLayer.Ui_Tip, LayerManager.Ui_Tip);
    };
    MainUiScene.prototype.onExit = function () {
        this.removeAllLayer();
    };
    return MainUiScene;
}(BaseScene));
__reflect(MainUiScene.prototype, "MainUiScene");
//# sourceMappingURL=MainUiScene.js.map