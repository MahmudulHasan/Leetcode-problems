function findWordsContaining(words: string[], x: string): number[] {
    let indexArr: number[] = [];
    words.forEach(function(word, idx) {
        for(let i = 0; i< word.length; i++) {
            if (word[i] == x) {
                indexArr.push(idx);
                break;
            }
        }
    });
    return indexArr;
};