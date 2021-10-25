import { getOrnellemberDay, OrnellemberTimeUnit, addToDate } from "./utils";

export class Ornellember {
    year: number;
    month: string;
    day: number;
    hours: number;
    minutes: number;
    milliseconds: number;
    rawDate: Date;

    constructor(date: Date) {

        const rawDate = date;

        const converted = getOrnellemberDay(rawDate);
        this.day = converted.day;
        this.month = converted.month;
        this.rawDate = rawDate;

        this.year = rawDate.getFullYear();
        this.hours = rawDate.getHours();
        this.minutes = rawDate.getMinutes();
        this.milliseconds = rawDate.getMilliseconds();
    }

    clone() : Ornellember {
        return new Ornellember(this.rawDate);
    }

    add(quantity: number, unit: OrnellemberTimeUnit) : Ornellember {
        const newDate = addToDate(this.rawDate, quantity, unit);

        return new Ornellember(newDate);
    }

    format() : string {
        return `${this.day} ${this.month}, ${this.year}`
    }

    holiday () : string|null {
        if (this.day === 29) return 'N';
        if (this.day === 30) return 'O';

        return null;
    }

    subtract(quantity: number, unit: OrnellemberTimeUnit) : Ornellember {
        return this.add(-quantity, unit);
    }
}

export default (date?: any): Ornellember => {
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
}