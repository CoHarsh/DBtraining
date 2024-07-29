function longestString(strings) {
  // Filter out strings with maximum length, then find the longest
  let longest = strings.reduce((acc, current) => {
    if (current.length > acc.length) {
      return current;
    } else {
      return acc;
    }
  }, "");

  return longest;
}

// Example usage:
let strings = ["apple", "banana", "orange", "kiwi", "pineapple"];
let longest = longestString(strings);
console.log(longest); // Output: "pineapple"
