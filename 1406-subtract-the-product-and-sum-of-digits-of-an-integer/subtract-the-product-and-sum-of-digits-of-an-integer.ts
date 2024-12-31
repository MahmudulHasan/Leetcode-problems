function subtractProductAndSum(n: number): number {
    n = Math.abs(n);
    return productOfNumber(n)-sumOfNumber(n);
};
function productOfNumber(n: number): number {
    return n
        .toString()
        .split('')
        .reduce((product, digit) => product * parseInt(digit), 1);
}

function sumOfNumber(n: number): number {
    return n
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}