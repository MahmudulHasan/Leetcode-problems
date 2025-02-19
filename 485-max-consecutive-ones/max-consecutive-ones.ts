function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let count = 0;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            if(max<count) max = count;
        } else {
            count = 0;
        }
    }
    return max;
};