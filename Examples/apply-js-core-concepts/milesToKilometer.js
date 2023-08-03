function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const officeMile = 200;
const officeKilometer = milesToKilometer(officeMile);
console.log('Home To Office Distance: ', officeKilometer, 'Kilometer');
