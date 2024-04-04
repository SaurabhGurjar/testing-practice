export default function reverseString(str) {
    if(typeof str !== "string") throw new Error("Input is not a string!");
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
       revStr = revStr.concat("", str[i]);
    }
    return revStr;
}