function fib() {
  var fib0 = 1
  var fib1 = 1

  var lim = 10
  var counter = 1

  return {
    next : function() {
      helper = fib0
      fib0 = fib1
      fib1 += helper

      return fib0
    }
  }
}

function* fibGen() {
  var fib0 = 1
  var fib1 = 1

  while(true) {
    helper = fib0
    fib0 = fib1
    fib1 += helper

    yield fib0
  }
}

function* take(it, top) {
  for ( i = 0; i < top; i++ ) yield it.next()
}

for (let num of take( fib(), 10 ) ) {
  console.log(num);
}