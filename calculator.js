function isVaild(a, b) {
    if(
        (typeof a !== "number" || typeof b !== "number") || 
        (isNaN(a) || isNaN(b)) || !isFinite(a) || !isFinite(b)
    ) {
        throw new TypeError("Inputs are not valid numbers!");
    }
    if(
        (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) || 
        (a < Number.MIN_SAFE_INTEGER || b < Number.MIN_SAFE_INTEGER) ||
        a + b > Number.MAX_SAFE_INTEGER ||
        a + b < Number.MIN_SAFE_INTEGER
    ) {
        throw new RangeError("Inputs exceed the safe range (-9007199254740991 <= (a, b, a + b, a - b, a / b, a * b) <= 9007199254740991)!");
    }
    return true;
}

export function add(a, b) {
    if(isVaild(a, b)) return a + b;
}

export function subtract(a, b) {
    if(isVaild(a, b)) return a - b;
} 

export function divide(a, b) {
    if(isVaild(a, b)) return a / b;
}

export function multiply(a, b) {
    if(isVaild(a, b)) return a * b;
}
