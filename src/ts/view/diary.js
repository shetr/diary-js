
class DiaryView
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
        
        this._mainEl.innerHTML = this._diary();

        this._formEl = document.querySelector("form");
    }

    _diary() {
        return String.raw`
            <form method="post" action="">
                <div id="calendar"></div>
                <div id="diaryNote"></div>
            </form>
        `;
    }
}

export { DiaryView };