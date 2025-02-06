function solution(n, k) {
    const result = [];
    for (i = 1; i <= n / k; i++) {
        result.push(k * i);
    }
    
    return result;
}