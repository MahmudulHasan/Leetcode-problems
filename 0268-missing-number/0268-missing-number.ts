function missingNumber(nums: number[]): number {
    let missingNum = 0;
    nums.sort(function(a, b) {
        return a - b;
    });
    console.log(nums);
    for (let i = 0; i<=nums.length; i++) {
        if(i != nums[i]) {
            return i;
        }
    }
};