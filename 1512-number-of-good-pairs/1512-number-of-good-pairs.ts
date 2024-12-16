function numIdenticalPairs(nums: number[]): number {
    let goodPairCount = 0;
    for(let i = 0; i< nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] == nums[j] && i < j)
                goodPairCount++;
        }
    }
    return goodPairCount;
};