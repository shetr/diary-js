import { LoggedIn } from "./loggedIn.js";
import { DiaryView } from "../view/diary.js";
import { Calendar } from "./calendar.js";
import { DiaryNotebook } from "./diaryNotebook.js";

class Diary extends LoggedIn
{
    constructor(app) {
        super(app);
        this._view = new DiaryView();
        this._calendar = new Calendar(app);
        this._diaryNote = new DiaryNotebook(app, this._calendar);
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
            this._calendar.init();
            this._diaryNote.init();
            let form = this._view.getForm();
            form.addEventListener("submit", (e) => {e.preventDefault(); this._submitForm(e.submitter);});
        }
        return progress;
    }

    _submitForm(submitter) {
        this._calendar.submitForm(submitter);
        this._diaryNote.submitForm(submitter);
    }
}

export { Diary };