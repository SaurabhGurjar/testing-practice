export default function analyzeArray(arr) {
    if(!(arr instanceof Array)) {
        throw new TypeError("input is not an array.")
    }
    if(arr.length === 0) {
        throw new Error("input array is empty.");
    }
    let sum = 0;
    let _min = arr[0];
    let _max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number" || isNaN(arr[i])){
            throw new TypeError("there are non-numeric elements in the array.");
        } 
        _min = arr[i] < _min ? arr[i] : _min;
        _max = arr[i] > _max ? arr[i] : _max;
        sum += arr[i];
    }
    return {
        average: sum / arr.length,
        min: _min,
        max: _max,
        length: arr.length
    }
}