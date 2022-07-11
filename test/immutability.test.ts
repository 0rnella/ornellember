import ornellember from '../src/index';

const readOnlyProperties = ['day', 'month', 'rawDate', 'year', 'hours', 'minutes', 'milliseconds'];
const testDate = new Date('29 April 2022');
let ornTestDate = ornellember(testDate);


describe('read-only properties', () => {
	beforeEach(() => {
		ornTestDate = ornellember(testDate);
	});
	for (const property of readOnlyProperties) {
		it(`${property} should not be overwritten`, () => {
			try {
				ornTestDate[property] = 'test';
			// eslint-disable-next-line no-empty
			} catch (e) {}
    
			expect(ornTestDate[property]).toEqual(ornellember(testDate)[property]);
		});

		it(`attempt to overwrite ${property} should throw read-only error`, () => {
			const reassign = () => {ornTestDate[property] = 'test';};
            
			expect(reassign).toThrowError(/Cannot assign to read only property/);
		});
	}
});