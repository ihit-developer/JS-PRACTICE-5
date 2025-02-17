
let userName = prompt("Enter your name:");

// Step 2: Display available seats (1 to 30)
let seats = [];
for (let i = 1; i <= 30; i++) {
    seats.push(i);
}
console.log("Available seats:", seats.join(", "));

// Step 3: Generate a random seat number
let seatNumber = Math.ceil(Math.random() * 30);

// Step 4: Assign the seat and display the message
console.log(`Hello ${userName}, your seat number is ${seatNumber}.`);
alert(`Hello ${userName}, your seat number is ${seatNumber}.`);
