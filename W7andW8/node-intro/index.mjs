import {shuffle} from 'fast-shuffle';

let letters = ['a','b','c','d','e'];

// const quotes = (await import("success-motivational-quotes")).default; //dynamic import
import quotes from 'success-motivational-quotes'; //static import

let tempQuote = quotes.getTodaysQuote();

console.log(tempQuote.body + " by "+ tempQuote.by);

//alert doesn't work on Node programs!
//alert(letters);
console.log(letters);

displayQuote();


//hoisted functions. move to top automatically.

//function expression
// displayQuote();
// function displayQuote(){
//     console.log(quotes.getTodaysQuote());
// }

//Function Expression. Gets error when call function before declaration.
const displayQuote = function (){
    console.log(quotes.getTodaysQuote());
}

//  Arrow Syntax:
// const timesTwo = params => params * 2
// const displayQuote = () => {

// };
//displayQuote();