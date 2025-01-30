function solution(a, b) {
    const stringSum = String(a) + String(b);
    return Number(stringSum) > 2 * a * b ? Number(stringSum) : 2 * a * b;
}