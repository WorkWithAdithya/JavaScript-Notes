// // strings -->strings are immutable in nature which means the original string will not chnage if we want to change new string will be created with a changed value

// let str = 'length';
// console.log(str.length); //calculate length of the string
// console.log(str[0]); //finding the position of a value in the string

// //template literals --> creating of (`` bapticks) to write a string
// let object = {
//   product: 'pen',
//   price: 10,
// };
// let name = 'each';
// console.log(
//   `this ${object.product} is ${
//     object.price
//   } rupees ${name} and price can also increase upto ${5 + 5 + 5} rupees`
// ); //this method is called as string interpolation where we are going to add ${} to the string

// //escape charector --> \n used to print something one line down and \t for giving a tab space
// console.log('hello my name is adithya \n and i am \t22 years young');

// let one = 'hello\tadi';
// console.log(one.length); //o/p is 9 \n or \t  holds only one space

// //string methods
// //1) str.toUpperCase() --> helps in making the string uppercase
// let string = 'this is a string';
// string = console.log(string.toUpperCase());

// //2)str.toLowerrCase() --> helps in making the string lowercase
// let string1 = 'THIS IS A STRING';
// string1 = console.log(string1.toLowerCase());

// //3)str.trim()--> trims the string from the start and from the end
// let string2 = '      this is trim         example      ';
// string2 = console.log(string2.trim());

//4)str.sclice --> slicing of the string
// let str = '123456789';
// str = console.log(str.slice(0, 4)); // here the last value will not be includes

//5)str.concat -->merging two strings
// let str1 = 'apna';
// let str2 = 'college';
// let res = str1.concat(str2);
// console.log(res);

//)str.replace(searchval , newval)--> replace a particular value
// let str = 'hello';
// let res = str.replace('h', 'y');
// console.log(res); // here h is replace with y

//program where are asking the username of a person and we are going to give the output where starting will be @ and at the end total words present in the words will be printed
// let username = prompt('enter your fullname');
// let firstname = `@${username}`;
// let res = firstname.concat(username.length);
// console.log(res);
