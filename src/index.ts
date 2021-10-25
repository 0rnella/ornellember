import { convertDateToOrnellember  } from "./utils";
export class Ornellember {
    day: number;
    month: string;
    year: number;
    rawDate: Date;

    constructor(date: Date) {

        const rawDate = date;

        const converted = convertDateToOrnellember(rawDate);
        this.day = converted.day;
        this.month = converted.month;
        this.year = converted.year;
        this.rawDate = rawDate;
    }

    clone() {
        return new Ornellember(this.rawDate);
    }
}

export const ornellember = (date?: any): Ornellember => {
    if (date instanceof Date) {
        return new Ornellember(date);
    }

    if (date instanceof Ornellember) {
        return date.clone();
    }

    if (!date) {
        return new Ornellember(new Date());
    }
}