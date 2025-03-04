function solution(sides) {
    const max = Math.max(...sides);
    sides.splice(sides.indexOf(max), 1)
    return sides.reduce((acc,cur) => acc += cur, 0) > max ? 1 : 2;
}