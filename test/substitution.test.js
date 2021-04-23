// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("Substitution alphabet is missing", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const input = "decades";
        const actual = substitution(input);
        expect(actual).to.be.false;
    });
});

describe("Substitution alphabet is not 26 characters", () => {
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const input = "decades";
        const alphabet = "xoyqmcgrukswaflnthdjpzibevx"
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
});

describe("Substitution alphabet does not contain unique characters", () => {
    it("should return false if the substitution alphabet does not contain only unique characters", () => {
        const input = "decades";
        const alphabet = "xoyqmcgrukswaflnthdzibevxb"
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
});

describe("Encodes a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });
});

    describe("Encode with any kind of unique characters ", () => {
    it("should work with any kind of key with unique characters", () => {
      const message = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });
});

    describe("Encode while preserving spaces", () => {
    it("should preserve spaces", () => {
      const message = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  });

  describe("Decode a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
});

    describe("Decode with any kind of unique characters", () => {
    it("should work with any kind of key with unique characters", () => {
      const message = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
});

    describe("Decode while preserving spaces", () => {
    it("should preserve spaces", () => {
      const message = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
  });