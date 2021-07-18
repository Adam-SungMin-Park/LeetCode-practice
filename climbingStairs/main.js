/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    while(n===1 || n === 0){
        return 1
    }
    let one = 1;
    let two = 2;
    for(let i = 3; i<=n;i ++){
        let nth = one +two;
        one = two ;
        two = nth ;
    }
    return two
};
