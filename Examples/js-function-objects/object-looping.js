// array vs objects
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen']
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 12
}


var shoppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCard);
console.log(keys);

const values = Object.values(shoppingCard);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop
for (propertyName in shoppingCard) {
    const value = shoppingCard[propertyName];
    console.log(propertyName, value);
}