// --------------PROBLEM ONE-----------------
/**
 * 1. Write a simple function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if this function is called a fit, it will tell how many inches it is as a return.
 */
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}
const Inch = feetToInch(3)
console.log("After converting feet get: ", Inch, 'inch');
// --------------PROBLEM TWO-----------------
/**
 * 2. Write a function with the exact name of the function centimeterToMeter. One would give centimeters as input to this function and return the result after converting those centimeters to meters.
 */
function centimeterToMeter(cm) {
    const meter = cm / 100;
    return meter;
}
const meter = centimeterToMeter(300);
console.log('300 cm = ', meter, 'Meter');

// --------------PROBLEM THREE-----------------
/**
 * **3. Write another function whose name The function named paperRequirements will have three parameters as parameters of this function. The first parameter will be how many copies of the first book you want to print. The second parameter will be how many copies of the second book you want to print. And the third parameter will be how many copies of the third book you want to print. That is, how many copies of a book will be printed will be taken as a parameter.**

**Watch carefully this time.**

**100 pages will be required to print the first book**

**200 pages will be required to print the second book**

**300 pages will be required to print the third book**

**Now your job is to write a function called paperRequirements so that Calling that function will tell how many copies of a book will be required as a parameter. And the function will calculate and tell you how many pages of paper you will need in total.**

**Will return number as answer.**
 */

function paperRequirements(a, b, c) {
    return a + b + c;
}

const pages = paperRequirements(100, 200, 300);
console.log("Total we need: ", pages, 'Pages');


// --------------PROBLEM FOUR-----------------
/**
 * 4. Write a function. The name of this function will be bestFriend then the function will take an array as input parameter. That array will contain the names of all your friends. Now your task is to return the name of the friend whose name is the largest. In this case you should return the name ie the friend's name (string).
 */
function bestFriend(friends) {
    let longFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const index = i;
        const element = friends[index];
        if (longFriend.length < element.length) {
            longFriend = element;
        }
    }
    return longFriend;

}

const bestFriends = ['ablu', 'dablu biswas', 'kablus', 'tablu molla islam', 'lablus'];

const longFriend = bestFriend(bestFriends);
console.log('Longest Name of my friend: ', longFriend);


// --------------PROBLEM FIVE-----------------
/**
 * 5. This can be a little tricky. An array will contain many numbers. Your task is to check the numbers one by one. and if the numbers are positive numbers. That is, zero or greater than zero, then put them in an array. And if the number is negative. Then the loop will stop. and as many positive numbers are found until the loop is closed. Will return them.
 */


function positive(numbers) {
    let numbers1 = [];
    for (item of numbers) {
        if (item >= 0) {
            numbers1.push(item);
        } else {
            break
        }
    }
    return numbers1;
}

const numbers = [0, 1, 3, 4, 8, 9, 5, 6, 7, -1, 43, 22];
const positiveNumbers = positive(numbers);
console.log(positiveNumbers);

// --------------------END------------------
