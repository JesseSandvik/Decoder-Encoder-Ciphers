const { expect } = require("chai");
const { polybius } = require("../src/polybius");

    describe("Encode a message", () => {
      it("Should encode a message by translating each letter to a pair of numbers", () => {
        const input = "message";
        const actual = polybius(input);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
    });
});

    describe("Encode should translate 42 to both 'i' and 'j", () => {
it("Should translate 42 to both 'i' and 'j'", () => {
    const message = "jiggle";
    const actual = polybius(message);
    const expected = "424222221351";

    expect(actual).to.equal(expected);
  });
});

    describe("Encode should leave spaces as is", () => {
  it("Should leave spaces as is", () => {
    const message = "my message";
    const actual = polybius(message);
    const expected = "2345 23513434112251";

    expect(actual).to.equal(expected);

    describe("Decode a message", () => {
      it("Should decode a message by translating each pair of numbers into a letter", () => {
        const message = "23513434112251";
        const actual = polybius(message, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
    });
  
      describe("Decode should translate 42 to both 'i' and 'j", () => {
      it("Should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });
    });

      describe("Decode should leave spaces as is", () => {
      it("Should leave spaces as is", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
    });
  
      describe("Decode and return false if length of numbers is odd", () => {
      it("Should return false if the length of all numbers is odd", () => {
        const message = "2345 235134341122514";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
      });
    });
  });
});