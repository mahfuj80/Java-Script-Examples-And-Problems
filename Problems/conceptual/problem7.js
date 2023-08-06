// function name printDetails(). you will be provided an object. you have to ue the properties of the object  and make a meaning full sentence. if there are any property missing you have to print there (nai);


/* 
const obj = {
    name: 'Mehedy',
    age: 26,
    email:"abc@gmail.com"
}
Amar namme mehedy amar boyos 26, amar email abc@GamepadHapticActuator.com, amar bou nai. 
*/

function printDetails(person) {
    if (typeof person !== "object") {
        return "please provide me a valid object"
    } else {
        const name = person.name || 'nai';
        const age = person.age || 'nai';
        const email = person.email || 'nai';
        const bou = person.bou || 'nai';
        // console.log(name, age, email, bou);
        return "amar naem" + name + "amar boyos: " + 'amar email' + email + 'amar bou: ' + bou;
    }
}

const obj = {
    name: 'Mehedy',
    age: 26,
    email: "abc@gmail.com"
}

console.log(printDetails(obj));