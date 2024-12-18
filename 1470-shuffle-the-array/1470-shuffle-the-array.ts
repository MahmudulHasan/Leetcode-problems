function shuffle(nums: number[], n: number): number[] {
    let shuffleArr: number[] = [];
    for(let i = 0; i < n; i++) {
        shuffleArr.push(nums[i],nums[n+i]);
    }
    return shuffleArr;
};