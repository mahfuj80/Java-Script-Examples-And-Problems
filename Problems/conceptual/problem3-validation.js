// validation and math 
/* 
function mindGame(x) {
    if (typeof x !== 'number') {
        return "please provide a number";
    } else if (x <= 0) {
        return 'Please provide a positive number';
    } else {
        const result = (((x * 3) + 10) / 2) - 5
        return result;
    }
}
 */

// different way
console.log(mindGame(0));
function mindGame(x) {
    if (typeof x !== 'number' || x <= 0) {
        return 'Please provide a valid number/positive number'
    } else {
        const result = (((x * 3) + 10) / 2) - 5
        return result;
    }
}

console.log(mindGame(50));