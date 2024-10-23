//arrays are basically objects and are mutable i.e., the values inside the array can be changes
//creating arrays
// let arr = ['arr1', 'arr2', 'arr3', 'arr4'];
// console.log(arr, typeof arr);

//accessing elements inside the array
// console.log(arr[2]);

//changing values inside the array
// arr[2] = 'new array';
// console.log(arr);

//looping inside the loops
//program for printing all the elements inside the loop
// let arr = [11, 21, 31, 41, 51];
// for (let i = 0; i < arr.length; i++) {
//here i is the initial point and length of the array is considered as the ending point
//   console.log(arr[i]); //printing all the elements of the array from the starting index
// }

//using for of loop
// let arr = [11, 21, 31, 41, 51];
// for (let i of arr) {
//   console.log(i);
// }

//practice ,problem --> to find the average marks scored by a student , here the array is given
// let marks = [85, 97, 44, 37, 76, 60];
// let totalmarks = 0;
// for (let i of marks) {
//   totalmarks = totalmarks + i;
// }

// console.log(totalmarks);
// let average = totalmarks / marks.length;
// console.log(average);

//practice --> here product price is given and each product is having 10% off calculate the price and give the final value
// let arr = [250, 645, 300, 900, 50];
// for (i = 0; i < arr.length; i++) {
//   let ans = arr[i] / 10;
//   let val = arr[i] - ans;
//   console.log(val);
// }

//array methods in javascript
//arr.push() --> adds items in the array at the end , changes the items in the existing array
// let arr = ['cat', 'bat', 'rat', 'dog'];
// console.log(arr.push('pig', 'bug', 'bus'), arr); //multiple elements can be pushes inside the array

//arr.pop() --> deletes element from the end
// arr.pop();
// console.log(arr); //bus gets poped out

//tostring() --> converts array to string
// let newarr = arr.toString();
// console.log(newarr);

//concat()--> to join 2 strings
// let arr1 = [11, 21, 31, 41, 51];
// console.log(arr1.concat(arr)); // joins two strings

//unshift()-->add elements to the start
// arr.unshift('sniper');
// console.log(arr);

//shift()--> deletes the first value of the array
// arr.shift();
// // console.log(arr); // sniper is deleted
