import ornellember from '../src/index';

describe('ornellember', () => {
    it('if called with a date, should return an ornellember object with date passed', () => {
        const date = new Date('December 25, 1980');

        expect(ornellember(date).rawDate).toBe(date);
    });

    it('if called with no argument, should return an ornellember object with current date', () => {
        const now = new Date();
        const ornDate = ornellember();
        const timeDiff = Math.abs(ornDate.rawDate.getTime() - now.getTime());

        expect(timeDiff).toBeLessThan(100);
    });

    it('if passed another ornellember day, will return a clone', () => {
        const date1 = ornellember();
        const date2 = ornellember(date1);

        expect(date2).not.toBe(date1);
        expect(date2).toEqual(date1);
    });

    describe('holiday', () => {
        it('should return N for December 31 on a non-leap year', () => {
            const date = new Date('December 31, 2007');
            const ornDate = ornellember(date);

            expect(ornDate.holiday()).toBe('N');
        });

        it('should return N for December 30 on a leap year', () => {
            const date = new Date('December 30, 2008');
            const ornDate = ornellember(date);

            expect(ornDate.holiday()).toBe('N');
        });

        it('should return O for December 31 on a leap year', () => {
            const date = new Date('December 31, 2008');
            const ornDate = ornellember(date);

            expect(ornDate.holiday()).toBe('O');
        });

        it('should return null when it is not a holiday', () => {
            const date = new Date('January 17, 2008');
            const ornDate = ornellember(date);

            expect(ornDate.holiday()).toBe(null);
        });
    })
})