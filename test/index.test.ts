import { ornellember } from '../src/index';

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
    })
})