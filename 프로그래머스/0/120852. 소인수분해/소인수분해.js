function solution(n) {
    const answer = [];
    let i = 2;
    
    while (n > 1) {
        if (n % i === 0) {
            answer.push(i);
            n /= i;
        } else {
            i++;
        }
    }
    
    const set = new Set(answer)

    return [...set]
}