import { App } from "./app"
import { Controller } from "./controller";
import { LoggedOutView } from "../view/loggedOut";
import { setStyle } from "../view/style";

class LoggedOut extends Controller
{
    private _loggedOutView: LoggedOutView;
    
    constructor(app: App) {
        super(app);
        this._loggedOutView = new LoggedOutView();
    }

    init() {
        setStyle("blue");
        this._loggedOutView.init(this._app.router.getActualRoute());
        return true;
    }
}

export { LoggedOut };