var addNumbers = function(x,y) {
    var total = x + y
    return total
}

var testAddNumbers = addNumbers(5,6)
console.log(testAddNumbers)

// if (true) {
//     console.log('it is true')

// } else{
//     console.log('it is false')
// }

if(testAddNumbers > 20) {
    console.log('it is true') 
} else{
    console.log('it is false')

}

///////////////////////////loop///////////////////

for (ii=0; ii < 100; ii = ii + 1 ){
    var current = ii
    console.log(current)
}