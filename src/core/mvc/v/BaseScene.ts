class BaseScene {

    public _layers: any = {};

    public onExit() {
        //子类继承 
    }

    public onEnter() {
        //子类继承
    }

    public addLayer(key: EmLayer, layer: BaseLayer) {
        if (this._layers[key]) {
            console.error("Err: this layer is exit!!!");
            return;
        }
        App.StageUtil.getUiStage().addChild(layer);
        this._layers[key] = layer;
    }

    public removeLayer(key: EmLayer) {
        if (!this._layers[key]) {
            console.error("Err: this layer is not exit!!!");
            return;
        }
    }

    public removeAllLayer() {
        for (let i in this._layers) {
            let layer: BaseLayer = this._layers[i];
            if (layer && layer.parent) {
                layer.parent.removeChild(layer);
            }
        }
    }
}

enum EmLayer {
    Ui_Home,
    Ui_MainUi,
    Ui_Pop,
    Ui_Tip
}