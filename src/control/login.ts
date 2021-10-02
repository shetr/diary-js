import { App } from "./app"
import { LoginView } from "../view/login";
import { LoggedOut } from "./loggedOut";
import { User } from "../model/user";

class Login extends LoggedOut
{
    private _view: LoginView;

    constructor(app: App) {
        super(app);
        this._view = new LoginView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
            this._view.getForm().addEventListener("submit", (e: SubmitEvent) => {e.preventDefault(); this._submitForm();});
        }
        return progress;
    }

    private _submitForm() {
        let email = this._view.getEmailInput().value;
        let password = this._view.getPasswordInput().value;
        let user = this._findUser(email);
        if(user == null) {
            this._view.setError("Incorrect email or password.");
            return;
        }
        user.doesPasswordMatch(password).then((matches) => {
            if(!matches) {
                this._view.setError("Incorrect email or password.");
                return;
            }
            this._app.user = user;
            this._app.router.routeTo("diary");
        });
    }

    private _findUser(email: string): User | null {
        let users = this._app.getUsers().getData();
        let foundUser = null;
        users.forEach((user) => {
            if(user.email === email) {
                foundUser = user;
            }
        });
        return foundUser;
    }
}

export { Login };