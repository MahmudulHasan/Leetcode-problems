function minimumOperations(nums: number[]): number {
    let count = 0;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] === 1) {
            nums[i] -= 1;
            count++;
        }else if(nums[i] % 3 != 0) {
            let x = nums[i] % 3;
            if(x === 1) {
                nums[i] -= 1;
                count++;
            }else {
                nums[i] += 1;
                count++;
            }
        }
    }
    return count;
};