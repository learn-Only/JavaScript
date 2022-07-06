function maxSequence(arr) {
  // Your code here
  var result = 0;
  let indexAwal;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      indexAwal = arr.indexOf(arr[i]);
    }
  }
  console.log(indexAwal);
}
// let indexArrGreater1 = arr.indexOf(arr[i]);

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
// console.log (maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])) //7
// console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])) //7
// console. log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])) //8
// console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])) //12
