/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odd = [];
    let even = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]%2!==0){
           odd.push(nums[i])
        }
        else{
            even.push(nums[i])
        }
    }return even.concat(odd)
};
