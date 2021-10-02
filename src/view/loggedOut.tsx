
class LoggedOutView
{
    private _navEl: any;
    private _userEl: any;
    private _user: string;

    constructor(){
        this._navEl = document.querySelector("header nav");
        this._userEl = document.getElementById("user");

        this._user = "";
    }

    init(selectedPage: string) {
        this._navEl.innerHTML = this._nav(selectedPage);
        this._userEl.innerHTML = this._user;
    }

    private _nav (selectedPage: string) {
        return String.raw`
            <ul>
                <li>
                    <a href="#main" ${selectedPage === "main" ? 'id="pageSelected"' : ""}>Main page</a>
                </li>
                <li>
                    <a href="#login" ${selectedPage === "login" ? 'id="pageSelected"' : ""}>Login</a>
                </li>
                <li>
                    <a href="#register" ${selectedPage === "register" ? 'id="pageSelected"' : ""}>Register</a>
                </li>
            </ul>
        `;
    }
}

export { LoggedOutView };