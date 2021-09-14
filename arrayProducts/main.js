function arrayOfProducts(array) {
  // Write your code here.
	let ans = [];
	for(let i = 0 ; i < array.length ; i++){
		let produce = 1;
		for(let j = 0 ; j < array.length; j++){
			if(i !== j ){
				produce *= array[j];
			}
			ans[i] = produce
		}
	}
	return ans;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
