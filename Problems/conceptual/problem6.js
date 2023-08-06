// convert gems into diamond
function gemsToDiamond(x, y, z) {
    if (typeof x !== "number" || typeof y !== 'number' || typeof z !== 'number') {
        return "please provide me valid number";
    } else if (x < 0 || y < 0 || z < 0) {
        return "please provide me all positive numbers";
    } else if (x % 1 !== 0 || y % 1 !== 0 || z % 1 !== 0) {
        return 'please provide integer number';
    } else {
        /**
         * 1st friends power = 21
         * 2nd friends power = 32
         * 3rd friends power = 43
         */
        const friend1 = 21;
        const friend2 = 32;
        const friend3 = 43;

        const total = (x * friend1) + (friend2 * y) + (z * friend3);
        if (total > 2000) {
            return total - 2000;
        } else {
            return total;
        }
    }
}

console.log(gemsToDiamond(100, 5.5, 1));