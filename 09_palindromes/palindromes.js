const palindromes = function (palindromString) {

    reversedString = '';

    palindromNoPunc = palindromString
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');

    palindromNoPuncNoSpace = palindromNoPunc
        .replace(/\s/g,'');

    palindromNoPuncNoSpaceLC = palindromNoPuncNoSpace.toLowerCase();

    lengthReducedPalindrom = palindromNoPuncNoSpaceLC.length;

    for(i = lengthReducedPalindrom - 1; i >= 0; i--) {
        reversedString += palindromNoPuncNoSpaceLC[i];
    }

    return reversedString === palindromNoPuncNoSpaceLC;


    // processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    // return (
    //   processedString
    //     .split("")
    //     .reverse()
    //     .join("") == processedString
    // );
};

// Do not edit below this line
module.exports = palindromes;
