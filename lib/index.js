"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.convertDateToOrnellember = exports.convertDay = exports.getDayNumber = exports.getDaysBeforeCurrentMonth = void 0;
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
var getDayNumber = function (date) {
    // first determine if it is a leap year
    var isLeapYear = (date.getFullYear() % 4) === 0;
    var currentMonth = date.getMonth();
    // then determine how many days happened before this current month started
    var daysBeforeCurrentMonth = (0, exports.getDaysBeforeCurrentMonth)(currentMonth, isLeapYear);
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
var convertDateToOrnellember = function (date) {
    var year = date.getFullYear();
    var dayNumber = (0, exports.getDayNumber)(date);
    var convertedDay = (0, exports.convertDay)(dayNumber);
    return __assign(__assign({}, convertedDay), { year: year });
};
exports.convertDateToOrnellember = convertDateToOrnellember;
