var readline = require('readline')

var stdIn = readline.createInterface({
  input: process.stdin,
})

stdIn.on('line', (name) => {
  console.log(`Witaj ${name}`)
  stdIn.close()
})