import capitalize from "../capitalize";

describe("capitalize", () => {
    test("uppercase", () => {
        expect(capitalize("a")).toBe("A");
        expect(capitalize("b")).toBe("B");
        expect(capitalize("c")).toBe("C");
        expect(capitalize("d")).toBe("D");
        expect(capitalize("e")).toBe("E");
        expect(capitalize("f")).toBe("F");
    });
    
    test("capitalize a word", () => {
        expect(capitalize("apple")).toMatch("Apple");
        expect(capitalize("car")).toMatch("Car");
        expect(capitalize("space")).toMatch("Space");
        expect(capitalize("flower")).toMatch("Flower");
        expect(capitalize("Infinity")).toMatch("Infinity");
        expect(capitalize("NaN")).toMatch("NaN");
    });
    
    test("capitalize a sentence", () => {
        expect(capitalize("the apple is red")).toMatch("The apple is red");
        expect(capitalize("space is empty.")).toMatch("Space is empty.");
        expect(capitalize("your car is very fast.")).toMatch("Your car is very fast.");
    });
    
    test("empty string", () => {
        expect(capitalize("")).toMatch("");
    });
    
    test("not a string error", ()  => {
        expect(() => capitalize(1)).toThrow("Input is not a string!");
        expect(() => capitalize(0)).toThrow("Input is not a string!");
        expect(() => capitalize(true)).toThrow("Input is not a string!");
        expect(() => capitalize(false)).toThrow("Input is not a string!");
        expect(() => capitalize(NaN)).toThrow("Input is not a string!");
        expect(() => capitalize(undefined)).toThrow("Input is not a string!");
        expect(() => capitalize(null)).toThrow("Input is not a string!");
        expect(() => capitalize(Infinity)).toThrow("Input is not a string!");
        expect(() => capitalize(-Infinity)).toThrow("Input is not a string!");
    });

    test("stringified number", () => {
        expect(() => capitalize("10")).toThrow("Input is a stringified number!");
        expect(() => capitalize("100")).toThrow("Input is a stringified number!");
        expect(() => capitalize("0.2")).toThrow("Input is a stringified number!");
    });
});