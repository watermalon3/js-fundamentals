// ? Scope and Hiositing

/* 
	
    Scope is used to determine how information in different blocks of code can be accessed.

    Five types of scope:
    * Global/window
    * Block
    * Function
    * Module
    * Lexical

*/

// ? Global Scope

/* 

	outermost scope
	window object when in clietn
	js file when in node
	accessible from every other sscope
*/

let globalScopeVar = "This is a global scope variable";

// ? Function Scope

/* 
	acssible only indide of the function
*/

function scope() {
  let fxsv = "This is a fx scope variable";
  console.log(fxsv);
  console.log(globalScopeVar);
}

scope();

// console.log(fxsv) // reference Error
// Cannot access fx scope from global scope

// ? Block Scope

/* 
	Can be anywhere there are {}
	Cab be put anywhere

*/

{
  let bsv = "block scope variable.";
}

// console.log(bsv) // refrence error

// ? Lexical Scope

/* 
	variables are accessible by their nested position
	inner fx scope can access outer fx scope
*/

function outerFx() {
  let ofxv = "outer fx scope variable";

  function innerFx() {
    let ifxv = "inner fx scope variable";
    console.log(ofxv);
    return ifxv;
  }
  return innerFx();
}

console.log(outerFX());

// ? Modukle Scope

/* 
	encapsulates objects nested inside of other modules or files
	allows the use other files
*/

// const states = require("./states");

// ? Hoisting

/*
 * JS' parsing engine reads top to bottom, left to right
 * JS' interpreter runs the code twice.
 * First, it looks for VARiables and fx declarations & hoists them
 * It allocates memory space to those declarations
 * Then it executes the code line-by-line
 */

// console.log(myName) // Reference Error: cannot access before initilization
let myName = "Paul Niemczyk";
console.log(myName);

console.log(isTeacher); // Returns undefined
var isTeacher = true;
// console.log(isTeacher)

// ? Function Declarations ARE hoisted

displayName("Paul");

function displayName(str) {
  console.log(`Hello, ${str}`);
}

displayName("John");

console.log(returnName("paul"));

function returnName(name) {
  return capitalize(name);
}

function capitalize(str) {
  return str.toUpperCase();
}

// ? Function Expressions are NOT hoisted

// console.log(returnNameExpression("Tyler")) // Reference Error

let returnNameExpression = function (name) {
  return capitalizeExpression(name);
};

// console.log(returnNameExpression("Paul")) // Reference Error

let capitalizeExpression = function (str) {
  return str.toUpperCase();
};

console.log(returnNameExpression("Paul"));

function run() {
  var foo = "foo";
  let bar = "bar";
  console.log(foo, bar);
  {
    var moo = "moo";
    let baz = "baz";
    console.log(moo, baz);
    {
      var deepIn = "really nested";
    }
  }
  console.log(moo); // Works: scoped to immediate function
  //   console.log(baz); // reference Erro: scoped to block
  console.log(deepIn);
}

// console.log(tyler) // reference Error: scoped to run functions

{
  {
    var something = "This is something";
  }
}

console.log(something); // runs becasue global scope is a function

// ! this is bad! don't use hoiastying to your "benefit"!

/* 
	JS objects not hoisted 
	let 
	const
	fx expressions
	all classes (both declarations and expression)
*/
