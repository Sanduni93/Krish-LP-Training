function binarySearch (array, expected){
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    const mid = Math.round((first + last) / 2);
    const val = array[mid];

    if (val === expected) {
      return mid;
      
    }

    if (val > expected) {
      last = mid - 1;

    } else {
      first = mid + 1;
    }
  }

}
console.log(binarySearch([21,35,64,81, 100], 81)) ;