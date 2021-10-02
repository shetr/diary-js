import { StorageObject } from "../control/storageObject";
import { DiaryNote } from "./diaryNote";
import { Note } from "./note";

export type UserStyle = "blue" | "green";

export class User extends StorageObject // TODO: change visibility and mutability of attributes
{
    public email = "";
    public passwordHash = ""; // TODO: maybe replace with some PasswordHash type
    public notes: Note[] = [];
    public diaryNotes: DiaryNote[] = [];
    public style: UserStyle = "blue";

    constructor() {
        super("User");
    }

    async doesPasswordMatch(password: string) {
        let passwordHash = await createHash(password);
        return this.passwordHash === passwordHash;
    }

    static async createWithPassword(email: string, password: string) {
        let user = new User();
        user.email = email;
        user.passwordHash = await createHash(password); 
        return user;
    }

    static isEmailIncorrect(email: string) { // TODO: replace with typesafe Email type
        if(!(email.indexOf("@") > -1 && email.indexOf(".") > -1))
        {
            return "Missing @ or . in the email.";
        }
        if(!(email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@") + 1 && email.indexOf(".") < email.length - 1))
        {
            return "Incorrect email.";
        }
        return "";
    }

    static isPasswordIncorrect(password: string) { // TODO: replace with typesafe Password type
        if(password.length <= 3)
        {
            return 'Password must be longer than 3 characters.';
        }
        return "";
    }
}
    
async function createHash(password: string) {
    // copied from mdn
    const msgUint8 = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8).then();
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}