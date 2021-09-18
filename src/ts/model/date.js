import { StorageObject } from "../control/storageObject.js";

let monthNames =
[
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Fiday",
    "Saturday",
    "Sunday"
];

let dayNamesShots = [
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su"
];

class CustomDate extends StorageObject
{
    constructor() {
        super();
        this.day = 1;
        this.month = 1;
        this.year = 1;
    }

    static createDate(day, month, year) {
        let date = new CustomDate();
        date.day = day;
        date.month = month;
        date.year = year;
        return date;
    }

    static createCurrentDate() {
        let date = new Date();
        return this.createDate(date.getDate(), date.getMonth(), date.getFullYear());
    }

    static getDayShorts() {
        return dayNamesShots;
    }

    getMonthName() {
        return monthNames[this.month];
    }

    getDayInWeekName() {
        return dayNames[this.getDayInWeek()];
    }

    getDayInWeekShortName() {
        return dayNamesShots[this.getDayInWeek()];
    }

    getDayInWeek() {
        let date = new Date(this.year, this.month, this.day);
        return date.getDay();
    }

    getDaysInMonth() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return new Date(year, month, 0).getDate();
    }

    incrementMonth() {
        let date = new Date(this.year, this.month + 1, 1);
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
    }

    dencrementMonth() {
        let date = new Date(this.year, this.month - 1, 1);
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
    }

    toString() {
        return dayNames[this.getDayInWeek()]+" "+String(this.day)+". "+monthNames[this.month]+" "+String(this.year);
    }

    compare(date) {
        return this.day == date.day && this.month == date.month && this.year == date.year;
    }

    makeCopy() {
        return CustomDate.createDate(this.day, this.month, this.year);
    }
}

export { CustomDate };