let
    count = 0;

while (count < 5)
{console.log('Count is: ' + count);
    count++;
}
let
    weather = 'sunny';

if (weather === 'sunny')
{
    console.log('It\'s a nice day!');
}
else {
    console.log('Grab an umbrella.');
}

console.log('Hello, world!');


function example() {
    var x = 5;
    let y = 10;
    console.log(x); // Работи
    console.log(y); // Грешка, y не е дефиниран
}
function getUserInput() {
    try {
        let userInput = prompt('Please enter a number:');
        if (isNaN(userInput)) {
            throw new Error('This is not a number!');
        }
        console.log('You entered: ' + userInput);
    } catch (error) {
        console.error('Error: '  + error.message);
    }
}

getUserInput();



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 100);
console.log(randomNumber); // Outputs a random integer between 1 and 100
