var runningSum = function(nums) {
    let ans =[];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
       sum = sum + nums[i]
       ans.push(sum)
    }
    return ans
};
