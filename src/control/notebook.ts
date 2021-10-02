import { App } from "./app"
import { LoggedIn } from "./loggedIn";
import { NotebookView } from "../view/notebook";

class Notebook extends LoggedIn
{
    private _view: NotebookView;
    constructor(app: App) {
        super(app);
        this._view = new NotebookView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
        }
        return progress;
    }
}

export { Notebook };