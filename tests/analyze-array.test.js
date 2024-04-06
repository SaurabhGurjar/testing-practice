import analyzeArray from "../analyze-array";

describe("analyze an array", () => {
    test("[1]", () => {
        const obj =  {
            average: 1,
            min: 1,
            max: 1,
            length: 1
        };
        expect(analyzeArray([1])).toMatchObject(obj);
    });

    test("[2]", () => {
        const obj =  {
            average: 2,
            min: 2,
            max: 2,
            length: 1
        };
        expect(analyzeArray([2])).toMatchObject(obj);
    });

    test("[1, 2]", () => {
        const obj =  {
            average: 1.5,
            min: 1,
            max: 2,
            length: 2
        };
        expect(analyzeArray([1, 2])).toMatchObject(obj);
    });

    test("[1,8,3,4,2,6]", () => {
        const array = [1,8,3,4,2,6];
        const obj =  {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        };
        expect(analyzeArray(array)).toMatchObject(obj);
    });
});

describe("error handling", () => {
    test("not all items in an array are numbers [1,'8',3,4,2,6]", () => {
        const array = [1,'8',3,4,2,6];
        const errorMsg = "there are non-numeric elements in the array.";
        expect(() => analyzeArray(array)).toThrow(errorMsg);
    });

    test("not all items in an array are numbers [null,'8',3,4,2,6]", () => {
        const array = [null,'8',undefined,false,2,6];
        const errorMsg = "there are non-numeric elements in the array.";
        expect(() => analyzeArray(array)).toThrow(errorMsg);
    });
    
    test("not all items in an array are numbers [null,'8',3,4,2,6]", () => {
        const array = [null,'8',undefined,false,2,6];
        const errorMsg = "there are non-numeric elements in the array.";
        expect(() => analyzeArray(array)).toThrow(errorMsg);
    });

    test("empty array", () => {
        const errorMsg = "input array is empty."
        expect(() => analyzeArray([])).toThrow(errorMsg);
    });

    describe("invalid input", () => {
        const errorMsg = "input is not an array."
        test("null", () => {
            expect(() => analyzeArray(null)).toThrow(errorMsg);
        });

        test("{}", () => {
            expect(() => analyzeArray({})).toThrow(errorMsg);
        });

        test("undefined", () => {
            expect(() => analyzeArray(undefined)).toThrow(errorMsg);
        });

        test("undefined", () => {
            expect(() => analyzeArray("undefined")).toThrow(errorMsg);
        });
    });
});