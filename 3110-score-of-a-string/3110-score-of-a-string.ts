function scoreOfString(s: string): number {
    let res = 0;
    for(let i = 0; i < s.length -1; i++) {
        let first = s.charCodeAt(i);
        let second = s.charCodeAt(i+1);
        console.log(first);
        res += Math.abs(first - second);
    }
    return res;
};