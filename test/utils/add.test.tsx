import { addToDate } from '../../src/utils';

describe ('addToDate', () => {
	describe('seconds:', () => {
		it('should add seconds in a simple addition', () => {
			const startDate = new Date('November 8, 2001 1:02:44');
    
			const fifteenSecLater = addToDate(startDate, 15, 'seconds');
    
			expect(fifteenSecLater.getSeconds()).toBe(59);
		});
    
		it('should update other units if affected', () => {
			const startDate = new Date('January 31, 2014 23:59:57');
    
			const fiveSecLater = addToDate(startDate, 5, 'seconds');
    
			expect(fiveSecLater.getMinutes()).toBe(0);
			expect(fiveSecLater.getSeconds()).toBe(2);
			expect(fiveSecLater.getDate()).toBe(1);
		});
	});

	describe('minutes:', () => {
		it('should add minutes in a simple addition', () => {
			const startDate = new Date('November 8, 2001 1:02');
    
			const tenMinLater = addToDate(startDate, 10, 'minutes');
    
			expect(tenMinLater.getMinutes()).toBe(12);
		});
    
		it('should update other units if affected', () => {
			const startDate = new Date('January 31, 2014 23:42');
    
			const thirtyMinLater = addToDate(startDate, 30, 'minutes');
    
			expect(thirtyMinLater.getMinutes()).toBe(12);
			expect(thirtyMinLater.getDate()).toBe(1);
		});
	});

	describe('hours:', () => {
		it('should add hours in a simple addition', () => {
			const startDate = new Date('November 8, 2001 1:02');
    
			const sevenHrsLater = addToDate(startDate, 7, 'hours');
    
			expect(sevenHrsLater.getHours()).toBe(8);
		});

		it('should update other units if affected', () => {
			const startDate = new Date('November 30, 1979 23:42');
    
			const twoHrsLater = addToDate(startDate, 2, 'hours');
    
			expect(twoHrsLater.getHours()).toBe(1);
			expect(twoHrsLater.getDate()).toBe(1);
		});
	});

	describe('days:', () => {
		it('should add days in a simple addition', () => {
			const startDate = new Date('November 8, 2001');
    
			const fourteenDaysLater = addToDate(startDate, 14, 'days');
    
			expect(fourteenDaysLater.getDate()).toBe(22);
		});

		it('should update other units if affected', () => {
			const startDate = new Date('November 27, 1979');
    
			const fiveDaysLater = addToDate(startDate, 5, 'days');
    
			expect(fiveDaysLater.getDate()).toBe(2);
		});
	});

	describe('months', () => {
		it('should update by ornellember months', () => {
			const startDate = new Date('February 8, 2001');

			const twoMonthsLater = addToDate(startDate, 2, 'months');

			expect(twoMonthsLater.getDay()).toBe(startDate.getDay());
			expect(twoMonthsLater.getDate()).toBe(5);
			expect(twoMonthsLater.getMonth()).toBe(3);
		});

		it('at the end of the year in a normal year, should update by ornellember months', () => {
			const startDate = new Date('December 11, 2001');

			const oneMonthLater = addToDate(startDate, 1, 'months');

			expect(oneMonthLater.getDay()).toBe(startDate.getDay() + 1);
			expect(oneMonthLater.getMonth()).toBe(0);
			expect(oneMonthLater.getDate()).toBe(9);
		});

		it('at the end of the year in a leap year, should update by ornellember months', () => {
			const startDate = new Date('December 11, 2000');

			const oneMonthLater = addToDate(startDate, 1, 'months');

			expect(oneMonthLater.getDay()).toBe(startDate.getDay() + 2);
			expect(oneMonthLater.getMonth()).toBe(0);
			expect(oneMonthLater.getDate()).toBe(10);
		});
	});

	describe('years', () => {
		it('should update the year', () => {
			const startDate = new Date('January 24, 1996');
			const eightYearsLater = addToDate(startDate, 8, 'years');

			expect(eightYearsLater.getFullYear()).toBe(2004);
		});
	});
});