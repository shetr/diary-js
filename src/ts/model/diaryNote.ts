import { StorageObject } from "../control/storageObject";
import { CustomDate } from "./date"

class DiaryNote extends StorageObject // TODO: change visibility and mutability of attributes
{
    public date = new CustomDate();
    public name = "";
    public description = "";

    constructor() {
        super("DiaryNote");
    }
    static createDiaryNote(date: CustomDate, name: string, description: string) {
        let note = new DiaryNote();
        note.date = date;
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


export { DiaryNote };