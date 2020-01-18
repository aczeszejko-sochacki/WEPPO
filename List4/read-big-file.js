var fs = require('fs')
var readline = require('readline')

var _map = {}

function _update(map, key) {
  map[key] = ++map[key] || 1;
}

function updateMap(map, key) {
  if (map.has(key)) {
    map.set(key, map.get(key) + 1)
  } else {
    map.set(key, 1)
  }
}

function processFile(inputFile) {
  var instream = fs.createReadStream(inputFile),
    outstream = new (require('stream'))(),
    rl = readline.createInterface(instream, outstream),
    clients = new Map()
     
  rl.on('line', function (line) {
    updateMap(clients, line.split(' ')[1])
  });
    
  rl.on('close', function (line) {
    var freqIps = Array.from(clients)
      .sort((a, b) => (a[1] < b[1] && 1) || a[1] === b[1] ? 0 : -1)
      .map(line => line[0])
      .slice(0, 3)
    
    console.log(freqIps)
  });
}

processFile('example.log');
