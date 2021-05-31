function selectionSort(array){

    for(let i = 0; i < array.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < array.length; j++){

            if(array[j] < array[minIndex]){
                minIndex = j;
            }

        }

        if(i != minIndex){
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp; 
        }

    }

    console.log(array);
}
console.log(selectionSort([44,89,32,75,92,12,55,67]));