/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

const make_avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum / arr.length;
    return average;
}

console.log(make_avg([1, 2, 3, 7, 8]));


/* const arr = [1, 2, 3, 4, 5];

var add = 0;

for (var number of arr) {
    add += number;
}

unaverage = add / arr.length;

console.log(unaverage); */

