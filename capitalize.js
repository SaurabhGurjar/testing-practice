export default function capitalize(str) {
    if(str === "") return "";
    if(typeof str === "string") {
        if((str !== "Infinity" && str !== "NaN") && (typeof Number(str) === "number" && !isNaN(Number(str)))) {
            throw new Error("Input is a stringified number!");
        }
        return str[0].toUpperCase() + str.slice(1);
    }
    throw new Error("Input is not a string!");
}