function reverseWord(str) {
    const words = str.split(' ');
    console.log(words);
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    console.log(result);
    console.log(reversed);
}


const myString = "I am a good boy";

reverseWord(myString);