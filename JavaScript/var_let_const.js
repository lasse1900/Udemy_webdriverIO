var person = 'James'

if(true){
    var person = 'Jenny'
    console.log(person)
}

console.log(person) // Jenny

console.log('-------------------')

// let can be updated but not redeclared (block scope)
let person2 = 'Tim'

if(true){
    let person2 = 'Ann'
    console.log(person2)
}

console.log(person2) // Tim

console.log('---------*----------')

const person3 = 'Kerry'
// person3 = 'Jordan'   // let and const can not be redeclared

if(true){
    const person3 = 'Sammy'
    console.log(person3)
}

console.log(person3) // Kerry

console.log('---------***----------')

let person4 = 'James'
person4 = 'Jordan'

if(true){
    const person4 = 'Jenny'
    console.log(person4)
}

console.log(person4) // Kerry

console.log('---------****----------')

var person5 = 'James'
var person5 = 'Jordan'

if(true){
    const person5 = 'Jenny'
    console.log(person5)
}

console.log(person5) // Kerry