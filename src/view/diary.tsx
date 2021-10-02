
class DiaryView
{
    private _headlineEl: any;
    private _mainEl: any;
    private _formEl: any;
    private _headline: string;

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

    private _diary() {
        return String.raw`
            <form method="post" action="">
                <div id="calendar"></div>
                <div id="diaryNote"></div>
            </form>
        `;
    }
}

export { DiaryView };