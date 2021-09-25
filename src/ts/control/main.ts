import { App } from "./app"
import { LoggedOut } from "./loggedOut";
import { MainView } from "../view/main";
import { Calendar } from "./calendar";

class Main extends LoggedOut
{
    private _view: MainView;
    private _calendar: Calendar;

    constructor(app: App) {
        super(app);
        this._view = new MainView();
        this._calendar = new Calendar(app);
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
            this._calendar.init();
            let form = this._view.getForm();
            form.addEventListener("submit", (e: SubmitEvent) => {e.preventDefault(); this._calendar.submitForm(e.submitter);});
        }
        return progress;
    }
}

export { Main };