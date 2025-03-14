function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let diffA = Math.abs(a - n);
        let diffB = Math.abs(b - n);
        
        if (diffA !== diffB) return diffA - diffB;
        
        return b - a;
    });
}
