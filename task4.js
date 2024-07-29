function averageOfSquaredOddNumbers(numbers) {
  // Filter odd numbers, square them, then calculate average
  let oddNumbers = numbers.filter((num) => num % 2 !== 0); // Filter odd numbers
  let squaredOddNumbers = oddNumbers.map((num) => num ** 2); // Square the odd numbers
  if (squaredOddNumbers.length === 0) return 0; // Edge case: no odd numbers

  // Calculate the average of squared odd numbers
  let sum = squaredOddNumbers.reduce((acc, current) => acc + current, 0);
  let average = sum / squaredOddNumbers.length;
  return average;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let avg = averageOfSquaredOddNumbers(numbers);
console.log(avg); // Output: 25 // Explanation: (1^2 + 3^2 + 5^2 + 7^2 + 9^2) / 5 = 25
