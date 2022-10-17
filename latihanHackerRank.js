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

console.log("------------latihan day 3 sesi 2");
// function coinChange(coin) {
//   let coinValue = [10, 25, 5, 1];
//   coinValue.sort((a, b) => {
//     return b - a;
//   });
//   let coinIterate = 0;
//   let result = [];
//   while (coin > 0) {
//     if (coin < coinValue[coinIterate]) {
//       coinIterate++;
//     } else {
//       coin -= coinValue[coinIterate];
//       result += coinValue[coinIterate] + "     ";
//     }
//   }
//   return result;
// }

// console.log(coinChange(55));

// console.log("--------------------------------------h3 s2");

// function power(num, pow) {
//   let result = 1;
//   for (let i = 1; i <= pow; i++) {
//     result *= num;
//   }
//   return result;
// }
// console.log(power(2, 3));

// console.log("--------------------------------------");
// function powerBinary(num, pow) {
//   if (pow == 0) return 1;
//   let result = 1;
//   while (pow > 0) {
//     if (pow % 2 == 1) {
//       result *= num;
//       pow--;
//     }
//     pow = pow / 2;
//     num *= num;
//   }
//   return result;
// }

// console.log(powerBinary(3, 3));
console.log("-------------------hackerrank time conversion");
// 12 am => 00
// 1 am - 12 pm do nothing
// 1pm - 11pm => add + 12

function timeConversion(s) {
  let amPm = s.charAt(8);
  let militaryHour = "";
  if (amPm == "A") {
    if (s.substring(0, 2) == "12") {
      militaryHour = "00";
    } else {
      militaryHour = s.substring(0, 2);
    }
  } else {
    //P
    if (s.substring(0, 2) == "12") {
      militaryHour = s.substring(0, 2);
    } else {
      militaryHour = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  return militaryHour + s.substring(2, 8);
}

console.log(timeConversion("03:05:00PM"));

console.log("\n-------------------hackerrank  counting valleys");

function countingValleys(steps, path) {
  // Write your code here
  let valleyCounter = 0; // To count the valleys
  let altitude = 0; // To increment altitude in every "U" char, otherwise decrement the altitude

  // To go through every char in the string
  for (let i = 0; i < steps; i++) {
    let char = path.charAt(i); // To get a char in every cycle
    // Because we are just interested "U" char
    if (char === "U") {
      // check if the current char in the cycle is equal to "U"

      altitude++; // Increment the altitude if the char is "U"

      if (altitude === 0) {
        // This is the "key" when altitude is equal to 0 means that 1 valley was completed
        valleyCounter++; // Means that a valley was completed an increment
      }
    } else {
      // If is other char that not is "U"
      altitude--; // then the altitude will be decremented
    }
  }
  console.log(countingValleys(9, "UDDDUDUU"));

  // Finally when for cycle ends, return the valleyCounter
  return valleyCounter;
}

console.log("\n-------------------Designer PDF Viewer");
// cari lebar tinggi semua huruf
// urutkan semua tinggi huruf
// dapatkan tinggi paling yang paling tinggi
//kalikan tinggi huruf yang paling tinggi dengan jumlah huruf

// function designerPdfViewer(h, word) {
//   // Write your code here
//   // Creating the array of alphabets
//   var alphabetKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//     let values = h,

//     // Using the ES6 reduce function to create an object which associates the input height with each alphabet
//     associated = alphabetKeys.reduce((previous, key, index) => {
//         previous[key] = values[index];
//         return previous
//     }, {});

//     // Storing the height of each letter from the input word
//     let alphaValues = [];

//     // We split the word and then we loop over each alphabet to get its associated height
//     word.split("").map((alphabet) => {
//       if(associated.hasOwnProperty(alphabet)){
//         alphaValues.push(associated[alphabet]);
//       }
//     });

//     // Get the max from the alphaValues array
//     let max = Math.max.apply(null, alphaValues);

//     // We find the total number of alphabets. Since we assume that the width of each alphabet is 1mm, we can add up each alphabet to get
//     // total length.
//     let length = alphaValues.length;

//     // Based on max height and total length, we calculate the area.
//     return max*length;

// }

function designerPdfViewer(h, word) {
  // Write your code here
  let tallestCharHeight = 0;
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    index = word.charCodeAt(i) - 97;

    if (h[index] > tallestCharHeight) {
      tallestCharHeight = h[index];
    }
  }
  return tallestCharHeight * word.length;
}

const testHeights = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];

const testWord = "zaba";

console.log(designerPdfViewer(testHeights, testWord));

console.log("\n-------------------viral Advertisting");
function viralAdvertising(n) {
  let shared = 5;
  let liked = 2;
  let totalLiked = 2;
  for (let day = 1; day < n; day++) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    totalLiked += liked;
  }
  return totalLiked;
}

console.log(viralAdvertising(3));

// src: https://www.youtube.com/watch?v=0CVHI-B3K6o

console.log("\n-------------------electronic shop");
function getMoneySpent(keyboards, drives, s) {
  // Complete this function
  let max = -1;

  // I'm trying to get the total number of keyboard and drive
  // then compare to the money.
  for (let i = 0; i < keyboards.length; i++) {
    var temp = 0;
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= s) {
        temp = keyboards[i] + drives[j];
        max = temp > max ? temp : max;
      }
    }
  }

  return max;
}

// src https://dalenguyen.medium.com/solved-electronics-shop-algorithm-with-javascript-from-hackerrank-b3a7fa41381f

console.log("--------------------------------------------------------");

function maxSequence(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (maxSum < sum) maxSum = sum;
    }
  }
  return maxSum;
}

// console.log(maxSeq([-2,1,-3,4,-1, 2, 1, -5, 4]));

console.log("------------------");

function getMinDeletions(s) {
  // Write your code here
  let unikChar = "";
  for (const chr of s) {
    if (unikChar.includes(chr) == false) {
      unikChar += chr;
    }
  }

  return (numRemove = s.length - unikChar.length);
}

console.log(getMinDeletions("ABACB"));
// src: https://www.youtube.com/watch?v=QLwcaRqs--k

console.log("-----------------------");

function dnaComplement(s) {
  // Write your code here
  let DNA = "";
  for (let i = 0; i < s.length; i++) {
    // mengganti huruf string if A => T, T=> A, C=>G, G => C
    if (s[i] == "A") {
      DNA += "T";
    } else if (s[i] == "T") {
      DNA += "A";
    } else if (s[i] == "C") {
      DNA += "G";
    } else if (s[i] == "G") {
      DNA += "C";
    }
  }
  return DNA;
}

console.log(dnaComplement("ATCGTA"));

console.log("-----------------------hackerrank Mars Exploration");

function marsExploration(s) {
  let sos = "SOS";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) != sos.charAt(i % 3)) count++;
  }
  return count;
}

console.log(marsExploration("SOSSPSSQSSOR"));
console.log(marsExploration("SOSSOSSOS"));
// src http://www.codeforjs.com/2021/09/mars-exploration-hacker-rank-solution.html

console.log("-----------------------hackerrank  CamelCase");
function camelcase(s) {
  // Write your code here
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(camelcase("saveChangesInTheEditor"));
// src https://medium.com/@jayram_manale/hackerrank-60-camelcase-easy-759bddf1033

console.log("-----------------------hackerrank FindDigits  ");
function findDigits(n) {
  // Write your code here
  let arr = n.toString().split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(n / arr[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(findDigits(1012));
// src https://www.youtube.com/watch?v=NWXL15UBHe0

console.log("--------------------------- 5-8");
console.log("------------------------dayOfProgrammer");
function dayOfProgrammer(year) {
  if (year == 1918) {
    // Corner case
    return `26.09.${year}`;
  } else if (year > 1918) {
    // Calculating Leap year in Gregorian Calendar
    const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    return `${isLeapYear ? 12 : 13}.09.${year}`;
  } else {
    // Calculating Leap year in Julian Calendar
    return `${year % 4 == 0 ? 12 : 13}.09.${year}`;
  }
}

// dayOfProgrammer(2000) // leap year -> 12...
console.log(dayOfProgrammer(1700)); // leap year > 13..
// dayOfProgrammer(1800) // NOT leap year -> 12-9-1800
// dayOfProgrammer(2016) // leap year -> 13-9-2016
// dayOfProgrammer(2017) // NOT leap year -> 12-9-2017

console.log("------------- pickingNumbers");

function pickingNumbers(a) {
  // Write your code here
  let max = 0;
  let values = new Array(100).fill(0);

  (a || []).forEach((value) => {
    values[value]++;
  });

  return values.reduce((target, value, index) => {
    index >= 1 &&
      value + values[index - 1] > target &&
      (target = value + values[index - 1]);

    return target;
  }, []);
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

console.log("----------------- utopianTree");

function utopianTree(n) {
  let cycle = 1;
  let height = 1;

  while (cycle <= n) {
    if (cycle % 2 !== 0) {
      height *= 2;
    } else {
      height++;
    }
    cycle++;
  }

  return height;
}
console.log(utopianTree(6));

console.log("-----------------------------  ");
function angryProfessor(k, a) {
  // establishing constants
  const YES = "YES";
  const NO = "NO";

  let inClassCount = 0; // keeping running total
  for (const arrivalTime of a) {
    // looping through each arrivalTime; O(n)
    inClassCount += arrivalTime <= 0; // get boolean (true/false) if student is late or on time, adding (1/0) to total
    if (inClassCount >= k) return NO; // before loop is done, if the total count is past threshold, stop and return NO
  }
  return YES; // loop finished without issue, reutrn YES; Time Complexity = O(n)
}

console.log("-------------------beautifulDays");

function beautifulDays() {
  let beautiful = [];
  for (let start = i; start <= j; start++) {
    let numString = start + "";
    let reverse = numString.split("").reverse().join("");
    if ((start - reverse * 1) % k === 0) {
      beautiful.push(start);
    }
  }
  return beautiful.length;
}

console.log("-----------------------");

const p = [4, 2, 5, 1, 3];

function permutationEquation(p) {
  const arr = [];

  for (let i = 1; i <= p.length; i++) {
    arr.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }

  return arr;
}

console.log(permutationEquation(p));

console.log("------------------------Jumping on the Clouds: Revisited");
function jumpingOnClouds(c, k) {
  let energy = 100;
  let count = 0;
  let index;
  while (index !== 0 && energy >= 0) {
    count === 0 && (index = 0);
    index = (index + k) % c.length;
    energy = c[index] > 0 ? energy - 3 : energy - 1;
    count++;
  }

  return energy;
}

console.log(jumpingOnClouds(8, 2));

console.log("--------------- -------ExtralongFactorials");

function extraLongFactorials(n) {
  let memoization = [BigInt(0), BigInt(1)];

  const factorial = (num) =>
    typeof memoization[num] !== "number"
      ? num - BigInt(1) > 0
        ? num * factorial(num - BigInt(1))
        : BigInt(1)
      : memoization[num];

  console.log(String(factorial(BigInt(n))));
}

extraLongFactorials(25);

console.log("-------------------repeatedString");

function repeatedString(s, n) {
  // Write your code here

  let occurances = s.split("a").length - 1;
  let max = Math.floor(n / s.length);
  let totalAs = occurances * max;
  totalAs += s.slice(0, n % s.length).split("a").length - 1;
  return totalAs;
}

console.log("---------------------minimumDistances");

function minimumDistances(a) {
  let minValue = Math.pow(10, 1000);
  let map = {};

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      let diff = i - (map[a[i]] - 1);
      if (diff < minValue) {
        minValue = diff;
      }
      map[a[i]] = i + 1;
    } else {
      map[a[i]] = i + 1;
    }
  }
  return minValue == "Infinity" ? -1 : minValue;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([7, 1, 3, 4, 8, 7]));

console.log("-------------------------------ujjian");
function updateTimes(signalOne, signalTwo) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < signalOne.length; i++) {
    if (signalOne[i] === signalTwo[i] && signalOne[i] !== 1) {
      count++;
    }
  }
  return count;
}

s2 = [5, 4, 3, 4, 1];
s1 = [1, 2, 3, 4, 1];
console.log(updateTimes(s1, s2));
console.log(s1.length);

console.log("----------------------");

function equalizeArray(arr) {
  let arrObj = {};
  let maxCount = 0;
  for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
  for (let value in arrObj) {
    if (arrObj[value] > maxCount) {
      maxCount = arrObj[value];
    }
  }
  return arr.length - maxCount;
}

//646634.medium.com/how-to-solve-hackerranks-equalize-the-array-problem-e3ceebd7c866

https: console.log("----------------------2");

function checkPrice(products, productsPrices, productsSold, soldPrice) {
  let hash = {};
  let count = 0;
  // iterate over products and map price
  // {"eggs":2.89, "milk": 2.29, "cheese": 5.79}
  for (let i = 0; i < products.length; i++) {
    // check if hash object has already product key available
    // if it is not present
    // assign a key and it's value from productsPrices
    if (!hash[products[i]]) {
      hash[products[i]] = productsPrices[i];
    }
  }
  // iterate over products/productsSold
  // check for alreday stored price in hash
  // if it is mismatching
  // increase the count to show errors count
  for (let j = 0; j < productsSold.length; j++) {
    if (hash[productsSold[j]] !== soldPrice[j]) {
      count++;
    }
  }
  return count;
}

function priceCheck(products, productPrices, productSold, soldPrice) {
  // Write your code here
  let dataProd = {};
  let jumError = 0;

  for (let i = 0; i < products.length; i++) {
    if (!dataProd[products[i]]) {
      dataProd[products[i]] = productPrices[i];
    }
  }

  for (let j = 0; j < productSold.length; j++) {
    if (dataProd[productSold[j]] !== soldPrice[j]) {
      jumError++;
    }
  }

  return jumError;
}

let products = ["eggs", "milk", "cheese"];
let productsPrices = [2.89, 3.29, 5.79];
let productsSold = ["eggs", "eggs", "cheese", "milk"];
let soldPrice = [2.89, 2.99, 5.97, 2.39];
// https://replit.com/talk/learn/Hacker-Rank-Price-Check-in-Javascript/122971
console.log(checkPrice(products, productsPrices, productsSold, soldPrice));

var colors = ["red", "green", "blue"];
var pos = colors.indexOf("blue"); //2

//indexOf getting index of sub string, returns -1 if not found
var str = "We got a poop cleanup on isle 4.";
var strPos = str.indexOf("poop"); //9

function firstOccurrence(s, x) {
  // Write your code here
  let index = s.indexOf(x);
  return index;
}

console.log("-----------------3");
a = "juliasamanthantjulia";
b = "ant";
console.log(firstOccurrence(a, b));

// tesgit