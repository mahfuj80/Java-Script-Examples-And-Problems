const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        // console.log(unique.includes(name));
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);