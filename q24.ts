// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let fruit: string = 'banana';
console.log("Is fruit == 'apple'? I predict False.");
console.log(fruit == 'apple'); 

let city: string = 'Karachi';
console.log("Is city != 'London'? I predict True.");
console.log(city != 'London'); 

let nme: string = 'Haris';
console.log("Is name in lowercase 'haris'? I predict True.");
console.log(nme.toLowerCase() === 'haris'); 

let num1: number = 10;
let num2: number = 5;
console.log("Is number1 > number2? I predict True.");
console.log(num1 > num2); 

console.log("Is number1 <= number2? I predict False.");
console.log(num1 <= num2); 

let is_it_sunny: boolean = true;
let is_it_warm: boolean = false;
console.log("Is it sunny and warm? I predict False.");
console.log(is_it_sunny && is_it_warm); 

let is_it_rainy: boolean = true;
console.log("Is it sunny or rainy? I predict True.");
console.log(is_it_sunny || is_it_rainy);

let fruits: string[] = ['apple', 'banana', 'orange'];
let vegetables: string[] = ['carrot', 'peas', 'spinach'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1);

console.log("Is 'potato' not in the vegetables array? I predict True.");
console.log(vegetables.indexOf('potato') === -1); 


