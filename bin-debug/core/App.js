var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "SceneManager", {
        get: function () {
            return SceneManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtil", {
        get: function () {
            return StageUtil.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ControllerManager", {
        get: function () {
            return ControllerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        get: function () {
            return ResourceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        get: function () {
            return ViewManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map