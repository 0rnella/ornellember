"use strict";
exports.__esModule = true;
exports.Ornellember = void 0;
var utils_1 = require("./utils");
var Ornellember = /** @class */ (function () {
    function Ornellember(date) {
        var rawDate = date;
        var converted = (0, utils_1.getOrnellemberDay)(rawDate);
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
        var newDate = (0, utils_1.addToDate)(this.rawDate, quantity, unit);
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
exports.Ornellember = Ornellember;
exports["default"] = (function (date) {
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
});
