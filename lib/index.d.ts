import { OrnellemberTimeUnit } from './utils';
export declare class Ornellember {
    year: number;
    month: string;
    day: number;
    hours: number;
    minutes: number;
    milliseconds: number;
    rawDate: Date;
    constructor(date: Date);
    clone(): Ornellember;
    add(quantity: number, unit: OrnellemberTimeUnit): Ornellember;
    format(): string;
    holiday(): string | null;
    subtract(quantity: number, unit: OrnellemberTimeUnit): Ornellember;
}
declare const _default: (date?: Ornellember | Date) => Ornellember;
export default _default;
