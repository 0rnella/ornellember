import { Ornellember } from "..";

export const getDaysBeforeCurrentMonth = (currentMonthIndex: number, isLeapYear: boolean): number => {

    // then calculate the days of all the months before.
    const daysInMonths = [
        31, // January
        isLeapYear ? 29 : 28, //February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31 // December
    ];

    // how many days before the current month?

    let daysBeforeCurrentMonth = 0;

    for (let i=0; i < currentMonthIndex; i++) {
        daysBeforeCurrentMonth += daysInMonths[i];
    }

    return daysBeforeCurrentMonth;
}

export const getDayNumber = (date: Date) => {
    // first determine if it is a leap year
    const isLeapYear = (date.getFullYear() % 4) === 0;
    const currentMonth = date.getMonth();

    // then determine how many days happened before this current month started
    const daysBeforeCurrentMonth = getDaysBeforeCurrentMonth(currentMonth, isLeapYear);
    
    const dayOfMonth = date.getDate();

    return daysBeforeCurrentMonth + dayOfMonth;

}

export const convertDay = (dayNumber: number) : { day: number, month: string } => {
    const monthLength = 28;
    
    let monthIndex = Math.floor((dayNumber - 1) / monthLength);

    // make sure there are only 13 months (additional days can be added to month 12)
    if (monthIndex > 12) {
        monthIndex = 12;
    }

    const dayOfMonth = dayNumber - (monthIndex * monthLength);

    const monthLetter = String.fromCharCode(97 + monthIndex).toUpperCase();

    return {
        day: dayOfMonth,
        month: monthLetter
    }
}

/*
    This returns the date a new format that I invented, largely based on the International Fixed Calendar
    https://en.wikipedia.org/wiki/International_Fixed_Calendar
    It's mostly a joke but also I think it is logical and fun
*/
export const convertDateToOrnellember = (date: Date) : Partial<Ornellember> => {
    const year = date.getFullYear();

    const dayNumber = getDayNumber(date);
    const convertedDay = convertDay(dayNumber);

    return {...convertedDay, year };
}
