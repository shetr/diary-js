
class LoggedOutView
{
    constructor(){
        this._navEl = document.querySelector("header nav");
        this._userEl = document.getElementById("user");

        this._user = "";
    }

    init(selectedPage) {
        this._navEl.innerHTML = this._nav(selectedPage);
        this._userEl.innerHTML = this._user;
    }

    _nav (selectedPage) {
        return String.raw`
            <ul>
                <li>
                    <a href="#main" ${selectedPage == "main" ? 'id="pageSelected"' : ""}>Main page</a>
                </li>
                <li>
                    <a href="#login" ${selectedPage == "login" ? 'id="pageSelected"' : ""}>Login</a>
                </li>
                <li>
                    <a href="#register" ${selectedPage == "register" ? 'id="pageSelected"' : ""}>Register</a>
                </li>
            </ul>
        `;
    }
}

export { LoggedOutView };