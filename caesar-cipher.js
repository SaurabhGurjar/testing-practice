export default function caesarCipher(str, k = 1, decript = false) {
    if((typeof k !== "number" || isNaN(k)) && typeof str !== "string") throw new Error("both text and key type is invalid.");
    if(typeof k !== "number" || isNaN(k)) throw new Error("key type is invalid.");
    if(typeof str !== "string") throw new Error("text type is invalid."); 
    let key;
    const cipheredStr = [];

    if(decript) {
        key = -(k % 26);
    } else {
        key = k % 26;
    }

    for(let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();

        if(charCode < "a".charCodeAt()) {
            if(charCode >= "A".charCodeAt() && charCode <= "Z".charCodeAt()) {
                charCode = str[i].charCodeAt() + key;
                if(charCode > "Z".charCodeAt()) {
                    charCode = "A".charCodeAt() + (charCode - "Z".charCodeAt()) - 1; // -1 is to take A into calculation
                } else if(charCode < "A".charCodeAt()) {
                    charCode = "Z".charCodeAt() - ("A".charCodeAt() - charCode) + 1; // +1 is to take Z into calculation
                } 
            }
        } else if(charCode <= "z".charCodeAt()) {
            charCode = str[i].charCodeAt() + key;
            if(charCode > "z".charCodeAt()) {
                charCode = "a".charCodeAt() + (charCode - "z".charCodeAt()) - 1;
            } else if(charCode < "a".charCodeAt()) {
                charCode = "z".charCodeAt() - ("a".charCodeAt() - charCode) + 1;
            } 
        }
        cipheredStr.push(String.fromCharCode(charCode)); 
    }
    return cipheredStr.join("");
}