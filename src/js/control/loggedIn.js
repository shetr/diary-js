import { Controller } from "./controller.js";
import { LoggedInView } from "../view/loggedIn.js";
import { setStyle } from "../view/style.js";

class LoggedIn extends Controller
{
    constructor(app) {
        super(app);
        this._loggedInView = new LoggedInView();
    }

    init() {
        let user = this._app.user;
        if(user == null) {
            return false;
        }
        setStyle(user.style);
        this._loggedInView.init(this._app.router.getActualRoute(), user.email);
        return true;
    }
}

export { LoggedIn };