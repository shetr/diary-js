import { LoggedIn } from "./loggedIn.js";
import { NotebookView } from "../view/notebook.js";

class Notebook extends LoggedIn
{
    constructor(app) {
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