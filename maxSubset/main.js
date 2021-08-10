function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	if(array.length === 0) {
		return 0;
	}
	if(array.length ===1){
		return array[0];
	}
	const maxSum = array.slice();
	maxSum[1] = Math.max(array[0],array[1]);
	for(let i = 2 ; i < array.length ; i++){
		maxSum[i] = Math.max(maxSum[i-1],maxSum[i-2]+array[i]);
	}
	return maxSum[maxSum.length-1]
}
