// задача:

/*
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let x = nums1.length;
    let y = nums2.length;

    let low = 0;
    let high = x;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // Get the 4 boundary elements
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

        // This is the new part:
        // Check if we found the perfect partition
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // ✅ We found it! Now, calculate the median.
            if ((x + y) % 2 === 0) {
                // Total length is even
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                // Total length is odd
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // The partition in nums1 is too far to the right.
            // We need to move left.
            high = partitionX - 1;
        } else {
            // The partition in nums1 is too far to the left.
            // We need to move right.
            low = partitionX + 1;
        }
    }
};



const nums1 = [1,2]
const nums2 = [3,4]

// [1,2]
// [3,4]



// console.log(findMedianSortedArrays(nums1, nums2));



const getMedianOfSortedArray = (arr) => {
  const x = arr.length;
  const mid = Math.floor(x / 2);

  return x % 2 === 0
    ? (arr[mid - 1] + arr[mid]) / 2 // even
    : arr[mid];  // odd
}

// const arr = [1,2,3,4,5,6,7,8,9,10]
const arr = [1, 2]

console.log(getMedianOfSortedArray(arr));
