//  1 + 2 + 3 + 4 + 5 + 6 + 7
function getSumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= 7; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
