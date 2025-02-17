
let name1 = prompt("Enter the first name:");
let name2 = prompt("Enter the second name:");


let loveScore = Math.ceil(Math.random() * 100);


console.log(`Love Score for ${name1} & ${name2}: ${loveScore}% `);
alert(`Love Score for ${name1} & ${name2}: ${loveScore}% `);


if (loveScore >= 90) {
    console.log("Perfect match! ");
    alert("Perfect match! ");
} else if (loveScore >= 50) {
    console.log("Good compatibility! ");
    alert("Good compatibility! ");
} else {
    console.log("Maybe just friends! ");
    alert("Maybe just friends! ");
}
