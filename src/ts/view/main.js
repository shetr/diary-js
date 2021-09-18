import { CustomDate } from "../model/date.js";

class MainView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._formEl = null;

        this._headline = "Diary";
    }

    getForm() {
        return this._formEl;
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = this._basicCalendar();

        this._formEl = document.querySelector("form");
    }

    _basicCalendar() {
        let date = CustomDate.createCurrentDate();
        return String.raw`
            <div id="currentDate">Today is ${date.toString()}</div>
            <form method="post" action="">
                <div id="calendar"></div>
            </form>
        `;
    }
}

export { MainView };