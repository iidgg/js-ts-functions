function toCamelCase(sentence) {
  // Replace any whitespace or punctuation with a space
  const words = sentence.replace(/[^\w\s]/g, " ").split(" ");
  // Convert the first word to lowercase and capitalize the rest
  const camelCaseWords = words.map((word, index) =>
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  // Join the words together without spaces
  const camelCase = camelCaseWords.join("");
  return camelCase;
}

// Test

const sentence = "The quick brown fox jumps over the lazy dog.";
const camelCase = toCamelCase(sentence);
console.log(camelCase); // Output: "theQuickBrownFoxJumpsOverTheLazyDog"
