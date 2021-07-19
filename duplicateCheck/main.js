/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   if(nums.length !== new Set(nums).size){
        return true
   }else{
        return false;
   }
};
