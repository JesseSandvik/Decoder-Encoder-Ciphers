// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const unique = new Set(alphabet.split(''));
    if (Array.from(unique).length !== alphabet.length) {
      return false;
    }
    input = input.toLowerCase();
    let indexInputAlpha;
    let substitutionCipher = '';
    for (let text of input) {
      if (encode) {
        const index = alphabetArr.indexOf(text);
        if (index > -1) {
          substitutionCipher += alphabet[index];
        } else {
          substitutionCipher += text;
        }
      } else {
        const index = alphabet.indexOf(text);
        if (index > -1) {
          substitutionCipher += alphabetArr[index];
        } else {
          substitutionCipher += text;
        }
      }
    }
    return substitutionCipher;
}
return {
  substitution,
};
})();

module.exports = { substitution: substitutionModule.substitution };
