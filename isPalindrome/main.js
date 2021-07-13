/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let test = x.toString().split('').reverse();
    if(test.join('') === x.toString()){
        return true
    }else{
        return false;
    }
};
