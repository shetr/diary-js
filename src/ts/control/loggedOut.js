import { Controller } from "./controller.js";
import { LoggedOutView } from "../view/loggedOut.js";
import { setStyle } from "../view/style.js";

class LoggedOut extends Controller
{
    constructor(app) {
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