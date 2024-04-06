import caesarCipher from "../caesar-cipher";

describe("encript", () => {
    describe("key equal 1", () => {
        test("", () => {
            expect(caesarCipher("")).toMatch("");
        });
        test("the", () => {
            expect(caesarCipher("the")).toMatch("uif");
        });
        test("pen", () => {
            expect(caesarCipher("pen")).toMatch("qfo");
        });
        test("ten", () => {
            expect(caesarCipher("ten")).toMatch("ufo");
        });
        test("xyz", () => {
            expect(caesarCipher("xyz")).toMatch("yza");
        });
        test("zab", () => {
            expect(caesarCipher("zab")).toMatch("abc");
        });
    });

    describe("key equal 2", () => {
        test("we", () => {
            expect(caesarCipher("we", 2)).toMatch("yg");
        });
        const text = `Never give up on a dream just because 
        of the time it will take to accomplish it. 
        The time will pass anyway.`;

        const cipher = `Pgxgt ikxg wr qp c ftgco lwuv dgecwug 
        qh vjg vkog kv yknn vcmg vq ceeqornkuj kv. 
        Vjg vkog yknn rcuu cpayca.`;

        test("long text", () => {
            expect(caesarCipher(text, 2)).toMatch(cipher);
        });
    });

    describe("key equal 3", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 3)).toMatch("Vdxudek");
        });
        const text = "This is a Car";
        const cipher = "Wklv lv d Fdu";

        test("long text", () => {
            expect(caesarCipher(text, 3)).toMatch(cipher);
        });
    });

    describe("key equal 10", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 10)).toMatch("Ckebklr");
        });
        const text = "This is a Car.";
        const cipher = "Drsc sc k Mkb";

        test("long text", () => {
            expect(caesarCipher(text, 10)).toMatch(cipher);
        });
    })

    describe("key equal 20", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 20)).toMatch("Muoluvb");
        });
        const text = "This is a Car.";
        const cipher = "Nbcm cm u Wul.";

        test("long text", () => {
            expect(caesarCipher(text, 20)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", 20)).toMatch("2Lyx, 3Vfoy, 4Alyyh");
        });
    });

    describe("key equal 25", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 25)).toMatch("Rztqzag");
        });
        const text = "This is a Car.";
        const cipher = "Sghr hr z Bzq.";

        test("long text", () => {
            expect(caesarCipher(text, 25)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", 25)).toMatch("2Qdc, 3Aktd, 4Fqddm");
        });
    });

    describe("key equal 26", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 26)).toMatch("Saurabh");
        });
        const text = "This is a Car.";
        const cipher = "This is a Car.";

        test("long text", () => {
            expect(caesarCipher(text, 26)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", 26)).toMatch("2Red, 3Blue, 4Green");
        });
    });

    describe("key equal 52", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 52)).toMatch("Saurabh");
        });
        const text = "This is a Car.";
        const cipher = "This is a Car.";

        test("long text", () => {
            expect(caesarCipher(text, 52)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", 52)).toMatch("2Red, 3Blue, 4Green");
        });
    });
    
    describe("key equal 100", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 100)).toMatch("Owqnwxd");
        });
    });

    describe("key equal 197", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 197)).toMatch("Hpjgpqw");
        });
    });

    describe("key equal 0", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", 0)).toMatch("Saurabh");
        });
        const text = "This is a Car.";
        const cipher = "This is a Car.";

        test("long text", () => {
            expect(caesarCipher(text, 0)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", 0)).toMatch("2Red, 3Blue, 4Green");
        });
    });

    describe("negative key equal -1", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", -1)).toMatch("Rztqzag");
        });
        const text = "This is a Car.";
        const cipher = "Sghr hr z Bzq.";

        test("long text", () => {
            expect(caesarCipher(text, -1)).toMatch(cipher);
        });
        
        test("numbers is text", () => {
            expect(caesarCipher("2Red, 3Blue, 4Green", -1)).toMatch("2Qdc, 3Aktd, 4Fqddm");
        });
    });

    describe("key equal -48", () => {
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", -48)).toMatch("Weyvefl");
        });
    });

    describe("key is not a number", () => {
        test("Saurabh", () => {
            expect(() => caesarCipher("Saurabh", "8")).toThrow("key type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher("Saurabh", null)).toThrow("key type is invalid.");
        });

        
        test("Saurabh", () => {
            expect(() => caesarCipher("Saurabh", true)).toThrow("key type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher("Saurabh", false)).toThrow("key type is invalid.");
        });
        test("Saurabh", () => {
            expect(caesarCipher("Saurabh", undefined)).toMatch("Tbvsbci");
        });
    });

    describe("text is not a string", () => {
        test("Saurabh", () => {
            expect(() => caesarCipher(8, 8)).toThrow("text type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher(null)).toThrow("text type is invalid.");
        });

        
        test("Saurabh", () => {
            expect(() => caesarCipher(true)).toThrow("text type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher(false)).toThrow("text type is invalid.");
        });
        test("Saurabh", () => {
            expect(() => caesarCipher(undefined)).toThrow("text type is invalid.");
        });
    });

    describe("both test and key are invalid", () => {
        test("Saurabh", () => {
            expect(() => caesarCipher(8, "8")).toThrow("both text and key type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher(null, null)).toThrow("both text and key type is invalid.");
        });

        
        test("Saurabh", () => {
            expect(() => caesarCipher(true, false)).toThrow("both text and key type is invalid.");
        });
        
        test("Saurabh", () => {
            expect(() => caesarCipher(false, [])).toThrow("both text and key type is invalid.");
        });
        test("Saurabh", () => {
            expect(() => caesarCipher(undefined, NaN)).toThrow("both text and key type is invalid.");
        });
    });
});

describe("decript", () => {
    describe("key equal 1", () => {
        test("the", () => {
            expect(caesarCipher("uif", 1, true)).toMatch("the");
        });
        test("pen", () => {
            expect(caesarCipher("qfo", 1, true)).toMatch("pen");
        });
        test("ten", () => {
            expect(caesarCipher("ufo", 1, true)).toMatch("ten");
        });
        test("xyz", () => {
            expect(caesarCipher("yza", 1, true)).toMatch("xyz");
        });
        test("zab", () => {
            expect(caesarCipher("abc", 1, true)).toMatch("zab");
        });
    });

    describe("key equal 2", () => {
        test("we", () => {
            expect(caesarCipher("yg", 2, true)).toMatch("we");
        });
        const cipher = `Never give up on a dream just because 
        of the time it will take to accomplish it. 
        The time will pass anyway.`;

        const text = `Pgxgt ikxg wr qp c ftgco lwuv dgecwug 
        qh vjg vkog kv yknn vcmg vq ceeqornkuj kv. 
        Vjg vkog yknn rcuu cpayca.`;

        test("long text", () => {
            expect(caesarCipher(text, 2, true)).toMatch(cipher);
        });
    });

    describe("key equal 3", () => {
        test("Vdxudek", () => {
            expect(caesarCipher("Vdxudek", 3, true)).toMatch("Saurabh");
        });
        const cipher = "This is a Car.";
        const text = "Wklv lv d Fdu.";

        test("long text", () => {
            expect(caesarCipher(text, 3, true)).toMatch(cipher);
        });
    });

    describe("key equal 10", () => {
        test("Ckebklr", () => {
            expect(caesarCipher("Ckebklr", 10, true)).toMatch("Saurabh");
        });
        const cipher = "This is a Car.";
        const text = "Drsc sc k Mkb.";

        test("long text", () => {
            expect(caesarCipher(text, 10, true)).toMatch(cipher);
        });
    });
});