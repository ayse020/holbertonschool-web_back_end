import { listOfStudents } from "./9-hoisting.js";

console.log("Full student descriptions:");
listOfStudents.forEach((student) => {
  console.log(student.fullStudentDescription);
});

console.log("\nList of students:");
console.log(listOfStudents);
