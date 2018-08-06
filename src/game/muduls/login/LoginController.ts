class LoginController extends BaseController {

    public loginView: LoginView;

    public constructor() {
        super();

        this.registerFunc(LoginConst.OPEN_LOGIN_VIEW, this.onOpenLoginView, this);
        this.registerFunc(LoginConst.CLOSE_LOGIN_VIEW, this.onCloseLoginView, this);


    }

    public onOpenLoginView() {
        if (!this.loginView) {
            this.loginView = new LoginView(this, LayerManager.Ui_Home);
            App.ViewManager.register(Emview.Login, this.loginView);
        }

        App.ViewManager.open(Emview.Login);
    }

    public onCloseLoginView(data) {
        App.ViewManager.close(Emview.Login);
        this.loginView = null;
    }



}