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
        console.log(i);
    });
}


fs.forEach(function(f){
    f();
});

