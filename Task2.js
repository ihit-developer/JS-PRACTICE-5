
let userName = prompt("Enter your name:");

let luckyNumber = Math.ceil(Math.random() * 100);


console.log(`${userName}, your lucky number is ${luckyNumber}.`);
alert(`${userName}, your lucky number is ${luckyNumber}.`);


if (luckyNumber === 50) {
    console.log("You won a special prize!");
    alert("You won a special prize!");
}
