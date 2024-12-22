/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let fascinating = "123456789";
    let n1 = String(n*2);
    let n2 = String(n*3);
    let nStr = String(n)+n1+n2;
    if(fascinating == nStr.split("").sort((a,b)=>a-b).join("")) return true;
    return false;
};