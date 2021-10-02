import { App } from "./app"
import { LoggedIn } from "./loggedIn";

class Logout extends LoggedIn
{
    constructor(app: App) {
        super(app);
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._app.user = null;
        }
        return false;
    }
}

export { Logout };