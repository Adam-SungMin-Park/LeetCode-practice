function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrInd = 0;
	let seqInd = 0;
	while ( arrInd < array.length && seqInd < sequence.length){
		if(array[arrInd]===sequence[seqInd])
			seqInd++;
			arrInd++;
	}
	return seqInd === sequence.length
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
