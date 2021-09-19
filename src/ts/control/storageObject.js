
class StorageObject
{
    constructor(storageClassName) {
        this._storageClassName = storageClassName;
    }

    getStorageClassName() {
        return this._storageClassName;
    }
}

export { StorageObject };