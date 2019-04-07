let fs = require('fs')

fs.readFile('test.txt', 'utf8', function (err, res) {
    if (err) {
        throw err
    }
    console.log(res)
})

console.log('######## 读取文件 #######')