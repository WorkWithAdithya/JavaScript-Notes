// let button = document.querySelector('.button');
// button.onclick = () => {
//   console.log('this is a button');
//   let a = 20;
//   a++;
//   console.log(a);
// };

// let div = document.querySelector('.container');
// div.onmouseover = () => {
//   console.log('the mouse id hovered');
// };
//if we are handeling events in inline way and in js file the js file code will run instead of inline way

//event object --> it is a special type of object which has info about the event.
// let para = document.querySelector('.para');
// para.onmouseover = (e) => {
//   console.log('the mouse is overed on para tag');
//   console.log(e);
// };

//event listeners
// to add evenlisteners -->node.addEventListeners(event, callback)      //here callback is a function which on an event the callback will be excecuted it is also called as an event handler
// to remove evenlisteners -->node.removeEventListeners(event, callback)

// let btn = document.querySelector('.button');
// btn.addEventListener('click', () => {
//   //inside the () function parameters will be passed
//   let a = 10;
//   let b = 20;
//   a++;
//   b++;
//   let c = a + b;
//   console.log(c);
// });

//practice question

// let btn = document.querySelector('button');
// let background = 'light';
// btn.addEventListener('click', () => {
//   if (background == 'light') {
//     background = 'dark';
//     document.querySelector('body').style.backgroundColor = 'black';
//   } else {
//     background = 'light';
//     document.querySelector('body').style.backgroundColor = 'white';
//   }
//   console.log(background);
// });
