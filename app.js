var createGreeting = function(message,name){
    return message + name;
}

// Arrow function
var arrowfunction = (message,name) => {
    return message + name;
}

var arrowGreeting = (message,name) => message + name;

var simpleArrowGreeting = name => "Hello "+name;


// The Let Keyword in ES6 //

// in Vanila Javascript
var message = "hi";

{
    var message = "bye";    
}

console.log(message);
// In ES6

let messageES = 'hi';

{
    let messageES = 'bye';
}

console.log(messageES);

var fs = [];

for(let i = 0; i < 10;i++){
    fs.push(function(){
        //console.log(i);
    });
}


fs.forEach(function(f){
    f();
});

//Default Values for function parameters in ES16

function greet(greeting,name ='Nigam'){
    console.log(greeting+ ' '+name);
}

greet('Hello');


// Const

const API_KEY = 'xxxx'; // read only unable to redefined
const PI = 3.14; // read only unable to redefined

// Shorthand properties

let firstName = 'Nigam';
let lastName = 'Goyal';

let person = {firstName,lastName};
//console.log(person); // { firstName: 'Nigam', lastName: 'Goyal' }

let mascot = person;

let team = {person,mascot};

console.log(team);

// Spread operator

let first = [1,2,3,7,8,9];

let second = [4,5,6];
console.log(...first);
first.push(...second);

console.log(first);

function addThreeThings(a,b,c){
    let result = a+b+c;
    console.log(result)
}

addThreeThings(...first);