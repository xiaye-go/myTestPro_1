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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scenes = {};
        _this._oldScene = null;
        return _this;
    }
    SceneManager.prototype.test = function () {
    };
    SceneManager.prototype.register = function (key, scene) {
        if (this._scenes[key]) {
            console.error("this scene is exit!!!");
        }
        this._scenes[key] = scene;
    };
    SceneManager.prototype.unRegister = function (key) {
        if (!this._scenes[key]) {
            console.error("this scene is not exit!!!");
        }
        this._scenes[key] = null;
        delete this._scenes[key];
    };
    SceneManager.prototype.runScene = function (key) {
        if (this._oldScene != null && this._scenes[this._oldScene]) {
            this.onExit(this._oldScene);
        }
        if (!this._scenes[key]) {
            console.error("this scene is not exit!!!");
            return;
        }
        this._scenes[key].onEnter();
        this._oldScene = key;
    };
    SceneManager.prototype.onExit = function (key) {
        //退出
        this._scenes[key].onExit();
    };
    return SceneManager;
}(BaseClass));
__reflect(SceneManager.prototype, "SceneManager");
var EmScene;
(function (EmScene) {
    EmScene[EmScene["Login"] = 0] = "Login";
    EmScene[EmScene["MainUi"] = 1] = "MainUi";
})(EmScene || (EmScene = {}));
//# sourceMappingURL=SceneManager.js.map