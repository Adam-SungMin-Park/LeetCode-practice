/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans =[];
        for(let i = 0 ; i < nums.length; i++){
            if(nums[i]===target){
                ans.push(i)
            }
            ans = ans.filter(middle => middle === ans[0] || middle === ans[ans.length-1])
        }
    if(ans.length ===1){
        ans[1] = ans[0]
    }
    if(!nums.includes(target)){
        return [-1,-1]
    }
    return ans
};
