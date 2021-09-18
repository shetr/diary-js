import { CustomDate } from "../model/date.js";

class DiaryNoteView
{
    constructor(){
        this._diaryNoteWrapperEl = null;
        this._nameEl = null;
        this._descriptionEl = null;
        this._errorEl = null;
    }

    init() {
        this._diaryNoteWrapperEl = document.getElementById("diaryNote");
        this._diaryNoteWrapperEl.innerHTML = "";
    }

    clearNote() {
        this._diaryNoteWrapperEl.innerHTML = "";
    }
    noneNote() {
        this._diaryNoteWrapperEl.innerHTML = this._noneNote();
    }
    createNote() {
        this._diaryNoteWrapperEl.innerHTML = this._createNote();
        this._initFormData("", "");
        this._nameEl.addEventListener("blur", e => this.clearErrors());
        this._descriptionEl.addEventListener("blur", e => this.clearErrors());
    }
    changeNote(name, description) {
        this._diaryNoteWrapperEl.innerHTML = this._changeNote();
        this._initFormData(name, description);
        this._nameEl.addEventListener("blur", e => this.clearErrors());
        this._descriptionEl.addEventListener("blur", e => this.clearErrors());
    }
    existingNote(name, description) {
        this._diaryNoteWrapperEl.innerHTML = this._existingNote();
        this._initFormData(name, description);
    }
    _initFormData(name, description) {
        this._nameEl = document.querySelector("input#name");
        this._descriptionEl = document.querySelector("textarea#description");
        this._errorEl = document.querySelector("p.error");
        this._nameEl.value = name;
        this._descriptionEl.value = description;
    }

    getNameInput() {
        return this._nameEl.value;
    }
    getDescriptionInput() {
        return this._descriptionEl.value;
    }


    clearErrors() {
        this._errorEl.textContent = "";
        this._nameEl.classList.remove('error');
        this._descriptionEl.classList.remove('error');
    }
    setNameError(message) {
        this._errorEl.textContent = message;
        this._nameEl.classList.add('error');
    }
    setDescriptionError(message) {
        this._errorEl.textContent = message;
        this._descriptionEl.classList.add('error');
    }

    _noneNote() {
        return String.raw`
            <input class="submitForm" type="submit" name="createNote" value="Create note">
        `;
    }

    _createNote() {
        return String.raw`
            <label>
                Name: <span class="mandatory">*</span>
                <input id="name" type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea id="description" id="description" name="description" cols="35" rows="15" ></textarea>
            <p class="error"></p>
            <input class="submitForm" type="submit" name="create" value="Create">
            <a class="submitForm" href="javascript:window.print()">Print</a>
            <input class="submitForm" type="submit" name="cancel" value="Cancel">
            <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
        `;
    }

    _changeNote() {
        return String.raw`
            <label>
                Name: <span class="mandatory">*</span>
                <input id="name" type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea id="description" id="description" name="description" cols="35" rows="15" ></textarea>
            <p class="error"></p>
            <input class="submitForm" type="submit" name="safeChanges" value="Safe changes">
            <a class="submitForm" href="javascript:window.print()">Print</a>
            <input class="submitForm" type="submit" name="cancel" value="Cancel">
            <p> Fields with <span class="mandatory">*</span> are mandatory. </p>
        `;
    }

    _existingNote() {
        return String.raw`
            <label>
                Name:
                <input id="name" readonly type="text" name="name" value="">
            </label>
            <label for="description">
                Description:
            </label>
            <textarea readonly id="description" name="description" cols="35" rows="15" ></textarea>
            <div>
                <input class="submitForm" type="submit" name="change" value="Change">
                <a class="submitForm" href="javascript:window.print()">Print</a>
                <input class="submitForm" type="submit" name="delete" value="Delete">
            </div>
        `;
    }
}

export { DiaryNoteView };