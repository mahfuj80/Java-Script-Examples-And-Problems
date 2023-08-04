
console.log('Multiple Ways to Find Leap Year')

/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
 */

/* 
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}

*/

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                return ("Leap year.");
            } else {
                return ("Not leap year.");
            }
        } else {
            return ("Leap year.");
        }
    } else {
        return ("Not leap year.");
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('My Year is Leap Year: ', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year is Leap Year: ', isHerYearLeapYear);


// Javascript program to check
// for a leap year

function checkYear(year) {
    // If a year is multiple of 400,
    // then it is a leap year
    if (year % 400 == 0)
        return true;

    // Else If a year is multiple of 100,
    // then it is not a leap year
    if (year % 100 == 0)
        return false;

    // Else If a year is multiple of 4,
    // then it is a leap year
    if (year % 4 == 0)
        return true;
    return false;
}

// Driver method

let year = 2000;
console.log(checkYear(2000) ? "Leap Year" : "Not a Leap Year");



