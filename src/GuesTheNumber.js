let random_num = Math.ceil(Math.random() * 100);
console.log(random_num);

let tries = 0

while (true) {
    let user_input = prompt("Please enter a number");
    let user_n = parseInt(user_input)
    if (random_num === user_n) {
        tries++
        console.log('You guessed the number in '+tries+' tries')

        break;
    } else if (random_num >= user_n) {
        tries++
        console.log('Try a higher number!')
    } else if (random_num <= user_n) {
        tries++
        console.log('Try a lower number!')
    }
}

