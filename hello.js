/*const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");*/

//function return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('Caliban');
console.log(greeting);
