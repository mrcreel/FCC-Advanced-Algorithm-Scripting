var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
    var firstName = fullName.split(' ')[0];
    var lastName = fullName.split(' ')[1];

    this.getFullName = function() {return fullName;};
    this.setFullName = function(x) {
    	firstName = x.split(' ')[0];
    	lastName = x.split(' ')[1];
    	fullName = firstName + " " + lastName;
    	return fullName;
    };

    this.getFirstName = function() {return firstName;};
    this.setFirstName = function(x) {
    	firstName = x;
    	fullName = firstName + " " + lastName;
    	return fullName;
    };

    this.getLastName = function() {return lastName;};
    this.setLastName = function(x) {
    	lastName = x;
    	fullName = firstName + " " + lastName;
    	return fullName;
    };
};

var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length); //should return 6.
console.log(bob instanceof Person); //should return true.
console.log(bob.firstName); //should return undefined.
console.log(bob.lastName); // should return undefined.
console.log(bob.getFullName()); //should return "Bob Ross".
console.log(bob.getFirstName()); //should return "Bob".
console.log(bob.getLastName()); //should return "Ross".
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName()); //should return "Haskell Ross"
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName()); //should return "Haskell Curry"
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName()); //should return "Haskell Curry"
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFirstName()); //should return "Haskell"
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getLastName()); //should return "Curry"