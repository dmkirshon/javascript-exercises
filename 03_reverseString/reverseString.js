const reverseString = function(str) {
    let reverseStr = '';
    for(i = str.length-1; i >= 0; i-- ) {
        reverseStr += str[i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
