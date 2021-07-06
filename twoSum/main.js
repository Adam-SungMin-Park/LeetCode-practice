/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let test = new Map();
    for(var i = 0 ; i < nums.length; i++){
        if(test.has(target- nums[i])){
            return [test.get(target-nums[i]),i]
        }else{
            test.set(nums[i],i)
        }
    }
    return [];
};
