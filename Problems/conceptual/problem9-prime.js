// you will be provide an array of numbers. you have to return array of prime number from the input array.

function findPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "please provide me an array of number";
    } else {
        // 0,1 can not be prime number
        let primes = [];
        for (let item of arr) {
            if (item > 1) {
                let isPrime = true;
                for (let i = 2; i < item; i++) {
                    if (item % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime === true) {
                    primes.push(item);
                }
            }
        }
        return primes;
    }

}

const numbers = [4, 7, 8, 11, 9, 2, 10];
console.log(findPrimeNumbers(numbers));