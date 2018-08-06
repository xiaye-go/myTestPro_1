class LoginScene extends BaseScene {

    public constructor() {
        super();
    }

    public onEnter() {
        this.addLayer(EmLayer.Ui_Home, LayerManager.Ui_Home);
        this.addLayer(EmLayer.Ui_MainUi, LayerManager.Ui_MainUi);
        this.addLayer(EmLayer.Ui_Pop, LayerManager.Ui_Pop);
        this.addLayer(EmLayer.Ui_Tip, LayerManager.Ui_Tip);

        App.ControllerManager.applyFunc(Emcontroller.Login, LoginConst.OPEN_LOGIN_VIEW);
    }

    public onExit() {
        this.removeAllLayer();
    }

}