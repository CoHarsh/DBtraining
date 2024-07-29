function isPrime(num) {
  // Check if a number is prime
  if (num <= 1) return false; // 1 and below are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers
  if (num % 2 === 0 || num % 3 === 0) return false; // multiples of 2 and 3 are not prime

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function findPrimeNumbers(numbers) {
  // Filter prime numbers from an array
  return numbers.filter((num) => isPrime(num));
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
