/**
 Implement a function to highlight text if a searched term appears within it.
 */

export default function textSearch(text, query) {
  let text = text.trim();
  let query = query.trim();

  // check if either 'text' or 'query' is empty
  // if 'true' return 'text' as it is
  if (text === "" || query === "") {
    return text;
  }

  // initialize an 'array' of the length same as 'text'
  let binaryArray = Array.from({ length: text.length }, () => 0);

  // initialize the positions of 'binaryArray' to 1
  // which matches the 'query'
  for (let index = 0; index < text.length; ) {
    let subString = text.slice(index, index + query.length);

    if (subString.toLowerCase() === query.toLowerCase()) {
      binaryArray.fill(1, index, index + query.length);

      index = index + query.length;
    } else index++;
  }

  let highLightedString = "";

  for (let startingIndex = 0; startingIndex < text.length; startingIndex++) {
    let startingTag =
      binaryArray[startingIndex] === 1 && binaryArray[startingIndex - 1] !== 1;
    let endingTag =
      binaryArray[startingIndex] === 1 && binaryArray[startingIndex + 1] !== 1;

    let charToInsert = text[startingIndex];

    if (startingTag) {
      charToInsert = "<b>" + charToInsert;
    } else if (endingTag) {
      charToInsert = charToInsert + "</b>";
    }

    highLightedString += charToInsert;
  }

  return highLightedString;
}
