const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada rong jomese sada kala.'


const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// console.log(doesExist);
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// ---------------------------------------
// indexOf

console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));
//

if (lyrics.indexOf('sada') !== -1) {
    console.log('Exists Inside the String');
} else {
    console.log('Can not find it');
}

// startsWith
console.log(lyrics.startsWith('2mi'));


// endsWith 
const fileName = 'nybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));
