import { LoggedIn } from "./loggedIn.js";

class Logout extends LoggedIn
{
    constructor(app) {
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