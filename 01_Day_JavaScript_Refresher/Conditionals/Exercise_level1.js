let age = 15;

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

let myAge = 15;
let yourAge = 5;

if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
} else if (myAge == yourAge) {
  console.log("We are at the same age.");
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}

let a = 4;
let b = 3;

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

let isEven = 22;

isEven % 2 == 0
  ? console.log(`${isEven} is an even number`)
  : console.log(`${isEven} is an odd number`);
