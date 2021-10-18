declare type OrnellemberDay = {
    day: number;
    month: string;
    year: number;
};
export declare const getDaysBeforeCurrentMonth: (currentMonthIndex: number, isLeapYear: boolean) => number;
export declare const getDayNumber: (date: Date) => number;
export declare const convertDay: (dayNumber: number) => {
    day: number;
    month: string;
};
export declare const convertDateToOrnellember: (date: Date) => OrnellemberDay;
export {};
