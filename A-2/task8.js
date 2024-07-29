function createInstanceCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Example usage:
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
