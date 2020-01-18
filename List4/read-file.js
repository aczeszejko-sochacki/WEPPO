var fs = require('fs')

fs.readFile('read-file.js', 'utf-8', function(err, data) {
    console.log(data)
})