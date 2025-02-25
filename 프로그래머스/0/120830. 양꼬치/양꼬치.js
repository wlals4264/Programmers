function solution(n, k) {
    const drink = k - parseInt(n / 10);
    return n * 12000 + drink * 2000;
}