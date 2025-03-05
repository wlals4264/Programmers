function solution(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(n / i)) result.push(i)
    }
    return result
}