function createIterator(thres) {
  var _thres = thres

  function iterate() {
    var _state = 0
  
    return {
      next : function() {
        return {
          value: _state,
          done: _state++ >= _thres
        }
      }
    }
  }

  return iterate
}

var foo = { [Symbol.iterator] : createIterator(5) }

var foo2 = { [Symbol.iterator]: createIterator(10) }

for ( var f of foo ) console.log(f)

for ( var f of foo2 ) console.log(f)