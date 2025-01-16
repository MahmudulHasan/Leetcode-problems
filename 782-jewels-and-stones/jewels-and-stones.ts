function numJewelsInStones(jewels: string, stones: string): number {
    let count:number = 0;
    for(let i = 0; i<jewels.split("").length; i++) {
        for(let j = 0; j<stones.split("").length; j++){
            if(jewels[i] === stones[j]) {
                count++;
            }
        }
    }
    return count;
};