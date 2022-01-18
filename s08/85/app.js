const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function isPangram(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  for (let letter of alphabet) {
    if (!lowerCaseSentence.includes(letter.toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));
