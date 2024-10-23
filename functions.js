//function to calculate sum of 2 numbers
// function sum(a, b) {
//  here a,b are local scope variables and are block scope which means they  are only for the function
//   let num = a + b;
//   return num; // after return statement no statement can be added
// }
// let final = sum(3, 8); // here if we call the function no value wi;; be returned so we will take another variable and store that value and then print it
// console.log(final);

//arrow functions --> arrow function returns the value without the need of return statement
// syntax ---->    function =(parameters)=>{}
// the arrow functions can be assigned to a variable consider the example
//for addition
// let final = (a, b) => {
//   console.log(a + b);
// };
// final(5, 5);

//for multiplication
// let multiply = (a, b) => {
//   console.log(a * b);
// };
// multiply(20, 5);

//function which takes string as an argument and return number of vovels present in the string
// function name(string) {
//   count = 0;
//   for (let str of string) {
//     if (
//       str === 'a' ||
//       str === 'e' ||
//       str === 'i' ||
//       str === 'o' ||
//       str === 'u'
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// name('adithya');

//callback function --> it is a function which is passed as an argument to another function
