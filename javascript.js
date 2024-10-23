//excecution content
//1--> memory phase -- variable envirornment
//2--> code phase -- thread of excecution

//primitive value / type value
let x = 'hello';
console.log(x, typeof x); //o/p would be hello , string

//object is a collection of key value pair

//copy by value --> string , number , boolean , null , symbol
let a = 'adithya';
let b = a;
a = 'bharathwaj';
console.log(a);
console.log(b); //o/p would be bharathwaj , adithya , since the value of a was set to adithya and then a==b the value of b would be adithya and the value of a would be bharathwaj

// //copy by reference --> object, array , function
let p = {
  name: 'adithya',
};
let q = p;
p.name = 'adit';
console.log(p);
console.log(q); // o/p would be adit , adit since value would be based on reference  and not by value

// //arrays --> they are dynamic which means many types of values can be added
// //arrays are basically objects
const array = ['hello', null, undefined, 23];
console.log(array, typeof array);
console.log(array[3]); //o/p would be 23 and type would be object

// //functions --> functions can be called even before the function code is written , the output will come
coursename('dsa');
function coursename(courses) {
  console.log('name ' + courses);
} //function can be called even before the function is initialized , then also the o/p will come

//eg
//console.log(y); if we print before initializing the value o/p would be y not defined

// console.log(y);
// let y = 10;
// console.log(y) -->Cannot access 'y' before initialization (if used let)  but if we use var instead of let o/p would be undefined and 10

//hoisting --> able to access the function before initializing them is called as hoisting here the example considered is the function whre the function can be accesed before initialing

//let consider an example
var number = 21;
console.log(number);
//the above statement vcan also be printed as
console.log(this.number); //o/p would be same that is 21 (this , window can also be used)

//strict --> const > let > var
//const and let are block scope and var is not a block scope
{
  let a = 20;
  const b = 30;
  var c = 50;
}
console.log(a);
console.log(b);
console.log(c); //here only var would be printed and rest would not be printed

//lexical scope
function greet() {
  let x = 10;
  console.log(x);
}
greet(); // on doin this the value of x would be 10

//consider another example where the value of x is not defined inside the function
function hello() {
  console.log(adithya);
}
let adithya = 22;
hello(); // here the output would be 22 as there is no value inside the function so the value outside the function would be considered

//functions.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//functions can also be assigned to vaariables like.
let sum = function (q, w) {
  return q + w;
};
console.log(sum(2, 5));

//calling of functions inside the function , here we are considering multiple functions

let addition = function (a, b) {
  return a + b;
};
let difference = function (a, b) {
  return a - b;
};
let operation = function (operator, a, b) {
  return operator(a, b);
};
console.log(operation(difference, 3, 3));
console.log(operation(addition, 3, 3));

//arrow function --> arrow function helps in returning the value without the use of return statements consider the example
// let arrow = (a, b) => {
//   a + b;
// };

// closure property --> here a function is defined inside a function  , the inner function has the access to varial=bles and scope of the outer function

//unary operators
//in num++(postfix operator) first the original number will be considered and then the value will be incremented by one
let num = 2;
console.log(num++); //o/p is 2
console.log(num); // o/p is 3

//in ++num(prefix operator) first the original number will be considered and then the value will be incremented by one
let num1 = 2;
console.log(++num1); //o/p is 3
console.log(num1); // o/p is 3

//same goes to num--(initial value will be considered first and then will be decremented)    and      --num(value first will be decresed)

//assignment operators
numb = 3;
console.log((numb += 2)); // increment the value by 2    // o/p is 5

numb1 = 3;
console.log((numb1 -= 2)); // decrement the value by 2  // o/p is 1

numb2 = 3;
console.log((numb2 *= 2)); // multiply value by 2 //o/p is 6

numb3 = 3;
console.log((numb3 /= 3)); // multiply value by 3 //o/p is 1

numb4 = 3;
console.log((numb4 %= 3)); // modulus(remainder when devided) value by 3 //o/p is 0

numb5 = 3;
console.log((numb5 **= 3)); //to the power operator //o/p is 27

//comparision operators (returns the value in boolean form)
//== --> determines the value are equlal or not
//=== --> not only value but also the type

//!=
let n1 = 2;
let n2 = 3;
console.log(n1 != n2); //o/p is true

//!==
let n3 = 2;
let n4 = '4';
console.log(n3 !== n4); //o/p is true

//logical operators
//Logical and (&&) --> checks if both the conditions are true and then return the value in the form of true or false
//only returns tru when both conditions are true else the return statement would be false
let no1 = 9;
let no2 = 5;
let condition1 = no1 > no2;
let condition2 = no2 === 5;
console.log(condition1 && condition2); // o/p is true

//Logical or (||) --> checks if any one condition is  true and then return the value in the form of true or false
// returns true even if one condition is true else the return statement would be false
let no3 = 9;
let no4 = 5;
let condition3 = no3 < no4;
let condition4 = no3 === 9;
console.log(condition3 || condition4); // o/p is true

//logical !() --> this presents true value as false and false value as true
let aa = 2;
let bb = 3;
console.log(!(aa > bb)); //o/p is true here

//ternary operator --> here we put ? which if true it will return yes or not (for not : symbol is used)
let guess = 'pink';
let result = guess == 'pink' ? 'yes its pink' : 'no its not';
console.log(result); // o/p yes its pink

//Conditional statements
//if statement
let color;
let mode = 'light';

if (mode === 'dark') {
  color = 'black';
}
if (mode === 'light') {
  color = 'white';
}
console.log(color); // o/p is white

//if statement
let no = 9;
if (no % 2 == 0) {
  console.log('it is an even number ');
} else {
  console.log('its odd');
}

//else if statement
let age1 = 26;
if (age1 >= 18) {
  console.log('eligible to vote');
} else if (age1 >= 60) {
  console.log('you are retiered');
} else {
  console.log('you are not eligible to vote');
}

//if else statement example using prompt statement
let num11 = prompt('enter a number');
if (num11 == 10) {
  console.log('this is 10');
} else {
  console.log('this is not 10');
}
