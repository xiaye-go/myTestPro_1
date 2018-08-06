class ViewManager extends BaseClass {

    public _views: any = {};

    public constructor() {
        super();
    }

    public register(key: Emview, view) {
        if (this._views[key]) {
            console.error("Err: this view is exit!!!");
            return;
        }
        this._views[key] = view;
    }

    public unRegister(key: Emview) {
        if (!this._views[key]) {
            console.error("Err: this view is not exit!!!");
            return;
        }
        this._views[key] = null;
        delete this._views[key];
    }

    public open(key: Emview) {
        let view: BaseEuiView = this._views[key];
        if (!view) {
            console.error("Err: this view is not exit!!!");
            return;
        }

        view.addToParent();
        if (view.isInit()) {
            view.open();
            view.setVisible(true);
            return;
        }

        view.loadExml(function () {
            view.setVisible(false);
        }, function () {
            view.initData();
            view.initUi();
            view.setVisible(true);
            view.open();
        });
    }

    public close(key: Emview) {
        let view: BaseEuiView = this._views[key];
        if (!view) {
            console.error("Err: this view is not exit!!!");
            return;
        }
        view.parent.removeChild(view);
        this.unRegister(key);
    }

    public getTopView() {
    }
    public setViewTop() {
    }

}

enum Emview {
    Login,
}