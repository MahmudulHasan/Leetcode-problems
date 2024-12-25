/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        if([...words[i]].every(char => allowedSet.has(char))) {
            count++;
        }
    }
    return count;
};