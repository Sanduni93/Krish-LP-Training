function quickSort(array) {

	if (array.length <= 1) { 

		return array;
	} 

	else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) 
		{

			if (array[i] <= pivot) {
				left.push(array[i]);
			} 
			else {
				right.push(array[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

const array = [3, 0, 2, 5, -1, 4, 1 ];
console.log(quickSort(array));
