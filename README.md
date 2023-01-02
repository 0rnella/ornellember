# ornellember

This library exists to convert dates to the ornellember format.

## What is ornellember
ornellember is a joke date format based on the [International Fixed Calendar](https://en.wikipedia.org/wiki/International_Fixed_Calendar#:~:text=7%20External%20links-,Rules,the%20total%20to%20365%20days.). It comprises 13 months that are each 28 days in length, except month 13 (known as M), which contains 29 days on normal years and 30 days on leap years.

Previous proposals for the International Fixed Calendar had assumed that the months would conserve the same names, but this format proposes a new paradigm: each month is referred to by its corresponding letter in the Latin alphabet (A-M). This makes translation easier.

### Holidays
The 29th of M is called N -- which is the next alphabetical letter, but also stands for New. N is the day where all humans can usher in the new year, and breathe in the air of renewal.

Every 4 years, we have the 30th of M, which is called O. Again, O is the next alphabetical letter after N, but more importantly, it stands for Ornellember Day! O is the most special calendar holiday of all. It reminds us of the cyclical nature of life, and of the arbitrary nature of calendars.

### Origins
Ornellember was born from [a late-night tweet](https://twitter.com/zerornella/status/1448764828122759170?s=20). The principle is hardly original, especially considering that the International Fixed Calendar proposal is nearly 150 years old. The name `ornellember` was in response to the question of what to name the 13th month, although the decision to use letters for month names was already taken at that point.

## Getting started
Install the package:
```
npm install ornellember
```

Convert a date:
```
import ornellember from 'ornellember';

const date = new Date('June 25, 1979');
const convertedDate = ornellember(date);

convertedDate.day // 9
convertedDate.month // G
```

## Readable properties
The following properties are available to read:

### `.seconds`
The spare seconds. For example, if it is 9 G, 1979 at 13:45:36, `convertedDate.seconds` would return 36.

### `.minutes`
The spare minutes. For example, if it is 9 G, 1979 at 13:45:36, `convertedDate.minutes` would return 45.

### `.hours`
The spare minutes. For example, if it is 9 G, 1979 at 13:45:36, `convertedDate.hours` would return 13, in 24-hour format.

### `.day`
The day of the month. For example, if it is 9 G, 1979, `convertedDate.day` would return 9.

### `.month`
The month. For example, if it is 9 G, 1979, `convertedDate.month` would return G.

### `.year`
The full year. For example, if it is 9 G, 1979, `convertedDate.year` would return 1979.



## Initializing
ornellember accepts 3 possible inputs to initialize. 
1. a Date object
The ornellember object created will be based on the date passed in.
```
const date = new Date('June 25, 1979');
const convertedDate = ornellember(date);
```

2. nothing
The ornellember object created will be based on the current date.

```
const nowInOrnellember = ornellember();
```

3. an ornellember object
The ornellember object created will be a deep clone of the one passed in.

```
const nowInOrnellember = ornellember();

const copy = ornellember(nowInOrnellember)
```

## Methods
### `.format`
Spits out a string with the format of `day month, year`.

```
const date = new Date('June 25, 1979');
const convertedDate = ornellember(date);

convertedDate.format() \\ '9 G, 1979'
```

### `.add`
We can create a copy of a date, adding units of time from it. Important: the original date will not be altered.

```
const firstDayOfYear = ornellember(new Date('January 1, 2000')); \\ 1 A, 2000
const twoMonthsLater = firstDayOfYear.add(2, 'months'); \\ 1 C, 2000
```

### `.subtract`
We can create a copy of a date, adding units of time from it. Important: the original date will not be altered.

```
const firstDayOfYear = ornellember(new Date('January 1, 2000')); \\ 1 A, 2000
const twoMonthsEarlier = firstDayOfYear.subtract(2, 'months'); \\ 1 L, 1999
```

### `.holiday`
Should return the holiday if the current day is a holiday, and null otherwise. Current supported holidays:
N: 29 M (which is December 31st on non-leap years and December 30 on leap years)
O: 30 M (which is December 31st on leap years)

```
const n = ornellember(new Date('December 31, 1999')).holiday(); \\ 'N'
const o = ornellember(new Date('December 31, 2000')).holiday(); \\ 'O'

```

