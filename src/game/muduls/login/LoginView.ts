class LoginView extends BaseEuiView {

    public btnRun: eui.Button;

    public constructor(controller, parent: egret.DisplayObjectContainer) {
        super(controller, parent);


        this._skin = SkinPath.loginSkin;
    }

    public initData() {

    }

    public initUi() {
        this.btnRun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRun, this);
    }

    public onClickRun() {
        let data = {"a":1, "b":2};
        // this.applyFunc(LoginConst.CLOSE_LOGIN_VIEW, 1);
        App.ControllerManager.applyFunc(Emcontroller.Login, LoginConst.CLOSE_LOGIN_VIEW, 1);
        App.SceneManager.runScene(EmScene.MainUi);
    }

}