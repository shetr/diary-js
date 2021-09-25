
class StorageObject
{
    private _storageClassName: string; // TODO: rethink mutability

    constructor(storageClassName : string) {
        this._storageClassName = storageClassName;
    }

    getStorageClassName() { // TODO: rethink getter
        return this._storageClassName;
    }
}

export { StorageObject };