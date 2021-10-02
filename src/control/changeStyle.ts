import { App } from "./app"
import { LoggedIn } from "./loggedIn";
import { ChangeStyleView } from "../view/changeStyle";
import { setStyle } from "../view/style";

class ChangeStyle extends LoggedIn
{
    private _view: ChangeStyleView;

    constructor(app: App) {
        super(app);
        this._view = new ChangeStyleView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init(this._user.style);
            this._view.getForm().addEventListener("submit", (e: SubmitEvent) => {e.preventDefault(); this._submitForm();});
        }
        return progress;
    }

    _submitForm() {
        let form = this._view.getForm();
        let formData = new FormData(form);
        this._user.style = ((rawStyle)=> {
            if(rawStyle != null) {
                let rawStyleString = rawStyle.toString();
                if(rawStyleString === "blue" || rawStyleString === "green") {
                    return rawStyleString;
                }
            }
            return "blue";
        })(formData.get("style"));
        this._app.getUsers().save();
        setStyle(this._user.style);
    }
}

export { ChangeStyle };