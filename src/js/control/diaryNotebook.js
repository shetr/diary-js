import { Controller } from "./controller.js";
import { CustomDate } from "../model/date.js";
import { DiaryNote } from "../model/diaryNote.js";
import { DiaryNoteView } from "../view/diaryNotebook.js";

class DiaryNotebook extends Controller
{
    constructor(app, calendar) {
        super(app);
        this._view = new DiaryNoteView();
        this._calendar = calendar;
    }

    init() {
        this._view.init();
        this.update();
        return true;
    }

    update() {
        let selectedDay = this._calendar.getSelectedDay();
        if(selectedDay == -1) {
            this._view.clearNote();
            return;
        }
        let note = this._findNote();
        if(note == null) {
            this._view.noneNote();
        } else {
            this._view.existingNote(note.name, note.description);
        }
        let date = this._calendar.getDate().makeCopy();
        this._calendar.noteDays = this._app.user.diaryNotes
            .filter(note => note.date.month == date.month)
            .map(note => note.date.day);
        if(this._calendar.noteDays == undefined) {
            this._calendar.noteDays = [];
        }
        this._calendar.update();
    }

    submitForm(submitter) {
        let selectedDay = this._calendar.getSelectedDay();
        if(selectedDay == -1) {
            this._view.clearNote();
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
            let diaryNotes = this._app.user.diaryNotes;
            let index = diaryNotes.findIndex((diaryNote) => date.compare(diaryNote.date));
            if(index < 0) {
                diaryNotes.push(note);
            } else {
                diaryNotes[index] = note;
            }
            this._app._users.save();
            this.update();
        }
        else if(submitter.name == "change") {
            let note = this._findNote();
            if(note != null) {
                this._view.changeNote(note.name, note.description);
            }
        }
        else if(submitter.name == "delete") {
            let date = this._calendar.getDate().makeCopy();
            let diaryNotes = this._app.user.diaryNotes;
            this._app.user.diaryNotes = diaryNotes.filter((diaryNote) => !diaryNote.date.compare(date));
            this._app._users.save();
            this.update();
        } else {
            this.update();
        }
    }

    _findNote() {
        return this._app.user.diaryNotes.find((diaryNote) => this._calendar.getDate().compare(diaryNote.date));
    }
}

export { DiaryNotebook };