function fib(n) {
  if (n == 0 || n == 1) return 1
  else return fib(n - 1) + fib(n - 2)
}

function memoize(fn) {
  var cache = {};

  return function(n) {
    if (n in cache) {
      return cache[n]
    } else {
      var result = fn(n)
      cache[n] = result
      return result
    }
  }
}

var fibMem = memoize(fib)

for (let i = 10; i < 20; i++) {
  console.time("Time fibMem")
  console.log(fibMem(i))
  console.timeEnd("Time fibMem")
}