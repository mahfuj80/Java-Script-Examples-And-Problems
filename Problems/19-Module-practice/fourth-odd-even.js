/**
 * Write a function called odd_even which takes an integer value and tells whether this value is even or odd. You need to do it in 2 ways;
 * Has return + Has Parameter
 * No return + Has parameter
 */

// No return + Has Parameter 
function odd_even(num) {
    if (num % 2 == 0) {
        console.log('even Number')
    } else {
        console.log('Odd number')
    }
}

odd_even(10);


// Has return + Has parameter
function odd_even(num) {
    if (num % 2 == 0) {
        return 'Even Number';
    } else {
        return 'Odd Number';
    }
}

var result = odd_even(15);
console.log(result);