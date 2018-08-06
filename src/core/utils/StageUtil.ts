class StageUtil extends BaseClass {


    public static _uiStage: eui.UILayer;

    public constructor() {
        super();
        if (!StageUtil._uiStage) {
            StageUtil._uiStage = new eui.UILayer();
        }

        this.getStage().addChild(StageUtil._uiStage);
    }

    public getStage() {
        return egret.MainContext.instance.stage;
    }

    public getUiStage() {
        return StageUtil._uiStage;
    }

}