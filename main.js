var testGrade = Math.floor(Math.random() * 100);
console.log(testGrade);

if (testGrade >= 90) {
  console.log("You get an A");
} else if (testGrade < 90 && testGrade >= 80) {
  console.log("You get a B");
} else if (testGrade < 80 && testGrade >= 71) {
  console.log("You get a C");
} else if (testGrade < 71 && testGrade >= 65) {
  console.log("You get a D");
} else {
  console.log("You get an F");
}
