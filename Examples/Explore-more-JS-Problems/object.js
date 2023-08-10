const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{ name: 'no.1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('Acting like sakib kahan')
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

nayok.act();
console.log();
// console.log(nayok.act);
// console.log(student.friends);

