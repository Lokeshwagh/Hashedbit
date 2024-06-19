// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    const words = paragraph
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    return words.length;
  }
  const paragraph =
    "This is an example paragraph. It has multiple words.Hi this is my code which i am writing in JS.";
  console.log(countWords(paragraph));
  // Output: 19