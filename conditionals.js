// ? Conditionals & Logic Gates

/* 
	conditional statments check if an expression is true 
	tHe exoressions must always resoolve to true 
	if it's truthy, a code within a stament excutes 
	if expression is false, nothing happens unless we specify otherwise 

 
 */

// ? falsey Values

/* 
	falsey value is one that is considered false in boolean context 

 	if js expects false boolean, it can return the following:
 false
 0
 ''
 ""
 undefied 
 null 
 nan

*/

/* 
 	 ? if statement  
	 checks if something is true and excutes code
*/

let lightSwitch = 1;

if (lightSwitch) {
  console.log("The light is on");
}

/* 
	? Else if statement 
	allows us to do add addditional condition if the prior one has not been stisfied
*/

let temp = 38;

if (temp >= 50) {
  console.log("it's nice out");
} else if (temp < 50 && temp > 32) {
  console.log("temp is really getting cold");
} else if (temp <= 32) {
  console.log("Watch out for ice!");
} else {
  console`${temp} is not a valid temperature range`;
}

/* 
	?Else statment 
	if all else fails, execute this code 
*/

/* 

	?  syntax:

	if(condition is true){
		excute code black
	} else if (conditionIsture){
		excute code block
	} else {
		exacute code block
	}

*/

/* 
	?Logical Operators Not AND OR

		or operator (||)
			* ex: I will be happy if I go to the movies or eat dinner
        	* (dinner & movies = true)
        	* (no dinner & movies = true)
        	* (dinner & no movie = true)
        	* (no dinner & no movie = false)

		And Operator (&&)
			ture if both conditions are true 

		NOT operator (!)
			flips the logical expersion

*/

lightSwitch = false;

if (!lightSwitch) {
  // (lightSwitch == fasle)
  // (!lightSwitch)
  // (lightSwitch !== true)
  // All of the above mean the same thing
  console.log("light switch is off");
}

// AND Example

let home = true;
lightSwitch = false;

if (home && lightSwitch) {
  // (home == true && lightSwitch == true)
  console.log("You're home and the lights are on");
} else if (home && !lightSwitch) {
  // (home == true && lightSwitch == false)
  console.log("You forgot to turn on the lights");
} else if (!home && lightSwitch) {
  // (home == false && lightSwitch == true)
  console.log("You forgot to turn off the lights");
} else {
  console.log("Home is empty and lights are off");
}

let age = 19.5;
let sex = "female";

if (age < 16) {
  console.log("You can't be driving");
} else if (age >= 16 && age < 18 && sex === "male") {
  console.log("Your insurance is super expsensive");
} else if (age >= 16 && age < 18 && sex === "female") {
  console.log("Your insurance is high but not super expsensive");
} else if (age >= 18 && age <= 21 && sex === "male") {
  console.log("Your insurance is avarage");
} else if (age >= 18 && age <= 21 && sex === "female") {
  console.log("your insurance is below average");
} else if (age > 21) {
  console.log("Isurance is cheap for you");
}

// ? Ternaries

/* 
	a quick watyy of creating an if/else conditional
	commely used to check quick conditions 
*/

let ignition = true;
// true for on fasle for off

let ignitionCount = 0;

if (ignition) {
  console.log("The car is on");
  ignitionCount = ignitionCount + 1;
  console.log(`Ignition count: ${ignitionCount}`);
} else {
  console.log("The car is off");
}

ignition ? console.log("Car is on") : console.log("Car is off");

// chaining ternaries

let season = 1;

if (season == 1) {
  console.log("spring");
} else if (season == 2) {
  console.log("summer");
} else if (season == 3) {
  console.log("autumn");
} else if (season == 4) {
  console.log("winter");
}

season = 1
  ? console.log("spring")
  : season == 2
  ? console.log("summer")
  : season == 3
  ? console.log("autumn")
  : season == 4
  ? console.log("winter")
  : null;

//   if you do not have else statement, you must use a null
/* 
	ternary Syntax:

	conditional ? code block if true: code block if fasle 

	conditional ? code block if ture
				: else if statement ? code block if true 
				:else if statement ? code block if true 
				:else if statement ? code block if true 
				:else if statement ? code block if true 
				: else null or statement 


*/
age = 22;
age < 18
  ? console.log("you're still a teenager")
  : age < 21
  ? console.log("you can travel but cannot drink")
  : age >= 21
  ? console.log("you can drink")
  : null;
// remember to double check your logic so there is not any gaps

// ? Switch Statements

/* 
	Switches execute a block of code dependent upon a different case 

	We aswk a question that requires a specific response determind by our asnwer

*/

let uprightInstructor = "Benny";

switch (uprightInstructor) {
  // information that cases are compared against
  case "Pual":
    console.log(`${uprightInstructor} is a Lead S Instructor`);
    // condition that's compared against switch
    // exacute the code below
    break;
  // usesd to stop oother cases from evaluating
  case "Rob":
    console.log(`${uprightInstructor} is on vacation`);
    break;
  case "Matt":
    console.log(`${uprightInstructor} is an Operations Manager`);
    break;
  default:
    console.log(`${uprightInstructor} may or may not work here`);
}
