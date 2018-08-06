//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.onPause = function () {
            console.error("进入后台");
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            console.error("进入前台");
            egret.ticker.resume();
        };
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.initScene();
        this.initModuls();
        this.loadBaseConfig();
    };
    Main.prototype.initScene = function () {
        App.SceneManager.register(EmScene.Login, new LoginScene());
        App.SceneManager.register(EmScene.MainUi, new MainUiScene());
    };
    Main.prototype.loadBaseConfig = function () {
        var configArr = ["resource/preMapped/preMapped.json", "resource/default.res.json"];
        var rootPath1 = "resource/preMapped/";
        var rootPath2 = "resource/";
        App.ResourceUtils.addConfig(configArr[0], rootPath1);
        App.ResourceUtils.addConfig(configArr[1], rootPath2);
        App.ResourceUtils.loadConfig(this.loadConfigComplet, this);
    };
    Main.prototype.loadConfigComplet = function () {
        var config = "resource/default.thm.json";
        var rootPath = "resource/";
        var thme = new eui.Theme(config, this.stage);
        thme.addEventListener(eui.UIEvent.COMPLETE, this.onLoadThmeComplet, this);
    };
    Main.prototype.onLoadThmeComplet = function () {
        App.SceneManager.runScene(EmScene.Login);
    };
    Main.prototype.initModuls = function () {
        App.ControllerManager.register(Emcontroller.Login, new LoginController());
        App.ControllerManager.register(Emcontroller.Loading, new LoadingController());
        //先随便找个地方添加测试 文件吧
        this.testClass = new testClass();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map