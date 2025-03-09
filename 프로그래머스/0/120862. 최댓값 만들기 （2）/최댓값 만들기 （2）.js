function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const n = numbers.length
    const case1 = numbers[n - 1] * numbers[n - 2];
    const case2 = numbers[0] * numbers[1];
    return Math.max(case1, case2);
}