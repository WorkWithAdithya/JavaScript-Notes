// loops in javascript
// for loop
// for (let i = 0; i < 5; i++) {
//   // let i=0 is the initialization of the value , i<5 is the stopping condition and i++ is the iteration
//   console.log('this is for loop'); // here this iwill be printed 5 times
// }

// calculating the sum of first 5 numbers
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log('sum =', sum);

// let sum = 0;
// let n = 10;
// for (i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log('sum=', sum); //o/p is 55

// while loop(entry control loop) --> here the sum of first 10 numbers is being printed using while loop
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   sum = sum + i;
//   i++; //here the iteration should be donwe inside the loop and not in the condition
// }
// console.log('sum=', sum); //o/p is 45

// do while loop
// let i = 1;
// do {
//   console.log('apna college');
//   i++;//here the iteration should be donwe inside the loop and not in the condition
// } while (i < 3);

// for-of loop --> helps in looping strings and arrays
// lets say we want to calculate the size of a string

// let arr = ['adithya', 21, 'life'];
// let length = 0;
// for (let val of arr) {
//   // here val should be tacken as default and str is the name of the string which we have initailized
//   length++;
// }
// console.log('array length is ', length); // o/p is 3
// //here we do not need an iterator like for loop(i++) as it checks each value of the string on its own

// for in loops --> loop used only for objects
// let object = {
//   name: 'adithya',
//   age: 22,
//   graduation: 'done',
// };
// for (let key in object) {
//   console.log(key, 'value=', object[key]); //to find the key value we should write name of the object and [key]
// }

// printing all even numbers from 0 to 100
// let number = 0;
// let finalnumber = 100;
// for (number = 0; number <= finalnumber; number++) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
// }
// console.log('end of loop');

// game where system create a random number and a person has to guess that number
// let rightnumber = 25;
// let number = prompt('guess the random number');
// while (number != rightnumber) {
//   number = prompt('this is the wrong number , guess again');
// }
// console.log('congrats , you won this time');
