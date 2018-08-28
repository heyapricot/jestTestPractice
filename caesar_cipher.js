function caesarCipher(string,key){
    let cipher = "";
    const regex = /[a-z]/;
    for(let i=0; i < string.length; i++){
        let char = string[i];
        if(char.match(/[a-z]/i)){
            let code = string.charCodeAt(i);
            //Uppercase
            if((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            else if((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
        }
        cipher += char;
    }
    return cipher;
}

module.exports = caesarCipher;