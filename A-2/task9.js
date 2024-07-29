function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case "add":
        resolve(num1 + num2);
        break;
      case "subtract":
        resolve(num1 - num2);
        break;
      case "multiply":
        resolve(num1 * num2);
        break;
      case "divide":
        if (num2 === 0) {
          reject("Division by zero is not allowed");
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject(
          "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'."
        );
    }
  });
}

// Example usage:
calculate(10, 5, "add")
  .then((result) => console.log(result)) // Output: 15
  .catch((error) => console.error(error));

calculate(10, 0, "divide")
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); // Output: Division by zero is not allowed
