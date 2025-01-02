function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for(let i = 0; i<k; i++) {
        let smallestIdx = 0;
        for(let j = 0; j< nums.length; j++) {
            if(nums[j] < nums[smallestIdx]) {
                smallestIdx = j;
            }
        }
        nums[smallestIdx] = nums[smallestIdx] * multiplier;
    }
    return nums;
};