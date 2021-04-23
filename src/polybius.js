// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope 
  polybiusObj = {
    'a':11,
    'b':21,
    'c':31,
    'd':41,
    'e':51,
    'f':12,
    'g':22,
    'h':32,
    '(i/j)':42,
    'k':52,
    'l':13,
    'm':23,
    'n':33,
    'o':43,
    'p':53,
    'q':14,
    'r':24,
    's':34,
    't':44,
    'u':54,
    'v':15,
    'w':25,
    'x':35,
    'y':45,
    'z':55,
  }
  function polybius(input, encode = true) {
    if (!encode && (!input || input.split(' ').join('').length % 2 !== 0)) {
      return false;
    }
    input = input.toLowerCase();
    let result = '';
    if (encode) {
      for (let letter of input) {
        letter = letter === 'i' || letter === 'j' ? '(i/j)' : letter;
        if (Object.keys(polybiusObj).indexOf(letter) > -1) {
          result += polybiusObj[letter];
        } else {
          result += letter;
      }
    }
} else {
  swappedPolybius = swap(polybiusObj);
  for (let i = 0; i < input.length -1; input[i] === ' ' ? i++ : i+=2) {
    if (input[i] !== ' ') {
      const key = input[i].toString() + input[i+1].toString();
      if (swappedPolybius[key]) {
        result += swappedPolybius[key];
      }
    } else {
      result += input[i];
    }
  }
}
return result;
  }
  function swap(obj) {
    let ret = {};
    for (let key in obj) {
      ret[obj[key]] = key;
    }
    return ret;
  }
  return {
    polybius
  }
})();

module.exports = { polybius: polybiusModule.polybius };
