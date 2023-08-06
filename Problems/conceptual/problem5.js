
// const x = false;
// console.log(!x); // !false == true;

function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return 'Please provide me an array of number';
    } else {
        let badData = 0;
        // for (let i = 0; i < arr.length; i++) {
        //     if (typeof arr[i] !== 'number') {
        //         return 'please provide me an array of number';
        //     } else {
        //         if (arr[i] < 0) {
        //             badData++;
        //         }
        //     }
        // }
        // return badData;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'please provide me an array of number';
            } else {
                if (arr[i] < 0) {
                    badData++;
                }
            }
        }
        return badData;
    }
}

const array = [3, -3, -7];
console.log(findingBadData(array))