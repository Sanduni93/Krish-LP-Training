
function mergeSort (array) {

  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}


function merge (left, right) {
  let sorted = [];
  
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
    sorted.push(right.shift());
    }
  }
  if (left.length > 0) {
    sorted = sorted.concat(left);
  }
  if (right.length > 0) {
    sorted = sorted.concat(right);
  }
  return sorted;
};

const array = [45,21,66,79,23,-2,53] ;
console.log(mergeSort(array));
