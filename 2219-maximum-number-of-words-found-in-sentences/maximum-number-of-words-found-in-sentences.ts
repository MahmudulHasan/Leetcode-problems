function mostWordsFound(sentences: string[]): number {
    let count = 0;
    for(let i = 0; i< sentences.length; i++) {
        let wordCount = sentences[i].split(" ").length;
        count = Math.max(count, wordCount);
    }
    return count;
};