// function maxSequence(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = 0;
//         for (let j = 0; j < arr.length; j++) {
//             sum += 0
//         }
//     }
// }

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
// console.log (maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])) //7
// console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])) //7
// console. log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])) //8
// console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])) //12

// function findMax(arr) {
//   let max = 0;
//   let min = 100000000;
//   arr.forEach((key) => {
//     if (max < arr[key]) max = arr[key];
//     if (min > arr[key]) min = arr[key];
//   });
//   return { min: min, max: max };
// }

// console.log(findMax([5, 3, 2, 8, 4]));

console.log("--------------------------------------h3 s2");
function coinChange(coin) {
  let coinValue = [10, 25, 5, 1];
  coinValue.sort((a, b) => {
    return b - a;
  });
  let coinIterate = 0;
  let result = [];
  while (coin > 0) {
    if (coin < coinValue[coinIterate]) {
      coinIterate++;
    } else {
      coin -= coinValue[coinIterate];
      result += coinValue[coinIterate] + "     ";
    }
  }
  return result;
}

console.log(coinChange(55));

console.log("--------------------------------------h3 s2");

function power(num, pow) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= num;
  }
  return result;
}
console.log(power(2, 3));

console.log("--------------------------------------");
function powerBinary(num, pow) {
  if (pow == 0) return 1;
  let result = 1;
  while (pow > 0) {
    if (pow % 2 == 1) {
      result *= num;
      pow--;
    }
    pow = pow / 2;
    num *= num;
  }
  return result;
}

console.log(powerBinary(3, 3));
