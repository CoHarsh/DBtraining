function sumOfNumbers(numbers) {
  // Using reduce to compute the sum of all elements
  let sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let totalSum = sumOfNumbers(numbers);
console.log(totalSum); // Output: 15
