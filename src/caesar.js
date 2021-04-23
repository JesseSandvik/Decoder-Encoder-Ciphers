// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase().split('');
    let inputAlphaIndex;
    let indexCaesarShift;
    let encodeDecodeResult;
    const outputMessage = [];
     if (!shift || shift === 0 || shift < -25 || shift > 25) {
     return false;
     }
     for (let message in input) {
       const inputMessage = input[message];
       if (alphabetArr.includes(inputMessage)) {
         inputAlphaIndex = alphabetArr.indexOf(inputMessage);
         (encode === false) ? indexCaesarShift = inputAlphaIndex - shift : indexCaesarShift = inputAlphaIndex + shift;
         if (indexCaesarShift > 25){indexCaesarShift = indexCaesarShift - 26};
         if (indexCaesarShift < 0){indexCaesarShift = indexCaesarShift + 26};
         encodeDecodeResult = alphabetArr[indexCaesarShift];
         outputMessage.push(encodeDecodeResult);
       } else {
         {outputMessage.push(inputMessage)};
       }
      }
       return outputMessage.join('');
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
