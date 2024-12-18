function getSneakyNumbers(nums: number[]): number[] {
    let sneakyArr: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] == nums[j]) {
                sneakyArr.push(nums[i]);
            }
        }
    }
    return sneakyArr;
};