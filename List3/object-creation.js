var example = {
  field: 0,
  _prop: 0,
  get prop() { return example._prop },
  set prop(value) { example._prop = value }
}

Object.defineProperty(example, 'newField', { value: 1 })

Object.defineProperty(example, 'newMethod', {
  value: function() {
    return 1
  }})

var _newProp = 0
Object.defineProperty(example, 'newProp', {
  get: function() { return _newProp },
  set: function(value) { _newProp = value }
})

console.log(example.newField)
console.log(example.newMethod())
console.log(example.newProp)
example.newProp = 10
console.log(example.newProp)