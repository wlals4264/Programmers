function solution(rank, attendance) {
    const validRanks = rank
        .map((r, i) => ({ rank: r, index: i }))
        .filter(({ index }) => attendance[index]) 
        .sort((a, b) => a.rank - b.rank); 
    
    const [a, b, c] = validRanks.slice(0, 3).map(({ index }) => index);
    
    return 10000 * a + 100 * b + c;
}