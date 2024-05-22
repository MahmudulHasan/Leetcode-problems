function removeElement(nums: number[], val: number): number {
    let nextIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[nextIndex] = nums[i];
            nextIndex++;
        }
    }
    return nextIndex;
};