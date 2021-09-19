import { StorageObject } from "../control/storageObject.js";

class DiaryNote extends StorageObject
{
    constructor() {
        super("DiaryNote");
        this.date = null;
        this.name = "";
        this.description = "";
    }
    static createDiaryNote(date, name, description) {
        let note = new DiaryNote();
        note.date = date;
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


export { DiaryNote };