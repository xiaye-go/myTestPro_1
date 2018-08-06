class BaseModel {
    public controller: BaseController;

    public constructor(controller: BaseController) {
        this.controller = controller;
        this.controller.setModel(this);
    }


}