import { App } from "./app"
import { Controller } from "./controller";
import { LoggedInView } from "../view/loggedIn";
import { setStyle } from "../view/style";
import { User } from "../model/user";

class LoggedIn extends Controller
{
    private _loggedInView: LoggedInView;
    protected _user: User;

    constructor(app: App) {
        super(app);
        this._loggedInView = new LoggedInView();
        this._user = new User()
    }

    init() {
        let user = this._app.user;
        if(user == null) {
            return false;
        }
        this._user = user;
        setStyle(this._user.style);
        this._loggedInView.init(this._app.router.getActualRoute(), this._user.email);
        return true;
    }
}

export { LoggedIn };