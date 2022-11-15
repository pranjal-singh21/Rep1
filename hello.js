console.log("hello");


 const b = 20;
 
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body)

console.log("b is" +b );

const cowsay = require("cowsay");

console.log(cowsay.say({
    text :getRandomJoke.body,
    e : "oO",
    T : "U "
}));

// or cowsay.think()




/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/


/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
