function linearSearch(array, element) {

	let arr = array;
	let arrLen = array.length;
	

	for (var i = 0; i< arrLen; i++) {

		if (arr[i] == element) {

		console.log("The element "+element+" is found on "+i);
	}

}


console.log(linearSearch([21,4,50,2,1,45], 45));