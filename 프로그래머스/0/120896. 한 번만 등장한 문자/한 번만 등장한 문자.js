function solution(s) {
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const result = Object.keys(charCount).filter(char => charCount[char] === 1);
    
    result.sort();
    
    return result.join('')
}