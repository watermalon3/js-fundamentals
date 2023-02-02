// ? Functions

/* 
	? a block of resusable code. it can:
	take in parameters (doors to the inside of your fx)
	preform an action
	and return a result 
	
	?there are two tyes of functions:
	functions declaration
		are hoisted
	funhction expression
		are not hoisted

	? functions
	need to be inkoed (called) to run
	can ahve none, one, or many parameters
	data coming through the parameter is called an argument 
	can only have one return statment value
	if no return is provided, it defaults to undefined

	Syntax:

	function identifier(parameter, parameter,){
		function code block
		return statment
	}


*/

function sayHello() {
  // return "Hello January Cohort"
  return "hello January Cohort";
}

console.log(sayHello());

function greetStudent(student) {
  return `Hello, ${student}`;
}

console.log(greetStudent("Paul"));
console.log(greetStudent("Tyler"));
console.log(greetStudent("Alex"));

function addNums(num1, num2) {
  return num1 + num2;
}

console.log(addNums(2, 4));

// ? Function Expressions

/* 
	utilizes a variable as a placeholder 

	let identifier = functions(params) {
		code block
		return statment
	}
*/

let nameAge = function (name, age) {
  return `Your name is ${name} and you're ${age} years old.`;
};
console.log(nameAge("Tyler", 27));

/* 
	? Challenge

	create a functions that will give you a restult of a quadratic formula basoed on all of the necessary factors. 
	chekc if the data type is a number if not, return " please use whole numbers only"
	Please return the result but also the vlaue of the top and bottom seperately 
*/

function Quad(a, b, c) {
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    return "Please use Numbers. Thank you!";
  }
  step1plus = -b + Math.sqrt(b * b - 4 * a * c);
  step1minus = -b - Math.sqrt(b * b - 4 * a * c);
  step2 = a * 2;
  step4Array = [step1plus / step2, step1minus / step2];
  return `Top part of equation with a plus sign is ${step1plus},Top part of equation with a minuse sign is ${step1minus}, Bottom part of the equation is ${step2}, The final answer ${step4Array}`;
}
console.log(Quad(1, -11, 24));

// ?

/* 
	Introduced in ES6
	concise way of writinbg function
	part of Fx expression fmaily
	do not bind to .this or super (more on that in Classes)

*/

// ? Concise Body Arrow Function

/* 
	Can only have no or one parameter 
	code block must not have { }
	return statment must be implicit 
*/

let greetEveryone = () => "Hello Everyone!";
console.log(greetEveryone());

let greetDoctor = (drName) => `Hello,${drName}`;
console.log(greetDoctor("Tyler"));

// ? Block Body Arrow Functions

let concatenateString = (str1, str2) => {
  if (typeof str1 == "string" && typeof str2 == "string") {
    return str1 + str2;
  } else {
    return `You can only pass string values as arguments`;
  }
};

console.log(concatenateString("hello", 1));

// ? Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("IIFE");
})();

let startAndStop = (start, stop) => {
  for (i = start; i <= stop; i++) {
    if (i % 15 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(`${i}`);
    }
  }
};

console.log(startAndStop(1, 50));
