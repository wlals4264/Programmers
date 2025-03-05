function solution(order) {
    return order.toString()
        .split("")
        .filter(v => ["3", "6", "9"].includes(v))
        .length;
}