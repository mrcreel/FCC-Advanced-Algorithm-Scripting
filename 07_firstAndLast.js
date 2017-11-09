var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function(){};
  this.getFirstName = function(){};
  this.getLastName = function(){};
  this.setFullName = function(){};
  this.setFirstName = function(){};
  this.setLastName = function(){};
};

var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length); //should return 6.
console.log(bob instanceof Person); //should return true.
console.log(bob.firstName); //should return undefined.
console.log(bob.lastName); // should return undefined.
console.log(bob.getFirstName()); //should return "Bob".
/* bob.getLastName(); //should return "Ross".
* bob.getFullName(); //should return "Bob Ross".
* bob.setFirstName("Haskell");
* bob.getFullName(); //should return "Haskell Ross"
* bob.setLastName("Curry");
* bob.getFullName(); //should return "Haskell Curry"
* bob.setFullName("Haskell Curry");
* bob.getFullName() should return "Haskell Curry"
* bob.setFullName("Haskell Curry")
* bob.getFirstName() should return "Haskell"
* bob.setFullName("Haskell Curry")
* bob.getLastName() should return "Curry"
*/