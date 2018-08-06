class SceneManager extends BaseClass {


    private _scenes: any = {};
    private _oldScene: EmScene = null;

    public test() {

    }
    public register(key: EmScene, scene: BaseScene) {
        if (this._scenes[key]) {
            console.error("this scene is exit!!!");
        }
        this._scenes[key] = scene;
    }

    public unRegister(key) {
        if (!this._scenes[key]) {
            console.error("this scene is not exit!!!");
        }
        this._scenes[key] = null;
        delete this._scenes[key];
    }

    public runScene(key: EmScene) {
        if (this._oldScene != null && this._scenes[this._oldScene]) {
            this.onExit(this._oldScene);
        }
        if (!this._scenes[key]) {
            console.error("this scene is not exit!!!");
            return;
        }
        this._scenes[key].onEnter();
        this._oldScene = key;
    }

    public onExit(key: EmScene) {
        //退出
        this._scenes[key].onExit();
    }


}

enum EmScene {
    Login,
    MainUi
}