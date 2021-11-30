const sumAll = function(first, second) {
    if('number' != typeof(first) ||
            'number' != typeof(second) ||
            first < 0 || second < 0) return 'ERROR';

    const start = first < second ? first : second;
    const finish = start === second ? first: second;

    let sum = 0;
    
    for(i = start; i <= finish; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
