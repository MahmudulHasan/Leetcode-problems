function removeAnagrams(words: string[]): string[] {
    if (words.length === 0) return [];

    const result: string[] = [words[0]];
    for (let i = 1; i < words.length; i++) {
        if (!areAnagrams(result[result.length - 1], words[i])) {
            result.push(words[i]);
        }
    }
    return result;
};

function areAnagrams(word1: string, word2: string): boolean {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}