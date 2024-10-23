function outer() {
  let a = 'hello';
  function inner() {
    console.log(a);
  }
  return inner;
}
let newvar = outer();
console.log(newvar);
newvar();
