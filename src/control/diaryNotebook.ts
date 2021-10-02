import { App } from "./app"
import { CustomDate } from "../model/date";
import { DiaryNote } from "../model/diaryNote";
import { DiaryNoteView } from "../view/diaryNotebook";
import { Calendar } from "./calendar";
import { User } from "../model/user";

class DiaryNotebook
{
    private _app: App;
    private _view: DiaryNoteView;
    private _calendar: Calendar;

    constructor(app: App, calendar: Calendar) {
        this._app = app;
        this._view = new DiaryNoteView();
        this._calendar = calendar;
    }

    init(user: User) {
        this._view.init();
        this.update(user);
        return true;
    }

    update(user: User) {
        let selectedDay = this._calendar.getSelectedDay();
        if(selectedDay == -1) {
            this._view.clearNote();
        } else {
            let note = this._findNote(user);
            if(note == null) {
                this._view.noneNote();
            } else {
                this._view.existingNote(note.name, note.description);
            }
        }
        let date = this._calendar.getDate().makeCopy();
        this._calendar.noteDays = user.diaryNotes
            .filter(note => note.date.month == date.month)
            .map(note => note.date.day);
        if(this._calendar.noteDays == undefined) {
            this._calendar.noteDays = [];
        }
        this._calendar.update();
    }

    submitForm(submitter: any, user: User) {  // TODO: replace any with some type
        let selectedDay = this._calendar.getSelectedDay();
        if(selectedDay == -1) {
            this.update(user);
            return;
        }

        if(submitter.name == "createNote") {
            this._view.createNote();
        }
        else if(submitter.name == "create" || submitter.name == "safeChanges") {
            let date = this._calendar.getDate().makeCopy();
            let name = this._view.getNameInput();
            let description = this._view.getDescriptionInput();
            this._view.clearErrors();
            let isIncorrect = DiaryNote.isNameIncorrect(name);
            if(isIncorrect) {
                this._view.setNameError(isIncorrect);
                return;
            }
            isIncorrect = DiaryNote.isDescriptionIncorrect(description);
            if(isIncorrect) {
                this._view.setDescriptionError(isIncorrect);
                return;
            }
            let note = DiaryNote.createDiaryNote(date.makeCopy(), name, description);
            let diaryNotes = user.diaryNotes;
            let index = diaryNotes.findIndex((diaryNote) => date.compare(diaryNote.date));
            if(index < 0) {
                diaryNotes.push(note);
            } else {
                diaryNotes[index] = note;
            }
            this._app.getUsers().save();
            this.update(user);
        }
        else if(submitter.name == "change") {
            let note = this._findNote(user);
            if(note != null) {
                this._view.changeNote(note.name, note.description);
            }
        }
        else if(submitter.name == "delete") {
            let date = this._calendar.getDate().makeCopy();
            let diaryNotes = user.diaryNotes;
            user.diaryNotes = diaryNotes.filter((diaryNote) => !diaryNote.date.compare(date));
            this._app.getUsers().save();
            this.update(user);
        } else {
            this.update(user);
        }
    }

    _findNote(user: User) {
        return user.diaryNotes.find((diaryNote) => this._calendar.getDate().compare(diaryNote.date));
    }
}

export { DiaryNotebook };