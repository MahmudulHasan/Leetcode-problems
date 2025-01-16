function findPermutationDifference(s: string, t: string): number {
    let sum: number = 0; 
    for (let i = 0; i < t.length; i++) {
        sum += Math.abs(s.indexOf(t.charAt(i)) - i); 
    }
    return sum;
};