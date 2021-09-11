
class ChangeStyleView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._changeStyleFormEl = null;

        this._headline = "Change style";
    }

    init(style) {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = this._changeStyleForm(style);

        this._changeStyleFormEl = document.querySelector("form");
    }

    getForm() {
        return this._changeStyleFormEl;
    }

    _changeStyleForm(style) {
        return String.raw`
            <form method="post" action="">
                <label>
                    Styles: <span class="mandatory">*</span>
                </label>
                <label>
                    <input class="radioBut" required type="radio" name="style" value="blue" ${style == "blue" ? "checked" : ""}>
                    Blue style
                </label>
                <label>
                    <input class="radioBut" type="radio" name="style" value="green" ${style == "green" ? "checked" : ""}>
                    Green style
                </label>
                <input class="submitForm" type="submit" value="Change">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `;
    }
}

export { ChangeStyleView };