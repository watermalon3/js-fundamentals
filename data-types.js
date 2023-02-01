// ? Javascript

/* 
	JS was founded in 1996 by Brandon Eich
	* client-side language (runs in the browser)
	* interpreted language, not compiled 
	*frist-class-function - finctionsa re treated like any other varibale 
	*functtional language 
	* object-oriented language 
	* protoype-based 
	* imperative 
	* ECMAScript - organization setting language standards 
	*
*/

// ? Comments

/*
 *Blocks of code that are  not being interpreted
 * donated by // for single line
 * Denoted by /* for multi-line
 * Comments are read but noty exceuted
 * as studnets, it helps us with note taking
 * As devs, it documents our code making it more maintainable
 */

//  ? Console object

/* 
	give us access to the browser's or node debugging console.
	allow developer to biew output from their program 

*/
2 + 2; // runs but doesn't show
console.log(2 + 2);

//  ? Data Tyoes

/* 
	? JS DATA TYPES
		Primitive
			string 
			number
			boolean 
			null
			undefined 
			not a number (Nan)
		Reference 
			Array
			object 

*/

// Strings

/* 
	Primitive dat type reporesenting characters (text)
	Enclosed ``, "", '',

	emaples 
*/

console.log("This is a text");
console.log("this is also a text");
console.log(`Text using string interpolation backticks`);

// This is also a string representation of number
console.log("2023");

// WE can add (concatenate) strings
console.log("I'm Tyler" + "I am 27 years old.");

// strings are indexed starting from zero
// index_value goes between []
// ! strings are immutable
console.log("klajshdlkhdklasdlkjhasdkljh"[5]);

//  string interpolation (` `)
/* 
	a process of including a space for an expression 
	syntax:
		styring ${ expression } string
*/

console.log(`My name is Tyler and I am ${20 + 7} years old`);

/* 
? string Medthos 
	.length 
	.slice ()
	.toUppercase()
	toLowercase() 

*/

/* 
	?chekcing date types using typeof operator 
*/

console.log(typeof "1990");

// multi-line strings
// done using escaoe charater "\n"
console.log("Paul Niemczyk \n 123 main st \n 312 55 0808");

// ? numbers

/* 
	any integer or decimal 
*/

console.log(25);

// ? Booleans

/* 
	binary Value 
	either true (on) or false (off)
	examples of faslsey values
		0
		undefined 
		null
		Nan
*/

console.log(2 == 2);
console.log(2 == 5);

// Boolean() interface returns whether value is truthy or fasley
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(null));

/* 
	javescriptes is a weakly-typed programming language 
	doesn't require date type definition 
	comparison operator (= =) performs type coercion beofre resolving expression 
	we can use strict equality === to aviod type coercion 
*/
// type coercion of numbers to string string concaenation
console.log(2 == "2"); // returns true ("22")
console.log(2 === "2"); // returns false

// ! dont use type coercion but understand it

// ? Null and undefined

/* 
	Null - xplains the lack of existence (nothing)
	Undefined - explains the lack of value 
*/

// ? operators

/* 
	addtioons +
	substraction -
	division /
	exponent **
	dot .
	module % --> more on it later
	assignment = single
	comaprison == double
	strict comparison === triple 
*/

// ? Expressions

/*  
unprocssed values groupd using the ()
Evaluted to be Turthy or Fasley 
can be empty ()

	expression evulate
*/

// ? Statements

/* 
	keyword 
	expression 
	and code block 

	statement evaluted and executes code block when invoked 
*/

// Modulo (%)

/* 
	checks for reminers of long division
*/
console.log(12 % 3); // returns 0
console.log(12 % 5); // returns 2
