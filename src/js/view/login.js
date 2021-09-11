
class LoginView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._loginFormEl = null;
        this._emailInputEl = null;
        this._passwordInputEl = null;
        this._errorEl = null;

        this._headline = "Login";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = this._loginForm();

        this._loginFormEl = document.querySelector("form");
        this._emailInputEl = document.getElementById("email");
        this._passwordInputEl = document.getElementById("password");
        this._errorEl = document.querySelector("p.error");
    }

    getForm() {
        return this._loginFormEl;
    }
    getEmailInput() {
        return this._emailInputEl;
    }
    getPasswordInput() {
        return this._passwordInputEl;
    }

    clearErrors() {
        this._errorEl.textContent = "";
    }
    setError(message) {
        this._errorEl.textContent = message;
    }

    _loginForm() {
        return String.raw`
            <form method="post" action="">
                <label>
                    Email: <span class="mandatory">*</span>
                    <input id="email" required type="email" name="email"/>
                </label>
                <label>
                    Password: <span class="mandatory">*</span>
                    <input id="password" required type="password" name="password" />
                </label>
                <p class="error"></p>
                <input class="submitForm" type="submit" value="Login">
                <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
            </form>
        `;
    }
}

export { LoginView };