export default function analyzeArray(arr) {
    if(!(arr instanceof Array)) {
        throw new TypeError("input is not an array.")
    }
    if(arr.length === 0) {
        throw new Error("input array is empty.");
    }
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for(const i of arr) {
        if(typeof i !== "number" || isNaN(i)){
            throw new TypeError("there are non-numeric elements in the array.");
        } 
        min = i < min ? i : min;
        max = i > max ? i : max;
        sum += i;
    }
    return {
        average: sum / arr.length,
        min,
        max,
        length: arr.length
    }
}