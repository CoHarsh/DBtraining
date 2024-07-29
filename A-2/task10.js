function calculateTotalScore(objects) {
  let totalScore = 0;
  objects.forEach((obj) => {
    totalScore += obj.score;
  });
  return totalScore;
}

// Example usage:
let objects = [{ score: 80 }, { score: 65 }, { score: 75 }, { score: 90 }];

let totalScore = calculateTotalScore(objects);
console.log(totalScore); // Output: 310
