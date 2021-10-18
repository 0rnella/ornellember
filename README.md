# ornellember

This library exists to convert dates to Ornellember, 

## What is Ornellember
Ornellember is a joke date format based on the [International Fixed Calendar](https://en.wikipedia.org/wiki/International_Fixed_Calendar#:~:text=7%20External%20links-,Rules,the%20total%20to%20365%20days.). It comprises 13 days that are each 28 days in length, except month 13, which contains 29 days on normal years and 30 days on leap years.

Previous proposals for the International Fixed Calendar had assumed that the months would conserve the same names, but this format proposes a new paradigm: each month is referred to by its corresponding letter in the Latin alphabet (A-M). This makes translation easier.

## How to use
Install Ornellember: 
```npm install ornellember
```

Convert a date:
```
import { convertDateToOrnellember } from 'ornellember';

const date = new Date('June 25, 1992');
const convertedDate = convertDateToOrnellember(date);

// { day: 9, month: 'G', year: 1992 }
```

The returned value will be an object with 3 properties, day (the day of month), month (the month represented by a letter), year (the year).
