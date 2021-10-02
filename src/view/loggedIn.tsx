
class LoggedInView
{
    private _navEl: any;
    private _userEl: any;
    private _emailEl: any;

    constructor(){
        this._navEl = document.querySelector("header nav");
        this._userEl = document.getElementById("user");

        this._emailEl = null;
    }

    init(selectedPage: string, userEmail: string) {
        this._navEl.innerHTML = this._nav(selectedPage);
        this._userEl.innerHTML = this._user();

        this._emailEl = document.getElementById("loggedInUserEmail");
        this._emailEl.textContent = userEmail;
    }

    private _nav (selectedPage: string) {
        return String.raw`
            <ul>
                <li>
                    <a href="#diary" ${selectedPage === "diary" ? 'id="pageSelected"' : ""}>Diary</a>
                </li>
                <li>
                    <a href="#changeStyle" ${selectedPage === "changeStyle" ? 'id="pageSelected"' : "" }>Change style</a>
                </li>
            </ul>
        `;
    }

    private _user() {
        return String.raw`
            <div>
                Logged&nbsp;in:&nbsp;<span id="loggedInUserEmail"></span>
            </div>
            <div class="styleLink">
                <a class="navLink" href="#logout">Logout</a>
            </div>
        `;
    }
}

export { LoggedInView };