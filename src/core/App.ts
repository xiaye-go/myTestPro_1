class App {


    public static get SceneManager(): SceneManager {
        return SceneManager.getInstance();
    }

    public static get StageUtil(): StageUtil {
        return StageUtil.getInstance();
    }

    public static get ControllerManager(): ControllerManager {
        return ControllerManager.getInstance();
    }

    public static get ResourceUtils(): ResourceUtils {
        return ResourceUtils.getInstance();
    }

    public static get ViewManager(): ViewManager {
        return ViewManager.getInstance();
    }




}