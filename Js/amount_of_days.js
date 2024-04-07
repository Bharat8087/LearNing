function daysOfAYear(year) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    return isLeapYear ? 366 : 365;
}

console.log(daysOfAYear(2022));
console.log(daysOfAYear(2024));
console.log(daysOfAYear(1900));
console.log(daysOfAYear(2000));