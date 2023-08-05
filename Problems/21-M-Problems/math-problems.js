/**
 * Problem: 1;
 * Write a function that will take 3 numbers will return the max number;
 * Write a function that will take 3 parameters and will return the min number
 *
 * (First time do it using if-else & second time do it using Math.min or Math.max);
 */

// --------------------1st Done --------------

function getMax(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n3 && n2 > n1) {
        return n2;
    } else {
        return n3;
    }
}

const maxNumber = getMax(55, 88, 96);
console.log('Max Number Is: ', maxNumber);


// --------------------------2nd Done----------

function getMin(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        return n1;
    } else if (n2 < n3 && n2 < n1) {
        return n2;
    } else {
        return n3;
    }
}

const minNumber = getMin(55, 88, 96);
console.log('Minimum Number Is: ', minNumber);


// ------------------3rd Way -------------

function getMaxUsingMath(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

const maxNumberUsingMath = getMaxUsingMath(55, 88, 400);
console.log('Max Number Is: ', maxNumberUsingMath);

// ------------------ 4th Way -------------

function getMinUsingMath(n1, n2, n3) {
    return Math.min(n1, n2, n3);
}

const minNumberUsingMath = getMinUsingMath(5, 88, 400);
console.log('Max Number Is: ', minNumberUsingMath);