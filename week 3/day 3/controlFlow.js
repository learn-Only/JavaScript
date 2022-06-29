console.log('========================If statement with comparison');
let myAge = 17;

if (myAge === 5) {
  console.log('You too young\n');
}
if (myAge === 17) {
  console.log('So Sweet\n');
}
if (myAge > 17 && myAge <= 38) {
  console.log('myAge is beetwen 17 and 30\n');
}

let dadAge = 9;
if (dadAge < myAge) {
  console.log(`${dadAge}\n`);
}

console.log('========================if else statement');
let number = 3;
if (number % 2 === 0) {
  console.log('Genap\n');
} else {
  console.log('Ganjil\n');
}

console.log('========================if, else if, else');
let hour = 11;
if (hour < 12) {
  console.log('selamat pagi\n');
} else if (hour < 18) {
  console.log('selamat sore\n');
} else {
  console.log('selamat malam\n');
}

console.log('========================if, else if, else');
// nested if statement
let v1 = 400;
let v2 = 700;
if (v1 === 400) {
  if (v2 === 700) {
    console.log('value of v1 is 400 and v2 is 700\n');
  }
}

console.log('========================ternari operator');
let age = 19;
let canDrive = age > 16 ? 'yes\n' : 'no\n';
console.log(canDrive);

console.log('========================Switch');
let a = 2 + 5;
switch (a) {
  case 3:
    console.log('Too small\n');
    break;
  case 4:
    console.log('excactly!\n');
    break;
  case 5:
    console.log('Too large\n');
    break;
  default:
    console.log(`I don't know such values\n`);
}
