function capitalizeFirstLetter(sentence) {
  // Split the sentence into words, capitalize the first letter of each word, then join back
  let words = sentence.split(" ");
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let capitalizedSentence = capitalizedWords.join(" ");
  return capitalizedSentence;
}

// Example usage:
let sentence = "hello world, how are you?";
let capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(capitalizedSentence); // Output: "Hello World, How Are You?"
