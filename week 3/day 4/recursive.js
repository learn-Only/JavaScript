console.log(' ======================== contoh revursive 1');

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

console.log('\n ======================== contoh revursive 2');

// sumRange(3)
// 3 + 2 + 1

function sumRange(i) {
  if (i == 1) {
    return 1;
  } else {
    return i + sumRange(i - 1);
  }
}
console.log(sumRange(3));

console.log('\n ======================== contoh revursive 3');
// power(2,4)
// == 2 * power(2, 3)
// == 2 * 2 * power(2, 2)
// == 2 * 2 *  2 * power(2, 1)
// == 2 * 2 * 2 * 2 * power(2, 0)
// == 2 * 2 * 2 * 2 * 1
function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

console.log('\n ======================== contoh revursive 4');
// poductOfArray([1, 2, 3])
// 3 + 2 + 1
// function productOfArray(array) {
//   if (array[0] == 1) return 1;

// }

// function primeX(number) {
//   // Your code here
//   let nomor = 0;
//   let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
//   nomor = arr[number - 1];
//   return nomor;
// }

// console.log(primeX(1)); //2
// console.log(primeX(5)); //11
// console.log(primeX(8)); //19
// console.log(primeX(9)); //23
// console.log(primeX(10)); //29

function getPrime(num) {
  let temp = [],
    result = [];
  for (let i = 2; i <= num; i++) {
    if (!temp[i]) {
      result.push(i);
      for (let j = i; j <= num; j += i) {
        //j+=i ==> j+1+1+1+1+1...
        temp[j] = true;
      }
    }
  }
  return result;
}

console.log(getPrime(10)); // 2, 3, 5, 7

console.log('-----------------------------');
// 0, 1, 1, 2, 3, 5, 8, 13
// if number < 2 (0 / 1) return number (0 /1)
// else (number - 1) + (number -2)
function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}
console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(12));

function primeX(number) {
  let prima = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  let reveal = prima[number - 1];
  return reveal;
}
console.log(primeX(1));
console.log(primeX(5));
console.log(primeX(8));
console.log(primeX(9));
console.log(primeX(10));

function primaSegiEmpat(wide, high, start) {
  // Your code here
  let result = '';
  let jumlah = 0;
  let i = start;
  let count = 0;

  while (count < wide * high) {
    i++;

    if (i == 2 || i == 5 || i == 7) {
      result += `${i}`;
      jumlah += i;
      count++;

      if (count % wide === 0) {
        result += '\n';
      }
    }

    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      result += `${i}`;
      jumlah += i;
      count++;

      if (count % wide === 0) {
        result += '\n';
      }
    }
  }
  console.log(result);
  console.log(jumlah);
}

primaSegiEmpat(2, 3, 13);
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 1);
/*
2  3  5  7 11
13 17 19 23 29
129
*/
