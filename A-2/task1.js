function cubesOfNumbers(numbers) {
  // Using map to iterate over the array and compute cubes
  let cubes = numbers.map((num) => num ** 3);
  return cubes;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let cubes = cubesOfNumbers(numbers);
console.log(cubes); // Output: [1, 8, 27, 64, 125]
