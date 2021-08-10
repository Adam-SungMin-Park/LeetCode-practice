function firstDuplicateValue(array) {
  // Write your code here.
	const seen = new Set();
	for(const number of array){
		if(seen.has(number)){
			return number;
		}
		seen.add(number);
	}
  return -1;
}
