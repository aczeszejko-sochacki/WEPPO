var Tree = function(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

Tree.prototype[Symbol.iterator] = function*() {
  if ( this.left ) yield* this.left;
  yield  this.value;
  if ( this.right ) yield* this.right;
}



var bottomNode = new Tree(1, 'leaf', 'leaf')
var midNode = new Tree(1, bottomNode, 'leaf')
var root = new Tree(1, midNode, 'leaf')

