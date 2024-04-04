import reverseString from "../reverse-string";

describe("reverse string", () => {
    test("reverse a word", () => {
        expect(reverseString("art")).toMatch("tra");
        expect(reverseString("car")).toMatch("rac");
        expect(reverseString("paper")).toMatch("repap");
        expect(reverseString("level")).toMatch("level");

    });

    test("reverse a sentence", () => {
        expect(reverseString("This is my car.")).toMatch(".rac ym si sihT");
    })

    test("not a string", () => {
        expect(() => reverseString(12)).toThrow("Input is not a string!");
        expect(() => reverseString(NaN)).toThrow("Input is not a string!");
        expect(() => reverseString(undefined)).toThrow("Input is not a string!");
        expect(() => reverseString(null)).toThrow("Input is not a string!");
        expect(() => reverseString(true)).toThrow("Input is not a string!");
        expect(() => reverseString(false)).toThrow("Input is not a string!");
        expect(() => reverseString(Infinity)).toThrow("Input is not a string!");
        expect(() => reverseString(-Infinity)).toThrow("Input is not a string!");
    })
});