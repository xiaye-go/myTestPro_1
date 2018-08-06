class BaseEuiView extends eui.Component implements IBaseUi {

    public _controller: BaseController;
    public _parent: egret.DisplayObjectContainer;
    private _isInit: boolean = false;
    protected _skin: any = null;
    protected _loadPreFunc: Function = null;
    protected _loadEndFunc: Function = null;
    private _loadCallBack: Function = null;
    private _loadCallBackTarget: any = null;

    public constructor(controller: BaseController, parent: egret.DisplayObjectContainer) {
        super();
        this._controller = controller;
        this._parent = parent;

    }

    public isInit() {
        return this._isInit;
    }

    public isShow() {
        return this.visible;
    }
    public setVisible(flag: boolean) {
        this.visible = flag;
    }

    public initData() {
        this._isInit = true;
    }
    public initUi() {
        //子类实现
    }
    public open() {
        //子类实现
    }
    public close() {
        //子类实现
    }

    public setViewTop() {
        if (!this._parent) {
            console.error("Err: this view.s parent is not exit!!");
            return;
        }
        this._parent.setChildIndex(this, 999);
    }

    public loadExml(loadPreFunc: Function, loadEndFunc: Function) {
        this._loadPreFunc = loadPreFunc;
        this._loadEndFunc = loadEndFunc;
        if (!this._skin) {

        } else {
            EXML.load(this._skin, this.loadExmlComplete, this, true);
        }
    }

    public loadExmlComplete(clazz: any) {
        this.skinName = clazz;
        this._loadPreFunc();
        this._loadEndFunc();

        if (this._loadCallBack) {
            if (this._loadCallBackTarget) {
                this._loadCallBack.apply(this._loadCallBackTarget);
            } else {
                this._loadCallBack();
            }
        }

        this._loadCallBack = null;
        this._loadCallBackTarget = null;
    }

    public setLoadCallBack(func: Function, target) {
        this._loadCallBack = func;
        this._loadCallBackTarget = target;
    }

    public addToParent() {
        this._parent.addChild(this);
    }

    public applyFunc(key: any, ...param: any[]) {
        this._controller.applyFunc.apply(this._controller, arguments);
    }



}