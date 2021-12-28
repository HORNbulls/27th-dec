//console.log("hi");

/*TASK - 27th dec
CALL:
* Call invokes the function and allows us to pass in arguments one by one.
* Call is used for comma or separated list.
* Call is interchangable.
//EXAMPLE FOR CALL:
var stud1 = {firstName: 'Prasanna', lastName: 'Siva'};
var stud2 = {firstName: 'Ajith', lastName: 'Kumar'};

function intro(welcome) {
    console.log(welcome + ' ' + this.firstName + ' ' + this.lastName);
}

intro.call(stud1, 'Hello');
intro.call(stud2, 'Hello');

APPLY:
* Apply invokes the function and allows us to pass in arguments as an array.
* Apply is used for array.
* Apply is interchangable.
//EXAMPLE FOR APPLY:
var stud1 = {firstName: 'Prasanna', lastName: 'Siva'};
var stud2 = {firstName: 'Ajith', lastName: 'Kumar'};

function intro(welcome) {
    console.log(welcome + ' ' + this.firstName + ' ' + this.lastName);
}

intro.apply(stud1, ['Hello']);
intro.apply(stud2, ['Hello']); 

BIND:
* Bind returns a new function, allowing us to pass in a this array and any number of arguments.
* Bind returns a new function.
* Bind has more advantages compared to call and apply.
//EXAMPLE FOR BIND:
var stud1 = {firstName: 'Prasanna', lastName: 'Siva'};
var stud2 = {firstName: 'Ajith', lastName: 'Kumar'};

function intro(welcome) {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var introstud1 = intro.bind(stud1);
var introstud2 = intro.bind(stud2);

introstud1(); 
introstud2();

PROTOTYPE INHERITENCE:
*Prototype inheritance refers to the ability to access object properties from another object.
*We use a JavaScript prototype to add new properties and methods to an existing object constructor.
*Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
*All JavaScript objects inherit properties and methods from a prototype:
1)Date objects inherit from Date.prototype
2)Array objects inherit from Array.prototype
3)Player objects inherit from Player.prototype

//EXAMPLE OF PROTOTYPE INHERITENCE:
let n = function () {
   this.a = 1;
   this.b = 2;
}
let x = new n();
n.prototype.b = 3;
n.prototype.c = 4;
console.log(x.a);
console.log(x.b);
console.log(x.c);
console.log(x.d);

*/

