function haveBreakfast(food, drink, callback) {
    console.log(`Having breakfast of ${food} and ${drink}`)
    if (callback && typeof(callback) === 'function') {
        callback.call(null, food, drink)
    }
}

haveBreakfast('bread', 'milk', function (food, drink) {
    console.log('this morning i have breakfast , it contains ', food, '  ', drink)
})