import { Router } from "./router.js";
import { AppStorage } from "./appStorage.js";

import { Main } from "./main.js";
import { Login } from "./login.js";
import { Register } from "./register.js";
import { Diary } from "./diary.js";
import { Notebook } from "./notebook.js";
import { Logout } from "./logout.js";
import { ChangeStyle } from "./changeStyle.js";

import { User } from "../model/user.js";
import { CustomDate } from "../model/date.js";
import { Note } from "../model/note.js";
import { DiaryNote } from "../model/diaryNote.js";

class App
{
    constructor() {
        let routes = {
            main: new Main(this),
            login: new Login(this),
            register: new Register(this),
            diary: new Diary(this),
            /*notebook: new Notebook(this),*/
            logout: new Logout(this),
            changeStyle: new ChangeStyle(this)
        };
        let defaultRoute = {
            name: "main",
            control: routes.main
        };

        this.router = new Router(routes, defaultRoute);
        this.router.route();

        this._users = new AppStorage("diary-js-users", [User, CustomDate, Note, DiaryNote]);
        this._users.load();

        this.user = null;
    }

    getUsers() {
        return this._users;
    }
    
}

export { App };