import { Controller } from "./controller";

export type Routes = { [name: string]: Controller };
export type Route = { name: string, control: Controller };

class Router
{
    private _routes: Routes;
    private _defaultRoute: Route;
    private _actualRoute: string;

    constructor(routes: Routes, defaultRoute: Route) {
        window.addEventListener('popstate', e => this.route());
        this._routes = routes;
        this._defaultRoute = defaultRoute;
        this._actualRoute = "";
    }

    getActualRoute() { // TODO: rethink getter
        return this._actualRoute;
    }

    route() {
        let routeFound = false;
        const hash = window.location.hash;
        for (const [routeName, routeControl] of Object.entries(this._routes)) {
            if("#" + routeName === hash) {
                this._actualRoute = routeName;
                if(routeControl.init()) {
                    routeFound = true;
                }
                break;
            }
        }
        if(!routeFound) {
            this.routeDefault();
        }
    }

    routeTo(newRoute: string) {
        let routeFound = false;
        for (const [routeName, routeControl] of Object.entries(this._routes)) {
            if(routeName === newRoute) {
                routeFound = true;
            }
        }
        if(!routeFound) {
            console.log("route %s does not exist", newRoute);
            return;
        }
        this._actualRoute = newRoute;
        window.location.hash = "#" + newRoute;
        this._routes[newRoute].init();
    }

    routeDefault() {
        this._actualRoute = this._defaultRoute.name;
        window.location.hash = "#" + this._defaultRoute.name;
        this._defaultRoute.control.init();
    }
}

export { Router };