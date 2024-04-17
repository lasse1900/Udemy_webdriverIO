
for (var i = 0; i <= 10; i++){
    console.log(i)
}
console.log('------------------')
var planets = ['Earth', 'Mercury', 'Jupiter', 'Mars']

for (var i = 0; i < planets.length; i++){    
var length = planets.length
    console.log(planets[i])
}

console.log('------------------')
for (var p of planets){
    console.log(p)
}
console.log('------------------')

// for in
var names = {
    name1: 'Joe',
    name2:'Jane',
    name3: 'Lisa'
}

for (var n in names){
    console.log(names[n])
}

//
console.log('------------------')
planets.forEach(function (planet){
    console.log(planet)
})


// console.log('------------------')
// var i = 0
// while(i <= 10){
//     console.log(i)
//     i++
// }
