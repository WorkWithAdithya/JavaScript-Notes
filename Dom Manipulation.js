//dom manipulation
//1) acessing elements using id --> document.getElementById("id name")
// document.getElementById('heading'); //this returns the value of the header and this can be stored inside a variable
// let heading = document.getElementById('heading');
// console.dir(heading);

//2) selecting elements using class --> document.getElementByClassName("class name")
// document.getElementsByClassName('container'); // this returns html collections
// let container = document.getElementsByClassName('container');
// console.dir(container);

//3) selecting elements using tag name --> document.getElementByTagName("Tag name")
// document.getElementsByTagName('p');
// let p = document.getElementsByTagName('p');
// console.dir(p);

// //query selectors --> it return the node list ,  here the parameters passed can be id,class,or a tag
// let tag = document.querySelector('p'); // here we are using tag
// console.dir(tag); // here the first element would be returning

// let alltag = document.querySelectorAll('p'); // return all the elements would be returned -->using tag name
// console.dir(alltag);

// let classname = document.querySelectorAll('.para'); // return all the elements would be returned -->using class name (".class name")
// console.dir(classname);

// let idname = document.querySelectorAll('p'); // return all the elements would be returned -->using id name ("#id name")
// console.dir(idname);

//changing properties of elements
//1) tagname --> it returns which tag is used
// let tagname = document.querySelector('p');
// console.dir(tagname.tagName); //p/p is p which means p tag is appered

//2) innerText --> returns text content of all elements and its children
// let text = document.querySelector('div');
// console.dir(text.innerText); // gives the all the text present inside the div tag i.i., h &p tag elements
// text.innerText = 'adithya';//by using this we can change all the values present inside the div tag

//3) innerHTML --> returns plain text content or HTML Content
// let html = document.querySelector('div');
// console.dir(html.innerHTML); // returns the text as well as the html content present inside the tag
// html.innerHTML = '<h1>this is heading</h1>'; //  the html content can also be changed

//attributes
//1) get attribute -->helps in finding out the attribute value present inside the div
// let attribute = document.querySelector('div');
// console.log(attribute);
// let finalvalue = attribute.getAttribute('class'); // here we are getting the value of the class which is defined indside the div
// console.log(finalvalue);
//another example
// let heading = document.querySelector('h1');
// let finale = console.log(heading.getAttribute('id'));

//2)setattribute(attr , value) -->by using this method we are going to set the attribute value
// let classname = document.querySelector('p');
// console.log(classname.setAttribute('class', 'paragraph')); //first we have to select the attribute , here we are considering that class name should be changed and we are setting the class value as paragraph

//3)style atrribute
// let applystyle = document.querySelector('p');
// applystyle.style.color = 'pink'; // here we are setting the style of the paragraph , first initialize then consider style and then set the type of style we want to change , here we are changing the color of the paragrapgh from red to pink
// applystyle.style.fontFamily = 'times new roman';

//insert elements
//1)node.append()--> append an element at the end of the node
// let node = document.createElement('button'); //first we are going to create an element
// console.log(node);

// node.innerText = 'this is button';

// let div = document.querySelector('div'); // then we are goin to select where the element should be added
// div.append(node); // then we are going to append the element

// 2)node.prepend()--> append an element at the start of the node
// div.prepend(node); //button will be created at the start

// 3)node.before()--> append an element before the  start of the node
// div.before(node); //the button gets appended before the node gets started

// 4)node.before()--> append an element after the  node ends
// div.after(node); //the button gets appended after the node ends

//4)node.remove() --> removing a element from the node
// let element = document.querySelector('p');
// element.remove(); // here the paragraph is removed

//practice question
// let newbtn = document.createElement('button');
// console.log(newbtn);
// newbtn.innerText = 'hello';
// newbtn.style.color = 'red';
// let body = document.querySelector('body');
// body.prepend(newbtn);
