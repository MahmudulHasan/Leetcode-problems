function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let boolArr: boolean[] = [];
    let max = Math.max(...candies);
    candies.forEach(function(candie, i) {
        if(candies[i]+ extraCandies < max) {
            boolArr.push(false);
        }else {
            boolArr.push(true);
        }
    });
    return boolArr;
};