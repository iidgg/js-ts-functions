function createAcronym(sentence: string): string {
  let words: string[] = sentence.split(/[ -_/]/); // use regex to match spaces, hyphens, underscores, and forward slashes
  let acronym: string = "";
  
  if (words.length === 1) {
    acronym = words[0].slice(0,2).toUpperCase(); // if the sentence contains only one word, return the first 2 letters
  } else {
    let firstLetter: string = words[0].charAt(0);
    let lastLetter: string = words[words.length - 1].charAt(0);
    acronym = firstLetter + lastLetter;
  }
  
  return acronym;
}
