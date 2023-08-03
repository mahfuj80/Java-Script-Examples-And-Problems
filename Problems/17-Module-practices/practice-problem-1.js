// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
// finding the banana index
var index = fruits.indexOf('Banana');
console.log(index);
// Replace the banana with the mango.
fruits[1] = 'Mango';
console.log(fruits);
// Remove the Orange item from the list
fruits.pop();
console.log(fruits);
// Add the Watermelon to the fruits list
fruits.push('Watermelon');
console.log(fruits);