(function(exports){'use strict';var getDaysBeforeCurrentMonth = function (currentMonthIndex, isLeapYear) {
    // then calculate the days of all the months before.
    var daysInMonths = [
        31,
        isLeapYear ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31 // December
    ];
    // how many days before the current month?
    var daysBeforeCurrentMonth = 0;
    for (var i = 0; i < currentMonthIndex; i++) {
        daysBeforeCurrentMonth += daysInMonths[i];
    }
    return daysBeforeCurrentMonth;
};
var isLeapYear = function (date) {
    return (date.getFullYear() % 4) === 0;
};
var getDayNumber = function (date) {
    // first determine if it is a leap year
    var isCurrentLeapYear = isLeapYear(date);
    var currentMonth = date.getMonth();
    // then determine how many days happened before this current month started
    var daysBeforeCurrentMonth = getDaysBeforeCurrentMonth(currentMonth, isCurrentLeapYear);
    var dayOfMonth = date.getDate();
    return daysBeforeCurrentMonth + dayOfMonth;
};
var convertDay = function (dayNumber) {
    var monthLength = 28;
    var monthIndex = Math.floor((dayNumber - 1) / monthLength);
    // make sure there are only 13 months (additional days can be added to month 12)
    if (monthIndex > 12) {
        monthIndex = 12;
    }
    var dayOfMonth = dayNumber - (monthIndex * monthLength);
    var monthLetter = String.fromCharCode(97 + monthIndex).toUpperCase();
    return {
        day: dayOfMonth,
        month: monthLetter
    };
};
/*
    This returns the date a new format that I invented, largely based on the International Fixed Calendar
    https://en.wikipedia.org/wiki/International_Fixed_Calendar
    It's mostly a joke but also I think it is logical and fun
*/
var getOrnellemberDay = function (date) {
    var dayNumber = getDayNumber(date);
    return convertDay(dayNumber);
};/*
    This function adds a certain quantity of a certain Ornellember unit to a Date.
    Two things are important to remember here.
    1. The time units we are adding are Ornellember time units, as they are input by the user.
    2. The original date and the final date are NOT in Ornellember format:
    they are regular Dates from the [Date Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*/
var addToDate = function (originalDate, quantity, unit) {
    var valueToAdd;
    switch (unit) {
        case 'seconds': {
            valueToAdd = quantity * 1000;
            break;
        }
        case 'minutes': {
            valueToAdd = quantity * 1000 * 60;
            break;
        }
        case 'hours': {
            valueToAdd = quantity * 1000 * 60 * 60;
            break;
        }
        case 'days': {
            valueToAdd = quantity * 1000 * 60 * 60 * 24;
            break;
        }
        case 'months': {
            // if we are in the last month of the year 
            if (getDayNumber(originalDate) >= (365 - 29)) {
                if (isLeapYear(originalDate)) {
                    valueToAdd = quantity * 1000 * 60 * 60 * 24 * 30;
                }
                else {
                    valueToAdd = quantity * 1000 * 60 * 60 * 24 * 29;
                }
            }
            else {
                valueToAdd = quantity * 1000 * 60 * 60 * 24 * 28;
            }
            break;
        }
        default: {
            valueToAdd = 0;
            break;
        }
    }
    var newDateValue = originalDate.valueOf() + valueToAdd;
    var newDate = new Date(newDateValue);
    if (unit === 'years') {
        newDate.setFullYear(originalDate.getFullYear() + quantity);
    }
    return newDate;
};var Ornellember = /** @class */ (function () {
    function Ornellember(date) {
        var rawDate = date;
        var converted = getOrnellemberDay(rawDate);
        this.day = converted.day;
        this.month = converted.month;
        this.rawDate = rawDate;
        this.year = rawDate.getFullYear();
        this.hours = rawDate.getHours();
        this.minutes = rawDate.getMinutes();
        this.milliseconds = rawDate.getMilliseconds();
    }
    Ornellember.prototype.clone = function () {
        return new Ornellember(this.rawDate);
    };
    Ornellember.prototype.add = function (quantity, unit) {
        var newDate = addToDate(this.rawDate, quantity, unit);
        return new Ornellember(newDate);
    };
    Ornellember.prototype.format = function () {
        return this.day + " " + this.month + ", " + this.year;
    };
    Ornellember.prototype.holiday = function () {
        if (this.day === 29)
            return 'N';
        if (this.day === 30)
            return 'O';
        return null;
    };
    Ornellember.prototype.subtract = function (quantity, unit) {
        return this.add(-quantity, unit);
    };
    return Ornellember;
}());
var index = (function (date) {
    if (date instanceof Date) {
        return new Ornellember(date);
    }
    if (date instanceof Ornellember) {
        return date.clone();
    }
    if (!date) {
        return new Ornellember(new Date());
    }
    throw new Error('Unexpected input. Accepted types are a Date, an Ornellember instance, or undefined');
});exports.Ornellember=Ornellember;exports["default"]=index;Object.defineProperty(exports,'__esModule',{value:true});return exports;})({});