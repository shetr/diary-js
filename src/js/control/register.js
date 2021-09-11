import { LoggedOut } from "./loggedOut.js";
import { RegisterView } from "../view/register.js";
import { User } from "../model/user.js";

class Register extends LoggedOut
{
    constructor(app) {
        super(app);
        this._view = new RegisterView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
            this._view.getForm().addEventListener("submit", (e) => {e.preventDefault(); this._submitForm();});
            this._view.getEmailInput().addEventListener("keyup", (e) => {e.preventDefault(); this._validateEmail();});
            this._view.getPassword1Input().addEventListener("blur", (e) => {e.preventDefault(); this._validatePassword1();});
            this._view.getPassword2Input().addEventListener("blur", (e) => {e.preventDefault(); this._validatePassword2();});
        }
        return progress;
    }

    _submitForm() {
        let isValid =
            this._validatePassword2() &&
            this._validatePassword1() &&
            this._validateEmail();
        if(isValid) {
            let email = this._view.getEmailInput().value;
            let password = this._view.getPassword1Input().value;
            let users = this._app.getUsers();
            User.createWithPassword(email, password).then((user => {
                users.getData().push(user);
                users.save();
                this._app.user = user;
                this._app.router.routeTo("diary");
            }));
        }
    }

    _validateEmail() {
        this._view.clearErrors();
        let email = this._view.getEmailInput().value;
        let isIncorrect = User.isEmailIncorrect(email);
        if(isIncorrect) {
            this._view.setEmailError(isIncorrect);
            return false;
        }
        if(this._isRegistered(email)){
            this._view.setEmailError("Such a user already exists.");
            return false;
        }
        return true;
    }

    _validatePassword1() {
        this._view.clearErrors();
        let password1 = this._view.getPassword1Input().value;
        let isIncorrect = User.isPasswordIncorrect(password1);
        if(isIncorrect) {
            this._view.setPassword1Error(isIncorrect);
            return false;
        }
        return true;
    }

    _validatePassword2() {
        this._view.clearErrors();
        let password1 = this._view.getPassword1Input().value;
        let password2 = this._view.getPassword2Input().value;
        if(password1 != password2) {
            this._view.setPassword2Error("Passwords do not match.");
            return false;
        }
        return true;
    }

    _isRegistered(email) {
        let users = this._app.getUsers().getData();
        let isRegistered = false;
        users.forEach((user) => {
            if(user.email == email) {
                isRegistered = true;
            }
        });
        return isRegistered;
    }
}

export { Register };