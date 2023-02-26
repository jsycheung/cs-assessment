// 1. Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

const addToZero = (numList) => {
  for (let i = 0; i < numList.length; i++) {
    if (numList.includes(numList[i] * -1)) {
      return true;
    }
  }
  return false;
};
// time complexity O(n^2) because Array.includes is O(n)
// space complexity O(1)

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// 2. Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters.
// Return False otherwise.

const hasUniqueChars = (str) => {
  let uniq = "";
  for (let i = 0; i < str.length; i++) {
    // Checking if the uniq contains the character
    if (uniq.includes(str[i])) {
      return false;
    } else {
      uniq += str[i];
    }
  }
  return true;
};

// time complexity O(n^2) because String.includes is O(n)
// space complexity O(n)

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

// 3. Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (str) => {
  str = str.toLowerCase();
  return alphabets.every((x) => str.includes(x));
};

// time complexity O(n)
// space complexity O(n)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// 4. Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (wordList) => {
  let wordLengthList = [];
  for (let i = 0; i < wordList.length; i++) {
    wordLengthList.push(wordList[i].length);
  }
  return Math.max(...wordLengthList);
};

// time complexity O(n)
// space complexity O(n)

console.log(findLongestWord(["hi", "hello"]));
// -> 5)
