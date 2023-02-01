// ? loops

/* 
	allow us to execute a block oif code repearedly until an exit condition has been met
*/

// ? For Loop

/* 
	we set out loops in a way where we can:
		see where we are in a loop
		condisder the condition we run it against 
		note when we are done with the condition
*/

//for (start; stop; step) {
//	code block to execute until stop condition returns false
//}

Syntax: for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ? Infinite loop - lack of stop condition
// for(let i = o; i++){
// 	console.log(i)
// }

let longWordEn = "supercalifragilisticecpialidocious";

for (i = 0; i < longWordEn.length; i = i + 1) {
  console.log(`Index: ${i}, Letter: ${longWordEn[i]}`);
}

// ? for-in loop

/* 
	alllows us to seek an index valye of azn iterable against a condition.
	for-in loops do not require an index number
	for in do not reuqre a stop statment
*/

let longWordDE = "kraftfahrzeug-haftplifchtversicherung";

for (i in longWordDE) {
  console.log(i);
}

//  ? for-of loop

/* 
	allows us to seek iterable valye against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka";

for (i of longWordPL) {
  console.log(i);
}

/* 
diffrence betweern for in and for of in tersm of use 
	for in allow sus to loop over iteam that are not an arry 
	for-of only works if an item is indexed like na arry or a string 

*/

for (i = 4; i >= -100; i = i - 4) {
  console.log(i);
}

let animalArray = ["pig", "cat", "mouse", "dog", "bird"];

for (i = 0; i < 5; i++) {
  switch (animalArray[i]) {
    case "pig":
      console.log("oink");
      break;
    case "cat":
      console.log("meow");
      break;
    case "mouse":
      console.log("squeek");
      break;
    case "dog":
      console.log("whoof");
      break;
    case "bird":
      console.log("coo coo");
      break;
  }
}

// ? While loop

/* 
 	excutes a statment isndie of a code block 
	it does so as long as a while condition evaluates to ture 

	syntax 


	while (true){
		do this until false
	}

*/

let loopCount = 0;

while (loopCount <= 100) {
  console.log(loopCount);
  loopCount++;
  // or
  // loopCount = loopCount + 1
  // loopCount += 1
}

// How to use while to iterate over an iterable

let carArray = ["Honda", "BMW", "Porsche", "Lada", "Maserati"];

let carCount = 0;

while (carCount < carArray.length) {
  console.log(carArray[carCount]);
  carCount += 1;
}

// ? Do While Loop

/* 
    Executes code in the do section while a condition remains true
*/

let doCount = 0;

do {
  console.log(carArray[doCount]);
  doCount = doCount + 1;
} while (doCount < carArray.length);
