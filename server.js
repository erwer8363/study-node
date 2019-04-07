var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(301, {
        'Location': 'http://homestarrunner.com/sbsite/'
    })
    res.end()
}).listen(3000, '127.0.0.1')

console.log('Server running on 127.0.0.1')