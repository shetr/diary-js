import { StorageObject } from "../control/storageObject.js";

class Note extends StorageObject
{
    constructor() {
        super();
        this.name = "";
        this.description = "";
    }
    static createNote(name, description) {
        let note = new Note();
        note.name = name;
        note.description = description;
        return note;
    }

    static isNameIncorrect(name) {
        if(name.length > 100)
            return "The name is too long.";
        if(name.length < 1)
            return "The name must be at least one character.";
        return "";
    }

    static isDescriptionIncorrect(description) {
        if(description.length > 20000)
            return "The description is too long.";
        return "";
    }
}


export { Note };