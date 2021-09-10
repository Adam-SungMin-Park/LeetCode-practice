/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n > 0){
        return x**n;
    }
    if(n < 0 ){
        n = n * -1;
        return 1/(x**n);
    }
    if(n === 0 ){
        return 1;
    }
};
