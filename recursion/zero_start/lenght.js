const ar = [1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23, 1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23, 1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23,1,3,4,6,3,2,15,67,32,23]
const ar0 = [1, 1,3,4,6,3,2,15,67,32,23]
const bigArray = new Array(6_000).fill(1);  // if >> 5_000 - < heap overflow or stack overflow


// must return the an array lenght
const getArrayLenght = (arr) => {
  if (arr[0] === undefined) return 0; // recursion base
  return 1 + getArrayLenght(arr.slice(1))
}

// getArrayLenght(ar)
//console.log(ar[10] === undefined)
//console.log(ar)
//console.log(ar.slice(1))
//console.log(ar.slice(2))

//
//console.log(getArrayLenght(ar))
//console.log(getArrayLenght(ar0))


// more
const getRobustlyArrayLenght = (arr, index = 0) => {
  if (arr[index] === undefined) return 0; // recursion base
  return 1 + getRobustlyArrayLenght(arr, index + 1)
}


//console.log(getRobustlyArrayLenght(ar))
//console.log(getRobustlyArrayLenght(ar0))



const benchmark = (someJob) => {
  const start = Date.now()
  const result = someJob();
  const finish = Date.now()
  const executionTimeInMs = finish - start;

  console.log(executionTimeInMs);
}


benchmark(() => getArrayLenght(bigArray))   // ~ 33-70 ms

//benchmark(() => getRobustlyArrayLenght(bigArray))  // ~ 0-1 ms
