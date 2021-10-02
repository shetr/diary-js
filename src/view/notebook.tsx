
class NotebookView
{
    private _headlineEl: any;
    private _mainEl: any;
    private _headline: string;

    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._headline = "Notebook";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = "";
    }
}

export { NotebookView };