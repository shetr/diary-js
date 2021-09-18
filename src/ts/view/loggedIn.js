
class LoggedInView
{
    constructor(){
        this._navEl = document.querySelector("header nav");
        this._userEl = document.getElementById("user");

        this._emailEl = null;
    }

    init(selectedPage, userEmail) {
        this._navEl.innerHTML = this._nav(selectedPage);
        this._userEl.innerHTML = this._user(selectedPage);

        this._emailEl = document.getElementById("loggedInUserEmail");
        this._emailEl.textContent = userEmail;
    }

    _nav (selectedPage) {
        return String.raw`
            <ul>
                <li>
                    <a href="#diary" ${selectedPage == "diary" ? 'id="pageSelected"' : ""}>Diary</a>
                </li>
                <li>
                    <a href="#changeStyle" ${selectedPage == "changeStyle" ? 'id="pageSelected"' : "" }>Change style</a>
                </li>
            </ul>
        `;
    }

    _user(selectedPage) {
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