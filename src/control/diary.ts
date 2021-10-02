import { App } from "./app"
import { LoggedIn } from "./loggedIn";
import { DiaryView } from "../view/diary";
import { Calendar } from "./calendar";
import { DiaryNotebook } from "./diaryNotebook";

class Diary extends LoggedIn
{
    private _view: DiaryView;
    private _calendar: Calendar;
    private _diaryNote: DiaryNotebook;

    constructor(app: App) {
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
            this._diaryNote.init(this._user);
            let form = this._view.getForm();
            form.addEventListener("submit", (e: SubmitEvent) => {e.preventDefault(); this._submitForm(e.submitter);});
        }
        return progress;
    }

    _submitForm(submitter: any) { // TODO: replace any with some type
        this._calendar.submitForm(submitter);
        this._diaryNote.submitForm(submitter, this._user);
    }
}

export { Diary };