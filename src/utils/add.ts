/* 
    This function adds a certain quantity of a certain Ornellember unit to a Date.
    Two things are important to remember here. 
    1. The time units we are adding are Ornellember time units, as they are input by the user.
    2. The original date and the final date are NOT in Ornellember format: 
    they are regular Dates from the [Date Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*/

import {isLeapYear, getDayNumber} from './convert';

export type OrnellemberTimeUnit = 
    'years' |
    'months' |
    'days' |
    'hours' |
    'minutes' |
    'seconds';


export const addToDate = (originalDate: Date, quantity: number, unit: OrnellemberTimeUnit) => {
	let valueToAdd;

	switch (unit) {
	case 'seconds' : {
		valueToAdd = quantity * 1000;
		break;
	}
	case 'minutes' : {
		valueToAdd = quantity * 1000 * 60;
		break;
	}
	case 'hours' : {
		valueToAdd = quantity * 1000 * 60 * 60;
		break;
	}
	case 'days' : {
		valueToAdd = quantity * 1000 * 60 * 60 * 24;
		break;
	}
	case 'months' : {
		// if we are in the last month of the year 
		if (getDayNumber(originalDate) >= (365-29)) {
			if (isLeapYear(originalDate)) {
				valueToAdd = quantity * 1000 * 60 * 60 * 24 * 30;
			} else {
				valueToAdd = quantity * 1000 * 60 * 60 * 24 * 29;
			}
		} else {
			valueToAdd = quantity * 1000 * 60 * 60 * 24 * 28;
		}
		break;
	}
	default : {
		valueToAdd = 0;
		break;
	}
	}

	const newDateValue = originalDate.valueOf() + valueToAdd;

	const newDate = new Date(newDateValue);
    
	if (unit === 'years') {
		newDate.setFullYear(originalDate.getFullYear() + quantity);
	}

	return newDate;
};