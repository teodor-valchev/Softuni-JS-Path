function UpperCase(collection) {
  let patern = /\w+/gm;
  let wordsToUpper = [];

  let results = collection.match(patern);
  for (let i = 0; i < results.length; i++) {
    let currentWord = results[i];
    wordsToUpper.push(currentWord.toUpperCase());
  }
  console.log(wordsToUpper.join(", "));
}
UpperCase("how are you?");
