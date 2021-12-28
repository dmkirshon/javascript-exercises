
// 1, 1, 2, 3, 5, 8
const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    function fibhelper(next, previous, count) {
        if (count == n) {
            return previous;
        }
        if(next == 1 || next == 2){
            return fibhelper(next+1, next, count + 1);
        }
        return fibhelper(next + previous, next, count + 1);
    }
    return fibhelper(1, 1, 1);

    // iterative solution
    // let a = 0;
    // let b = 1;
    // for (let i = 1; i < n; i++) {
    //   const temp = b;
    //   b = a + b;
    //   a = temp;
    // }
    // return b;
};

// Do not edit below this line
module.exports = fibonacci;


// 1
