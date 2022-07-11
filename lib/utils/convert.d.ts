import { Ornellember } from '..';
export declare const getDaysBeforeCurrentMonth: (currentMonthIndex: number, isLeapYear: boolean) => number;
export declare const isLeapYear: (date: Date) => boolean;
export declare const getDayNumber: (date: Date) => number;
export declare const convertDay: (dayNumber: number) => {
    day: number;
    month: string;
};
export declare const getOrnellemberDay: (date: Date) => Partial<Ornellember>;
