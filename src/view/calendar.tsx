import { CustomDate } from "../model/date";

class CalendarView
{
    private _calendarWrapperEl: any;
    private _calendarBodyEl: any;

    constructor(){
        this._calendarWrapperEl = null;
        this._calendarBodyEl = null;
    }

    init(date: CustomDate, selectedDay: number, noteDays: number[]) {

        this._calendarWrapperEl = document.getElementById("calendar");
        this._calendarWrapperEl.innerHTML = this._calendar(date);

        this._calendarBodyEl = document.querySelector("tbody");
        this._calendarBodyEl.innerHTML = this._calendarBody(date, selectedDay, noteDays);
    }

    selectCell(dayIndex: number) {
        let cell = document.getElementById("day"+String(dayIndex));
        if(cell != null) {
            cell.classList.add("selectedTab");
        }
    }

    deselectCell(dayIndex: number) {
        let cell = document.getElementById("day"+String(dayIndex));
        if(cell != null) {
            cell.classList.remove("selectedTab");
        }
    }

    private _calendar(date: CustomDate) {
        return String.raw`
            <table>
                <thead>
                <tr> 
                    <td colspan="5">
                        <div class="buttonTab">
                            ${date.getMonthName()} ${date.year}
                        </div>
                    </td> 
                    <td>
                        <input class="buttonTab" type="submit" name="changeMonthLeft" value="<">
                    </td> 
                    <td>
                        <input class="buttonTab" type="submit" name="changeMonthRight" value=">">
                    </td> 
                </tr>
                <tr>
                    ${join(CustomDate.getDayShorts().map((day) => String.raw`
                        <td>
                            <div>
                                ${day}
                            </div>
                        </td>
                    `))}
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        `;
    }

    private _calendarBody(date: CustomDate, selectedDay: number, noteDays: number[]) {
        let cells = this._calendarCells(date, selectedDay, noteDays);
        return String.raw`
            ${join(cells.map((row) => String.raw`
	            <tr>
                    ${join(row)}
                </tr>
            `))}
        `;
    }

    private _calendarCells(date: CustomDate, selectedDay: number, noteDays: number[]) {
        let firstDayInMonth = CustomDate.createDate(1, date.month, date.year);
        let dayInWeek = firstDayInMonth.getDayInWeek();
        
        let currentDate = CustomDate.createCurrentDate(); 
        
        let cells = [];
        
        let daysInMonth = firstDayInMonth.getDaysInMonth();
        let j = 2 - dayInWeek;
        while(daysInMonth > 0)
        {
            let row = [];
            for(let i = 0; i < CustomDate.getDayShorts().length; i++)
            {
                if(j < 1 || daysInMonth <= 0)
                {
                    row.push(this._otherMonthCell());
                }
                else
                {
                    let isSelected = false;
                    if(selectedDay === j) {
                        isSelected = true;
                    }
                    if(j === currentDate.day && date.month === currentDate.month && date.year === currentDate.year) {
                        row.push(this._cell(isSelected, "todayTab", j));
                    }
                    else if(noteDays.includes(j)) {
                        row.push(this._cell(isSelected, "noteTab", j));
                    }
                    else {
                        row.push(this._cell(isSelected, "activeCellTab", j));
                    }
                    daysInMonth--;
                }
                j++;
            }
            cells.push(row);
        }
        return cells;
    }

    private _cell(isSelected: boolean, cellClass: "todayTab" | "noteTab" | "activeCellTab", dayIndex: number) {
        return String.raw`
            <td id="day${dayIndex}" ${isSelected ? 'class ="selectedTab"' : ""}>
                    <input class="${cellClass}" type="submit" name="selectDay" value="${dayIndex}">
            </td>
        `;
    }

    private _otherMonthCell() {
        return String.raw`
            <td>
                <div class="deactivatedCellTab">
                    <svg width="20" height="20" viewBox="0 0 10 10">
                        <line x1="0" y1="0" x2="10" y2="10"/>
                        <line x1="0" y1="10" x2="10" y2="0"/>
                    </svg>
                </div>
            </td>
        `;
    }
}

function join(arr: string[]) {
    return arr.reduce((a, b) => a+b, "");
}

export { CalendarView };