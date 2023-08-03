/**
 * Write a function called make_avg() which will take three integers and return the average of those values.
 */

function make_avg(n1, n2, n3) {
    var average = (n1 + n2 + n3) / 3
    return average;
}

var finalMark = make_avg(12, 18, 23);
console.log(finalMark);