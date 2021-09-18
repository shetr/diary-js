import { Router } from "./router";
import { AppStorage } from "./appStorage";

import { Main } from "./main";
import { Login } from "./login";
import { Register } from "./register";
import { Diary } from "./diary";
import { Notebook } from "./notebook";
import { Logout } from "./logout";
import { ChangeStyle } from "./changeStyle";

import { User } from "../model/user";
import { CustomDate } from "../model/date";
import { Note } from "../model/note";
import { DiaryNote } from "../model/diaryNote";

class App
{
    router: Router;
    _users: AppStorage;
    user: User | null;

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