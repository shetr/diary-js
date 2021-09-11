import { LoggedOut } from "./loggedOut.js";
import { MainView } from "../view/main.js";
import { Calendar } from "./calendar.js";

class Main extends LoggedOut
{
    constructor(app) {
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
            form.addEventListener("submit", (e) => {e.preventDefault(); this._calendar.submitForm(e.submitter);});
        }
        return progress;
    }
}

export { Main };