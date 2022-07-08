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

console.log(countingValleys(8, "UDDDUDUU"));

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
