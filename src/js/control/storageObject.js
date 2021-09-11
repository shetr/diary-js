
class StorageObject
{
    constructor() {
        this._class = this.__proto__.constructor.name;
    }
}

export { StorageObject };