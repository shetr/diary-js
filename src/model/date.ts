import { StorageObject } from "../control/storageObject";

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

// TODO: maybe do the attributes typesafe, but that would be hard, so maybe change access rights and maybe mutability
class CustomDate extends StorageObject 
{
    public day = 1;
    public month = 1;
    public year = 1;

    constructor() {
        super("Date");
    }

    static createDate(day: number, month: number, year: number) {
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
        var options: any = { weekday: 'long'}; // TODO: just double check if it could be resolved without any
        return new Intl.DateTimeFormat('en-US', options).format(this.toDate()).toString();
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

    toDate() {
        return new Date(this.year, this.month, this.day);
    }

    toString() {
        return this.getDayInWeekName()+" "+String(this.day)+". "+monthNames[this.month]+" "+String(this.year);
    }

    compare(date: CustomDate) {
        return this.day === date.day && this.month === date.month && this.year === date.year;
    }

    makeCopy() {
        return CustomDate.createDate(this.day, this.month, this.year);
    }
}

export { CustomDate };