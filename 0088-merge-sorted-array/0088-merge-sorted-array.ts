/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let lastIndex = m + n -1;
    while(m > 0 && n > 0) {
        if(nums1[m-1] > nums2[n-1]) {
            nums1[lastIndex] = nums1[m-1];
            m -= 1;
        } else {
            nums1[lastIndex] = nums2[n-1];
            n -= 1;
        }
        lastIndex -= 1;
    } 
    while(n > 0) {
        nums1[lastIndex] = nums2[n-1];
            n -= 1;
        lastIndex -= 1;
    }
    
};