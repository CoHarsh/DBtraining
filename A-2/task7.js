function findPassingStudents(students) {
  // Filter students who passed the exam (scored 60 or above)
  let passingStudents = students.filter((student) => student.score >= 60);
  return passingStudents;
}

// Example usage:
let students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 62 },
  { name: "David", score: 58 },
  { name: "Eve", score: 75 },
];

let passingStudents = findPassingStudents(students);
console.log(passingStudents);
// Output: [
//   { name: 'Alice', score: 80 },
//   { name: 'Charlie', score: 62 },
//   { name: 'Eve', score: 75 }
// ]
