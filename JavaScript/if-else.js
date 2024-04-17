// IF ELSE statements

var morning = '7 am'
var night = '11 pm'
var breakfastTime = '9 am'
var time = '10 am'
var breakfast = 'Eggs'

if (time === morning) {
    console.log('Good morning, It\'s', morning)
} else if(time == night){
    console.log('Good night, It\'s', night)    
} else if(time == breakfastTime && breakfast == 'Eggs'){
    console.log('Good morning, It\'s time to eat!')    
}
 else {
    console.log('Hello, It\'s', time)    
}