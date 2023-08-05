let first = 5;
let second = 7;
// This is wrong Approach
// first = second;
// second = first;

// Approach: 1;
/* const temp = first;
first = second;
second = temp;
console.log(first, second);
*/

// Approach: 2 -----Destructuring
[first, second] = [second, first];
console.log(first, second);
