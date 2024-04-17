
function sum(num1, num2){
    return num1 + num2
}

console.log(sum(2,5))

console.log('---------------')

var multiply = function(n1, n2){
    console.log(n1 * n2)
}

multiply(2,4)

console.log('---------------')

var division = function(n1, n2){
    var result = n1/n2;
    return result
}

console.log(division(2,4))

// Arrow function
console.log('------ Arrow function => ---------')

var sum2 = (n1,n2) => {
    return n1 + n2
}

console.log(sum2(2,5))

console.log('---------------')

var sum2 = (n1,n2) => n1 + n2


console.log(sum2(2,13))