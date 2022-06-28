// If statement with comparison
let myAge = 10;

if (myAge === 5) {
  console.log('You too young');
}
if (myAge === 17) {
  console.log('So Sweet');
}
if (myAge > 17 && myAge <= 38) {
  console.log('myAge is beetwen 17 and 30');
}

let dadAge = 9;
if (dadAge < myAge) {
  console.log(dadAge);
}

// if else statement
let number = 3;
if (number % 2 === 0) {
  console.log('Genap');
} else {
  console.log('Ganjil');
}

// if, else if, else
let hour = 11;
if (hour < 12) {
  console.log('selamat pagi');
} else if (hour < 18) {
  console.log('selamat sore');
} else {
  console.log('selamat malam');
}

// nested if statement
let v1 = 400;
let v2 = 700;
if (v1 === 400) {
  if (v2 === 700) {
    console.log('value of v1 is 400 and v2 is 700');
  }
}
