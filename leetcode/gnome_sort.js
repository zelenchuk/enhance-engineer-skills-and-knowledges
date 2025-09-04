
// O(n²).

const arr = [5, 2, 4, 6, 1, 3];

const sortArr = (arr, reversed = false) => {
  let i = 0;

  while ( i < arr.length - 1) {
    if (
      (!reversed && arr[i] > arr[i + 1]) ||
      (reversed && arr[i] < arr[i + 1])
    ){
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      if (i > 0)   i--;
    }else {
      i++;
    }
  }
  return arr
}


console.log(sortArr(arr));
console.log(sortArr(arr, true));
