import { App } from "./app"

class Controller
{
    protected _app: App;

    constructor(app: App) {
        this._app = app;
    }

    init() {
        return true;
    }
}

export { Controller };