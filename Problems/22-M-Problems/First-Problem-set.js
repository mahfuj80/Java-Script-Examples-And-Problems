// ----------------------- One  ---------------
/* 1. If I tell you to write a string type variable. Enter a boolean type variable or enter a number type variable. Can you write that? If you can, open Visual Studio code and write it. */

let string = 'Hello World';
console.log(typeof string);
let boolean = true;
console.log(typeof boolean);
let number = 8;
console.log(typeof number);

// ---------------------- Two -----------------
/**
 * 2. Do you know when to write a variable with let and when to write a variable with const? If you can write then write. And it can be changed again by writing the variable with that. So if you declare a variable with that can be changed. Change its value. That is, just declare two variables with let and const. Then change the value of any one. If this let and const are hot head, don't take tension. This will be further discussed in the next milestone after the next milestone.
 */

let changeable = 88;
changeable = 99;
console.log(changeable);
const unchangeable = 33;


// -------------------Three-------------------
/**
 * 3. Do you know how to add, subtract, multiply, divide between two variables? That is, do you know the use of +, -, *, /, %. Then write two variables of type number and then add them and put its value in another variable. Similarly, subtract, multiply, divide and find the quotient between those two variables.
 */

const a = 2;
const b = 4;

const addition = a + b;
const subtraction = b - a;
const multiplication = a * b;
const division = b / a;
const modulus = b % a;
console.log('Two Numbers are: ', a, b, "Addition: ", addition, 'Subtraction: ', subtraction, 'Multiplication: ', multiplication, 'Division: ', division, 'Modulus: ', modulus)

// ----------------four ------------------
/**
 * 4. Can you compare two variables? You can compare. Of the two variables, the first is less than, greater than, unequal to, equal to, less than or equal to, greater than or equal to the second. You can check these. That is, you can use <, >, ==, !=, <=, >= symbols. Then declare two number type variables and compare them in six ways and write the code.
 */

const c = 1;
const d = 2;
console.log(c == d);
console.log(c >= d);
console.log(c <= d);
console.log(c > d);
console.log(c < d);
console.log(c != d);

// ----------------------Five-----------------
/**
 * 5. If you are asked to fulfill two conditions. And both of the two conditions must be fulfilled. So can you check it? Similarly if you say you can fulfill either of the two conditions. ie you && and || Can you use it? If you can, write this code yourself.
 */

const n1 = 2;
const n2 = 2;
if (n1 > n2 && n1 === n2) {
    console.log('They fulfill 2 Conditions');
} else if (n1 < n2 || n1 === n2) {
    console.log('They fulfill  at last 1 Conditions');
} else {
    console.log('They Do not fulfill any conditions');
}


// -----------------Six ----------------
/**
 * 6. Will you do something if you fulfill a condition? You can write code that does something else if the condition is not met. That is, can you write if-else code? Write a code if you can
 */

const num = 3;
if (num !== 3) {
    console.log('No')
} else if (num === 3) {
    console.log('Yes');
}


// ---------------------Seven-------------
/**
 * 7. If you are asked to use a while loop to display all the odd numbers from 7 to 19. Can you show it? Write that code if you can.
 */

n = 7;
while (n <= 19) {
    console.log(n);
    n += 2;
}

// ----------------Eight----------------
/**
 * 8. If you are told you will declare an array. And find out how many elements are in it. The element of the fourth position in that array should be changed. Add two elements to the array. And an element must be removed. can you do that
 */

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr, 'There are', arr.length, 'Element in the array');
arr[3] = 44;
console.log(arr, '4th position is changed')
arr.push(7);
arr.push(8);
arr.shift();
console.log(arr, 'Two element added and 1 element shift');

// -------------------Nine-------------
/**
 * 9. Can you display all the elements of an array with a for loop? Be it regular for loop or for of. If so, write a code in that style.
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < array.length; i++) {
    const index = i;
    const element = array[index];
    console.log('Index: ', index, 'Element: ', element);
}

// ---------------Ten------------------
/**
 * 10. If you are told If there are numbers greater than 80 in an array, can you show them in the console log? Then you do that code
 */

const Array = [38, 80, 100, 90, 99, 83, 22, 33, 38, 43, 86, 89, 23, 23,];
for (item of Array) {
    if (item > 80) {
        console.log('These number are greater than 80 from the Array: ', item);
    }

}

// ---------------------Eleven ---------------
/**
 * 11. The product of three numbers should be calculated and returned as the final result output. Can you write that code. If you can then write that code.
 */

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log('Addition of Three number Using function: ', add(2, 2, 2));


// ---------------------Twelve--------------
/**
 * 12. Declare an object. It will have three properties. And change the value of a property.
 */

const object = {
    name: 'Mahfujur Rahman',
    age: 23,
    height: '6.8 Feet'
}

console.log(object);
object.height = '5.8 Feet';
console.log('After Changing height: ', object);

// --------------End--------------