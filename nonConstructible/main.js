function nonConstructibleChange(coins) {
  // Write your code here.
	coins.sort((a,b)=>a-b);
	let current = 0 ;
	for(const coin of coins){
		if(coin > current +1 ){
			return current +1;
		}
		else{
			current += coin;
			console.log(current)
		}
	}
	return current +1
}
