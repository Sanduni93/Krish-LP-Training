
function missing(array) {

	let arr_size = array.length;
	var missingValues = [];

for (var i = 0; i < arr_size; i++) {

   if (array[i]+1 != array[i+1]) {

		
           while(array[i] < array [i+1]){
				array[i] = array[i]+1;
				missingValues.push(array[i]);
				array[i] ++;
		    }
    }
}
console.log("missing values: " +missingValues)
	
}
console.log(missing([1,2,3,4,5,8,9,10, 12]));