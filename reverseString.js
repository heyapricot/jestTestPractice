function reverseString(input){
    let output = "";
    for(let i = input.length - 1; i >= 0; i--){
        output += input[i];
    }
    return output;
}

module.exports = reverseString;