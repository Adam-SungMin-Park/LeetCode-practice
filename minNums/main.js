function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	const nums = new Array(n +1).fill(Infinity);
	nums[0] = 0;
	for(const denom of denoms){
		for(let amount = 0; amount < nums.length ; amount++){
			if(denom <= amount ){
				nums[amount] = Math.min(nums[amount], nums[amount-denom]+1);
			}
		}
	}
	return nums[n] !== Infinity ? nums[n] : -1;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
