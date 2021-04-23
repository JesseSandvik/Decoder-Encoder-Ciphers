// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("False if shift is equal to zero", () => {
    it("should return false if shift value is 0", () => {
        const input = "Thinkful";
        const shift = 0;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
});

describe("False if shift value is not present ", () => {
    it("should return false if shift value is not present", () => {
        const input = "Thinkful";
        const actual = caesar(input);
        expect(actual).to.be.false;
    });
});

describe("False if shift value is above 25", () => {
    it("should return false if shift value is above 25", () => {
        const input = "Thinkful";
        const shift = 99;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
});

describe("False if shift value is below -25", () => {
    it("should return false if shift value is less than -25", () => {
        const input = "Thinkful";
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
});

describe("Encode a message", () => {
    it("should encode a message by shifting the letters", () => {
        const input = "thinkful";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "wklqnixo"
        expect(actual).to.eql(expected);
    });
});

describe("Encode and leaves spaces and other symbols", () => {
    it("should encode and leave spaces and other symbols as is", () => {
        const input = "a ce_";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "d fh_"
        expect(actual).to.eql(expected);
    });
});

describe("Encode and ignores capital letters", () => {
    it("should encode and ignore capital letters", () => {
        const input = "BAsH";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "edvk"
        expect(actual).to.eql(expected);
    });
});

describe("Encode and handles letters at the end of the Alphabet", () => {
    it("should encode and correctly handle the letters at the end of the alphabet", () => {
        const input = "zag";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "cdj"
        expect(actual).to.eql(expected);
    });
});

describe("Encode while allowing for a negative shift to the left", () => {
    it("should encode while allowing for a negative shift to the left", () => {
        const input = "zig";
        const shift = -3;
        const actual = caesar(input, shift);
        const expected = "wfd"
        expect(actual).to.eql(expected);
    });
});

describe("Decode a message by shifting the letters", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const input = "edvk";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "bash"
        expect(actual).to.eql(expected);
    });
});

describe("Decode while leaving spaces and other symbols", () => {
    it("should decode while leaving spaces and other symbols as is", () => {
        const input = "_edv  k";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "_bas  h"
        expect(actual).to.eql(expected);
    });
});

describe("Decode while ignoring capital letters", () => {
    it("should decode while ignoring capital letters", () => {
        const input = "wKlqnIXo";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "thinkful"
        expect(actual).to.eql(expected);
    });
});

describe("Decode while handling letters at the end of the alphabet", () => {
    it("should decode while appropriately handling the letters at the end of the alphabet", () => {
        const input = "cdj";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "zag"
        expect(actual).to.eql(expected);
    });
});

describe("Decode while allowing for a negative shift to the left", () => {
    it("should decode while allowing for a negative shift to the left", () => {
        const input = "cfd";
        const shift = -3;
        const actual = caesar(input, shift, false);
        const expected = "fig"
        expect(actual).to.eql(expected);
    });
});