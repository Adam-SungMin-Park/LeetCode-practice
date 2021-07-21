/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    for(let i = 0 ; i < nums2.length ; i++){
        nums1.push(nums2[i])
    }
    let sortedList = nums1.sort((a,b)=>a-b);

    if(sortedList.length % 2 ===1){
        return sortedList[(sortedList.length-1) /2]
    }
    else{
        return (sortedList[sortedList.length/2] + sortedList[(sortedList.length/2)-1])/2
    }
};
