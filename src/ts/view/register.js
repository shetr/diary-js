
class RegisterView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._registerFormEl = null;
        this._emailInputEl = null;
        this._password1InputEl = null;
        this._password2InputEl = null;
        this._errorEl = null;

        this._headline = "Register";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = this._registerForm();

        this._registerFormEl = document.querySelector("form");
        this._emailInputEl = document.getElementById("email");
        this._password1InputEl = document.getElementById("password1");
        this._password2InputEl = document.getElementById("password2");
        this._errorEl = document.querySelector("p.error");
    }

    getForm() {
        return this._registerFormEl;
    }
    getEmailInput() {
        return this._emailInputEl;
    }
    getPassword1Input() {
        return this._password1InputEl;
    }
    getPassword2Input() {
        return this._password2InputEl;
    }


    clearErrors() {
        this._errorEl.textContent = "";
        this._emailInputEl.classList.remove('error');
        this._password1InputEl.classList.remove('error');
        this._password2InputEl.classList.remove('error');
    }
    setEmailError(message) {
        this._errorEl.textContent = message;
        this._emailInputEl.classList.add('error');
    }
    setPassword1Error(message) {
        this._errorEl.textContent = message;
        this._password1InputEl.classList.add('error');
    }
    setPassword2Error(message) {
        this._errorEl.textContent = message;
        this._password2InputEl.classList.add('error');
    }

    _registerForm() {
        return String.raw`
            <form method="post" action="">
                <label>
                    Email: <span class="mandatory">*</span>
                    <input id="email" required type="email" name="email"/>
                </label>
                <label>
                    Password: <span class="mandatory">*</span>
                    <input id="password1" required type="password" name="password1" />
                </label>
                <label>
                    Password check: <span class="mandatory">*</span>
                    <input id="password2" required type="password" name="password2" />
                </label>
                <p class="error"></p>
                <input class="submitForm" type="submit" value="Register">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `;
    }
}

export { RegisterView };