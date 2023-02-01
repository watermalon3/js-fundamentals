// ? variables

/* 
	Containers that store data in memory 

	Declaration
		allows memory sapce to be reserved 
		start with let var or const 
		cannot start with a number or charaters other than $ or _
		if no vlauye is assigned, it's undefined 
	Initilization 
	assignment of data vlaue 
	can be any value or data type (str, int, arr, fc, class ect.)
	can be reassinged (except for const)
*/

// variable declaration
let firstName;

// Variable Declaration and variable initilization
let lastName = "Malone";
console.log(lastName);

// reassignment
firstName = "Tyler";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// (a) (b)  (c)			(d)
let address = "55 Norton Ave San Jose Ca";

// a - keyword
// b - varible identifier
// c - assigment operator
// d - value or initializer

// var is hoisted wheras let is not
// ! Don't use if you can avoid it
var age = 26;
console.log(26);

//? Const variable Cannot have a reassigned value

const ssn = 123 - 45 - 6789;
console.log(ssn);
// ssn = invalid ssn
// console.log(snn )// TyperError: cannot reassign a cosnt

/* 
	?Coding Practices for Variables 
	be concise (ex firstName instead userFirstName)
	be specfic (ex: value isntead of i)
	utlize camelCase(most popular), snake_case, PascalCase, or skewer-case 
	or nocse or SCREAMING_CASE 
*/

// !Challenge

const fName = "Tyler";
const lName = "Malone";
let addressN = 82;
let addressS = "Monroe st";
let addressC = "Burlington";
let addressState = "vermont";
let zip = "05401";
let mailaddress = `${addressN} ${addressS} \n ${addressC} ${addressState.toUpperCase()} ${zip} `;
let postaddress = `${fName} ${lName} \n ${mailaddress}`;
console.log(postaddress);
