
class AppStorage
{
    constructor(name, storedClasses) {
        this.name = name;
        this.storedClasses = {};
        this.data = [];
        storedClasses.forEach(storedClass => {
            this.storedClasses[storedClass.name] = storedClass;
        });
    }

    getData() {
        return this.data;
    }

    load() {
        let rawData = window.localStorage.getItem(this.name);
        if(rawData == null) {
            this.save();
        } else {
            this.data = JSON.parse(rawData, (key, value) => {
                if(typeof value === 'object' && "_class" in value) {
                    let newObject = new this.storedClasses[value._class]();
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