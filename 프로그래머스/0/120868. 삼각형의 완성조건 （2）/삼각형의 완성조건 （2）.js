function solution(sides) {
    const [a, b] = sides.sort((x, y) => x - y);
    return (b - a + 1) <= (a + b - 1) ? (a + b - 1) - (b - a + 1) + 1 : 0;
}
