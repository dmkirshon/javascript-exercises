const removeFromArray = function(list, removedNum) {
    let newList = [];
    for(value of list) {
        if(value === removedNum) {
            continue;
        }
        newList.push(value);
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
