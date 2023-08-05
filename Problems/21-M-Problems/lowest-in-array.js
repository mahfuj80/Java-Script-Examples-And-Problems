// Homework: Write a function to get the lowest number in an array


function minInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const findSmallest = [167, 190, 120, 165, 137];
const smallest = minInArray(findSmallest);
console.log('Smallest Person is: ', smallest);