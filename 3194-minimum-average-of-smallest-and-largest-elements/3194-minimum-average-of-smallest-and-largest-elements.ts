function minimumAverage(nums: number[]): number {
    let averages = [];
    nums.sort((a,b)=> a-b);
    let n = nums.length;
    for(let i = 0; i < n/2; i++) {
        let minimum = nums[0]+nums[nums.length - 1];
        let minimumbytwo = minimum/2;
        averages.push(minimumbytwo);
        nums.shift();
        nums.pop();
    }
    averages.sort((a,b)=> a-b);
    let minimumofavg = averages[0];
    return minimumofavg;
};