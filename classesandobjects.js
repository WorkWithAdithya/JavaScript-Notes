//creation of function inside the class
// const student = {
//   FullName: 'adithya',
//   Marks: 91.24,
//   fullmarks: function () {
//     // this is how a function can be defined inside an object
//     console.log('marks is ', this.Marks); // o/p in printing student.fullmarks =91.24
//   }, //here this is used  and this refers object name which is the student
// };

// the function can also be defined like
// const student = {
//   FullName: 'adithya',
//   Marks: 91.24,
//   fullmarks() { //without even writing that it is a function
//     console.log('marks is ', this.Marks);
//   },
// };

//prototype --> (__proto__) this is basically used when we to access the function which is defined inside another object  eg-->
// let employye = {
//   salary: 50000,
//   employeename: 'adithya',
//   taxcalculate() {
//     console.log('this is a 10 %tax');
//   },
// };

// let newemployee = {
//   salary: 20000, //lets consider this object wants to access the function present in the  object employye , it would go like
// };
// newemployee.__proto__ = employye; // here we are acessing the function which is defined inside the employee object using __proto__ function

// let newemployee = {
//   salary: 20000,
//   taxcalculate() {
//     console.log('this is a  20% tax');
//   }, //if there is same function present inside both of the object the function which is present inside the object which is being called will be excecuted
// };
// newemployee.__proto__ = employye;

//classes --> its a programming template which helps in creating objects , consider a class which is having two functions
// class cars {
//   tayota() {
//     console.log('top speed is 170+');
//   }
//   porche() {
//     console.log('ghar bhik jayenga');
//   }
// }
// to create an object using the above class the syntax is (let node = new node)
// let transport = new cars(); // by using new and calling the class the class can be converted to an object and all the functions which are defined inside the class can also be called

// let airways = new cars(); // like this multiple classes can also be created using the same class template

//constructors
// class cars {
//   constructor(brand, milage) {
//     console.log('this is a constructor');
//     this.brand = brand;
//     this.milage = milage;
//   }
//   tayota() {
//     console.log('top speed is 170+');
//   }
//   porche() {
//     console.log('ghar bhik jayenga');
//   }
// }
// let object = new cars('lexus', 91);
// console.log(object);
