var http = require('http'),
    utils = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com', 'www.google.com']

function fetchPage(url) {
    var start = new Date()
    http.get({host: url}, function (res) {
        console.log('Got respose from', url)
        console.log('Requst took: ', new Date() - start, 'ms')
    })
}

for(var i=0; i < utils.length; i++) {
    fetchPage(utils[i])
}