var fs = require('fs');
var http2 = require('http2');

(async function () {
    var pfx = await fs.promises.readFile('mycert.pfx');
    var server = http2.createSecureServer({
        pfx: pfx,
        passphrase: 'password'
    });
    server.on('stream',
    (stream, headers) => {
        stream.respond({
            'content-disposition': 'attachment; filename=public.pem',
            'content-type': 'text/html',
            ':status': 200
        });
    });
    
    server.listen(3001);
    console.log('started');
})(); 