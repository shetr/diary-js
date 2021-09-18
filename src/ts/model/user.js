import { StorageObject } from "../control/storageObject.js";

class User extends StorageObject
{
    constructor() {
        super();
        this.email = "";
        this.passwordHash = "";
        this.notes = [];
        this.diaryNotes = [];
        this.style = "blue";
    }

    async doesPasswordMatch(password) {
        let passwordHash = await createHash(password);
        return this.passwordHash == passwordHash;
    }

    static async createWithPassword(email, password) {
        let user = new User();
        user.email = email;
        user.passwordHash = await createHash(password); 
        return user;
    }

    static isEmailIncorrect(email) {
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

    static isPasswordIncorrect(password) {
        if(password.length <= 3)
        {
            return 'Password must be longer than 3 characters.';
        }
        return "";
    }
}
    
async function createHash(password) {
    // copied from mdn
    const msgUint8 = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8).then();
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}


export { User };