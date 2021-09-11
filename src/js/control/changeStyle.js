import { LoggedIn } from "./loggedIn.js";
import { ChangeStyleView } from "../view/changeStyle.js";
import { setStyle } from "../view/style.js";

class ChangeStyle extends LoggedIn
{
    constructor(app) {
        super(app);
        this._view = new ChangeStyleView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init(this._app.user.style);
            this._view.getForm().addEventListener("submit", (e) => {e.preventDefault(); this._submitForm();});
        }
        return progress;
    }

    _submitForm() {
        let form = this._view.getForm();
        let user = this._app.user;
        let formData = new FormData(form);
        user.style = formData.get("style");
        setStyle(user.style);
    }
}

export { ChangeStyle };