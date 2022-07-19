function fibo(idx) {
  let fib = [0, 1];
  for (let index = 2; index <= idx; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
    fib.push(fib[index]);
  }
  console.log(fib);
  return fib[idx];
}

console.log(fibo(10));

function fiboMemoizm(idx) {
  if (idx == 1 || idx == 2) {
    return 1;
  } else {
    return fiboMemoizm(idx - 1) + fiboMemoizm(idx - 2);
  }
}
console.log(fiboMemoizm(10));
