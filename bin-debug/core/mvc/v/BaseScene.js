var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseScene = (function () {
    function BaseScene() {
        this._layers = {};
    }
    BaseScene.prototype.onExit = function () {
        //子类继承 
    };
    BaseScene.prototype.onEnter = function () {
        //子类继承
    };
    BaseScene.prototype.addLayer = function (key, layer) {
        if (this._layers[key]) {
            console.error("Err: this layer is exit!!!");
            return;
        }
        App.StageUtil.getUiStage().addChild(layer);
        this._layers[key] = layer;
    };
    BaseScene.prototype.removeLayer = function (key) {
        if (!this._layers[key]) {
            console.error("Err: this layer is not exit!!!");
            return;
        }
    };
    BaseScene.prototype.removeAllLayer = function () {
        for (var i in this._layers) {
            var layer = this._layers[i];
            if (layer && layer.parent) {
                layer.parent.removeChild(layer);
            }
        }
    };
    return BaseScene;
}());
__reflect(BaseScene.prototype, "BaseScene");
var EmLayer;
(function (EmLayer) {
    EmLayer[EmLayer["Ui_Home"] = 0] = "Ui_Home";
    EmLayer[EmLayer["Ui_MainUi"] = 1] = "Ui_MainUi";
    EmLayer[EmLayer["Ui_Pop"] = 2] = "Ui_Pop";
    EmLayer[EmLayer["Ui_Tip"] = 3] = "Ui_Tip";
})(EmLayer || (EmLayer = {}));
//# sourceMappingURL=BaseScene.js.map