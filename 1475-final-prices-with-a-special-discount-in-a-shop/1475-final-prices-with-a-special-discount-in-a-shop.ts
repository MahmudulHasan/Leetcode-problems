function finalPrices(prices: number[]): number[] {
    let finalArr: number[] = [];
    for(let i = 0; i< prices.length; i++) {
        for(let j = i+1; j<prices.length; j++) {
            if(prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
        
                finalArr.push(prices[i]);
    }
    return finalArr;
};