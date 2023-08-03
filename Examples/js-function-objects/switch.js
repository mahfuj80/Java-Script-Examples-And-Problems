const color = 'yellow';
if (color === 'green') {
    console.log('You are my green friend');
} else if (color === 'blue') {
    console.log('You are a green friend');
} else if (color === 'red') {
    console.log('You are a red friend');
} else if (color === 'white') {
    console.log('You are white friend');
} else if (color === 'yellow') {
    console.log('You are a yellow himu friend');
} else {
    console.log('You are a black black friend');
}

// alternative switch
switch (color) {
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a blue friend');
        break;
    case 'white':
        console.log('You are a white friend');
        break;
    case 'red':
        console.log('You are a red friend');
        break;
    case 'yellow':
        console.log('You are a himu friend');
        break;
    default:
        console.log('You are a kala kala friend');
}       