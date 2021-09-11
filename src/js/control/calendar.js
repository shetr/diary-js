import { Controller } from "./controller.js";
import { CalendarView } from "../view/calendar.js";
import { CustomDate } from "../model/date.js";

class Calendar extends Controller
{
    constructor(app) {
        super(app);
        this._view = new CalendarView();
        this._selectedDay = -1;
        this._date = null;
        this.noteDays = [];
    }

    init() {
        this._selectedDay = -1;
        this._date = CustomDate.createCurrentDate();
        this._view.init(this._date, this._selectedDay, this.noteDays);
        return true;
    }

    update() {
        this._view.init(this._date, this._selectedDay, this.noteDays);
    }

    getSelectedDay() {
        return this._selectedDay;
    }

    getDate() {
        return this._date;
    }

    submitForm(submitter) {
        if(submitter.name == "selectDay") {
            let selectedDay = parseInt(submitter.value);
            this._view.deselectCell(this._selectedDay);
            this._view.selectCell(selectedDay);
            this._selectedDay = selectedDay;
            this._date.day = selectedDay;
        } else if(submitter.name == "changeMonthLeft") {
            this._selectedDay = -1;
            this._date.dencrementMonth();
            this._view.init(this._date, this._selectedDay, this.noteDays);
        } else if(submitter.name == "changeMonthRight") {
            this._selectedDay = -1;
            this._date.incrementMonth();
            this._view.init(this._date, this._selectedDay, this.noteDays);
        }
    }
}

export { Calendar };