import { User } from "../model/user";

class AppStorage
{
    private name: string;
    private storedClasses: any; // TODO: somehow remove any
    private data: User[]; // TODO: is that correct?

    constructor(name: string, storedClasses: any[]) { // TODO: rethink storedClasses any type
        this.name = name;
        this.storedClasses = {};
        this.data = [];
        storedClasses.forEach(storedClass => {
            this.storedClasses[(new storedClass()).getStorageClassName()] = storedClass;
        });
    }

    getData() { // TODO: rethink getter
        return this.data;
    }

    load() {
        let rawData = window.localStorage.getItem(this.name);
        if(rawData == null) {
            this.save();
        } else {
            this.data = JSON.parse(rawData, (key, value) => {
                if(typeof value === 'object' && "_storageClassName" in value) {
                    let newObject = new this.storedClasses[value._storageClassName]();
                    return Object.assign(newObject, value);
                }
                else {
                    return value;
                }
           });
        }
    }

    save() {
        window.localStorage.setItem(this.name, JSON.stringify(this.data));
    }
}

export { AppStorage };