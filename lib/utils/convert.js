"use strict";
exports.__esModule = true;
exports.getOrnellemberDay = exports.convertDay = exports.getDayNumber = exports.isLeapYear = exports.getDaysBeforeCurrentMonth = void 0;
var getDaysBeforeCurrentMonth = function (currentMonthIndex, isLeapYear) {
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
exports.getDaysBeforeCurrentMonth = getDaysBeforeCurrentMonth;
var isLeapYear = function (date) {
    return (date.getFullYear() % 4) === 0;
};
exports.isLeapYear = isLeapYear;
var getDayNumber = function (date) {
    // first determine if it is a leap year
    var isCurrentLeapYear = (0, exports.isLeapYear)(date);
    var currentMonth = date.getMonth();
    // then determine how many days happened before this current month started
    var daysBeforeCurrentMonth = (0, exports.getDaysBeforeCurrentMonth)(currentMonth, isCurrentLeapYear);
    var dayOfMonth = date.getDate();
    return daysBeforeCurrentMonth + dayOfMonth;
};
exports.getDayNumber = getDayNumber;
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
exports.convertDay = convertDay;
/*
    This returns the date a new format that I invented, largely based on the International Fixed Calendar
    https://en.wikipedia.org/wiki/International_Fixed_Calendar
    It's mostly a joke but also I think it is logical and fun
*/
var getOrnellemberDay = function (date) {
    var dayNumber = (0, exports.getDayNumber)(date);
    return (0, exports.convertDay)(dayNumber);
};
exports.getOrnellemberDay = getOrnellemberDay;
