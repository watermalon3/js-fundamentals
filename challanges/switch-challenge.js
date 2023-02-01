let gradeVariable = 15;
let grade = 93;

switch (true) {
  case gradeVariable > 89:
    console.log("You got an A");
    break;
  case gradeVariable > 79:
    console.log("You have got a B");
    break;
  case gradeVariable > 66:
    console.log("You have a C");
    break;
  case gradeVariable > 59:
    console.log("You have a D");
    break;
  case gradeVariable > 0:
    console.log("You have a F");
    break;
  default:
    console.log("This is not working");
}
