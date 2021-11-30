const leapYears = function(yearInQuestion) {
    if(yearInQuestion % 4 === 0 && 
            (yearInQuestion % 400 === 0  || yearInQuestion % 100 !== 0))
        return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
