// Variables
var num = 10
var name = 'Jane Doe'
console.log(num + ' ' + name)

// Data Types

// Number
var age = 50
var age2 = 15
var ageSum = age + age2
console.log(ageSum)

// Operators + - / * %
var ageDiv = age % age2
console.log(ageDiv)

// String (Text)
var sentence = "Hello, my name is Lasse"
var sentence2 = "I'm 15 years\' old"
console.log(sentence + sentence2)

// Boolean
var fruit1 = 'apple'
var fruit2 = 'banana'
var fruit3 = 'apple'

console.log(fruit1 == fruit2)
console.log(fruit1 == fruit3)

var allowedToDrive = true
console.log(allowedToDrive)

// undefined

var a
console.log(a)

var a = 'test'
console.log(a)

// null
var x = null
console.log(x)

// object
var names = {
    name1: 'Joe',
    name2: 'Jane'
}

console.log(names)
console.log(names.name1)
console.log(names['name2'])

names = 'test'
// names = 10
console.log(names)

// Array
var planets = ['Earth', 'Mercury', 'Jupiter']
console.log(planets)
console.log(planets[1])

console.log(typeof planets)
console.log(typeof names)

// Symbol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
const sym1 = Symbol("foo");
console.log(sym1)

