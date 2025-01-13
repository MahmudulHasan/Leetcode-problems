function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mArr = [...nums1, ...nums2];
    return findMedian(mArr);
};
function findMedian(arr) {
        let sortedArr = arr.sort((a, b) => a - b);
        let length = sortedArr.length;
        if(length%2 != 0){
            let median = sortedArr[Math.floor(length/2)];
            return median;
        }else{
            let median1 = length/2;
            let median2 = median1-1;
            return (sortedArr[median1]+sortedArr[median2])/2;
        }
    }