var Foo = function () {
  qux = function () { console.log("I am private") }

  this.bar = function () { qux() }
}

var fooInstance = new Foo()
fooInstance.bar()
try {
  fooInstance.qux()
} catch (TypeError) {
  console.log("Qux is private indeed")
}