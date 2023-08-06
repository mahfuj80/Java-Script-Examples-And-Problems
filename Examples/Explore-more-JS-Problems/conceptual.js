// Check the number is integer or not
/* 
function isInteger(number) {
    if (typeof number !== 'number') {
        return 'please provide a number';
    } else {
        if (number % 1 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isInteger(500));
 */
/**
 * call a function isJavaScriptFile(); give a parameter as a string. and string will be file name. and also check the file type.
 */
/* 
function isJavaScriptFile(filename) {
    if (typeof filename !== "string") {
        return 'Please provide me a valid file name (string)'
    } else {
        // if (filename.toLowerCase().endsWith('.js')) {
        //     return true;
        // } else {
        //     return false;
        // }
        return filename.toLowerCase().endsWith('.js')
    }
}
console.log(isJavaScriptFile('hello.Js'));
 */


function isJavaScriptFile(filename) {
    if (typeof filename !== "string") {
        return 'Please provide me a valid file name (string)'
    } else {
        // hello.world.html.js
        const arr = filename.split('.');
        const lastElement = arr.pop();
        // return lastElement.toLowerCase() === 'js';
        if (lastElement.toLowerCase() === 'js') {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isJavaScriptFile('hello.world.html.js'));
