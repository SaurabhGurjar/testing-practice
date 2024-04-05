import { add, subtract } from "../calculator";

describe("calculator", () => {
    describe("add two numbers", () => {
        describe("integers", () => {
            test("a = 1 b = 1", () => {
                expect(add(1, 1)).toEqual(2);
            });
            test("a = 2 b = 3", () => {
                expect(add(2, 3)).toEqual(5);
            }); 
            test("a = 1 b = 3", () => {
                expect(add(1, 3)).toEqual(4);
            });
        })
    

        describe("add two floating point numbers", () => {
            test("a = 1.2 b = 1.4", () => {
                expect(add(1.2, 1.4)).toBeCloseTo(2.6);
            });
            test("a = -2.1 b = 3.3", () => {
                expect(add(-2.1, 3.3)).toBeCloseTo(1.2);
            }); 
            test("a = -0 b = -0.2", () => {
                expect(add(-0, -0.2)).toBeCloseTo(-0.2);
            });
        });
        
        describe("inputs are not number", () => {
            test("a = '1' b = '2'", () => {
                expect(() => add("1", "2")).toThrow("Inputs are not valid numbers!");
            });
            test("no vaule passed", () => {
                expect(() => add()).toThrow("Inputs are not valid numbers!");
            });
            test("a = null b = null", () => {
                expect(() => add(null, null)).toThrow("Inputs are not valid numbers!");
            });
            test("a = NaN b = NaN", () => {
                expect(() => add(NaN, NaN)).toThrow("Inputs are not valid numbers!");
            });
            test("a = Infinity b = Infinity", () => {
                expect(() => add(Infinity, -Infinity)).toThrow("Inputs are not valid numbers!");
            });

        });

        describe("one input in not number", () => {
            test("a = '1' b = 2", () => {
                expect(() => add("1", 2)).toThrow("Inputs are not valid numbers!");
            });
            test("a = 3 b = null", () => {
                expect(() => add(3, null)).toThrow("Inputs are not valid numbers!");
            });
            test("a = 6 b = NaN", () => {
                expect(() => add(6, NaN)).toThrow("Inputs are not valid numbers!");
            });
            test("a = 8 b = -Infinity", () => {
                expect(() => add(8, -Infinity)).toThrow("Inputs are not valid numbers!");
            });
        });

        describe("number is to big", () => {
            test("a = 9007199254740991 b = 3", () => {
                expect(() => add(9007199254740996, 3)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a + b) <= 9007199254740991)!");
            });
            test("a = -9007199254740991 b = -3", () => {
                expect(() => add(-9007199254740996, -3)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a + b) <= 9007199254740991)!");
            });
        });
    });

    describe("subtract two numbers", () => {
        describe("integers", () => {
            test("a = 1 b = 1", () => {
                expect(subtract(1, 1)).toEqual(0);
            });
            test("a = 50 b = -37", () => {
                expect(subtract(50, -37)).toEqual(87);
            });
            test("a = -10 b = -4", () => {
                expect(subtract(-10, -4)).toEqual(-6);
            }); 
        });  

        describe("floating point number", () => {
            test("a = 0.4 b = 0.6", () => {
                expect(subtract(0.4, 0.6)).toBeCloseTo(-0.2);
            });
            test("a = -10.8 b = -0.2", () => {
                expect(subtract(-10.8, -0.2)).toBeCloseTo(-10.6);
            });
        });

        describe("invalid inputs", () => {
            test("empty", () => {
                expect(() => subtract()).toThrow("Inputs are not valid numbers!");
            });

            describe("one input is invalid", () => {
                test("a = '2' b = 3", () => {
                    expect(() => subtract("1", 3)).toThrow("Inputs are not valid numbers!");
                });
                test("a = null b = 4", () => {
                    expect(() => subtract(null, 4)).toThrow("Inputs are not valid numbers!")
                });
                test("a = 6 b = NaN", () => {
                    expect(() => subtract(6, NaN)).toThrow("Inputs are not valid numbers!")
                });
                test("a = undefined b = 4", () => {
                    expect(() => subtract(undefined, 4)).toThrow("Inputs are not valid numbers!")
                });
                test("a = Infinite b = 4", () => {
                    expect(() => subtract(Infinity  , 4)).toThrow("Inputs are not valid numbers!")
                });
            });

            describe("both inputs are invalid", () => {
                test("a = '2' b = '3'", () => {
                    expect(() => subtract("1", "3")).toThrow("Inputs are not valid numbers!");
                });
                test("a = null b = undefined", () => {
                    expect(() => subtract(null, undefined)).toThrow("Inputs are not valid numbers!")
                });
                test("a = NaN b = NaN", () => {
                    expect(() => subtract(NaN, NaN)).toThrow("Inputs are not valid numbers!")
                });
                test("a = undefined b = -Infinity", () => {
                    expect(() => subtract(undefined, -Infinity)).toThrow("Inputs are not valid numbers!")
                });
                test("a = Infinite b = -Infinity", () => {
                    expect(() => subtract(Infinity  , -Infinity)).toThrow("Inputs are not valid numbers!")
                });
            });
        });

        describe("numbers is to big", () => {
            describe("one input is out of safe range", () => {
                test("a = 9007199254740998 b = 4", () => {
                    expect(() => subtract(9007199254740998, 4)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a - b) <= 9007199254740991)!");
                });
                test("a = 10 b = 9007199254740996", () => {
                    expect(() => subtract(10, -9007199254740996)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a - b) <= 9007199254740991)!");
                });
            }); 

            describe("both inputs are out of safe range", () => {
                test("a = 9007199254740998 b = 9007199254740998", () => {
                    expect(() => subtract(9007199254740998, 9007199254740994)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a - b) <= 9007199254740991)!");
                });
                test("a = 10 b = 9007199254740996", () => {
                    expect(() => subtract(9007199254740992, -9007199254740996)).toThrow("Inputs exceed the safe range (-9007199254740991 <= (a, b, a - b) <= 9007199254740991)!");
                });
            }); 
        })
    });
});