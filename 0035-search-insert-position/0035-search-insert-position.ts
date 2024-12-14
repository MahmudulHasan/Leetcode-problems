function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length -1;
    if(target > nums[right]) return nums.length;
    if(target < nums[0]) return 0;
    while(left <= right) {
        const mid = ~~((left + right)/2);
        if(mid >= 0 && mid+1 <= nums.length -1 && nums[mid] < target && nums[mid+1] > target) {
            return mid+1;
        }
        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1;
};