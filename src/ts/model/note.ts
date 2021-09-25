import { StorageObject } from "../control/storageObject";

class Note extends StorageObject // TODO: change visibility and mutability of attributes
{
    public name = "";
    public description = "";

    constructor() {
        super("Note");
    }
    static createNote(name: string, description: string) {
        let note = new Note();
        note.name = name;
        note.description = description;
        return note;
    }

    static isNameIncorrect(name: string) { // TODO: maybe replace with typesafe NoteName type
        if(name.length > 100)
            return "The name is too long.";
        if(name.length < 1)
            return "The name must be at least one character.";
        return "";
    }

    static isDescriptionIncorrect(description: string) { // TODO: maybe replace with typesafe NoteDescription type
        if(description.length > 20000)
            return "The description is too long.";
        return "";
    }
}


export { Note };