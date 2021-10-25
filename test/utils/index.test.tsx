import { convertDay, getDaysBeforeCurrentMonth, getDayNumber } from '../../src/utils/index';

describe('Get Date' , () => {
    describe('Get days before current month:', () => {
        it('should return 0 for 0 (January)', () => {
            const daysBeforeJan = getDaysBeforeCurrentMonth(0, true);
            expect(daysBeforeJan).toBe(0);
        });

        it('should return 31 for 1 (February)', () => {
            const daysBeforeFeb = getDaysBeforeCurrentMonth(1, true);
            expect(daysBeforeFeb).toBe(31);
        });

        it('should return 365-31 for 11 (December) on a non-leap year', () => {
            const daysBeforeDec = getDaysBeforeCurrentMonth(11, false);
            expect(daysBeforeDec).toBe(365-31);
        });

        describe('Leap year:', () => {

            it('For January and February, the result should be the same regardless of leap year', () => {

                const daysBeforeJanOnLeapYear = getDaysBeforeCurrentMonth(0, true);
                const daysBeforeJanOnNonLeapYear = getDaysBeforeCurrentMonth(0, false);

                const daysBeforeFebOnLeapYear = getDaysBeforeCurrentMonth(1, true);
                const daysBeforeFebOnNonLeapYear = getDaysBeforeCurrentMonth(1, false);

                expect(daysBeforeJanOnLeapYear).toBe(daysBeforeJanOnNonLeapYear);
                expect(daysBeforeFebOnLeapYear).toBe(daysBeforeFebOnNonLeapYear);
            });

            it('For any month after Feb, the result on a leap year should be 1 more', () => {
                const randomMonth = (2 + Math.floor(Math.random() * 9));

                const daysBeforeMonthOnLeapYear = getDaysBeforeCurrentMonth(randomMonth, true);
                const daysBeforeMonthOnNonLeapYear = getDaysBeforeCurrentMonth(randomMonth, false);

                expect(daysBeforeMonthOnLeapYear).toBe(daysBeforeMonthOnNonLeapYear + 1);
            });
        })
    })

    describe('getDayNumber', () => {
        it('for January 1, should return 1', () => {
            const jan1of1980 = new Date(1980, 0, 1);
            const jan1of2021 = new Date('January 1, 2021 00:20:18');

            expect(getDayNumber(jan1of1980)).toBe(1);
            expect(getDayNumber(jan1of2021)).toBe(1);
        })

        it('for Dec 31, should return 366 on a leap yar', () => {
            const dec31of1980 = new Date(1980, 11, 31);
            const dec31of2020 = new Date('December 31, 2020');

            expect(getDayNumber(dec31of1980)).toBe(366);
            expect(getDayNumber(dec31of2020)).toBe(366);
        })

        it('for Dec 31, should return 365 on a non-leap yar', () => {
            const dec31of1983 = new Date(1983, 11, 31);
            const dec31of2021 = new Date('December 31, 2021');

            expect(getDayNumber(dec31of1983)).toBe(365);
            expect(getDayNumber(dec31of2021)).toBe(365);
        })
    });

    describe('convertDate', () => {
        it('for 1, should return day 1 month A', () => {
            expect(convertDay(1)).toEqual({month: 'A', day: 1});
        })

        it('for 29, should return day 1 month B', () => {
            expect(convertDay(29)).toEqual({month: 'B', day: 1});
        })

        it('for 28, should return day 28 month A', () => {
            expect(convertDay(28)).toEqual({month: 'A', day: 28});
        })

        it('for 365, should return day 29 month M', () => {
            expect(convertDay(365)).toEqual({month: 'M', day: 29});
        })

        it('for 366, should return day 30 month M', () => {
            expect(convertDay(366)).toEqual({month: 'M', day: 30});
        })
    });
});