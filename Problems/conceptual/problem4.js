/**
 * call a function;
 * input: 6;
 * output: -1;
 * input -15;
 * output: -22;
 * input: 15;
 * Output: 30;
 * 
 */

function isLGSeven(x) {
    if (typeof x !== "number") {
        return 'Please Provide me a number';
    } else {
        const differ = x - 7;
        if (differ < 7) {
            return differ;
        } else {
            return x * 2;
        }
    }
}

console.log(isLGSeven(15));