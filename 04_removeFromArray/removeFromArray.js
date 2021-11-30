const removeFromArray = function(list, ...removeVals) {
    const newList = [];
    nextValue: for(const value of list) {
        for(const removeVal of removeVals){
            if(value === removeVal) continue nextValue;
    }
        newList.push(value);
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
