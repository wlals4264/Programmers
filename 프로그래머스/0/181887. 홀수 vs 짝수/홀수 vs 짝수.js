function solution(num_list) {
    const oddArr = num_list.filter((num, idx) => !(idx % 2));
    const evenArr = num_list.filter((num, idx) => !!(idx % 2));
    const oddSum = oddArr.reduce((acc, cur) => acc += cur, 0);
    const evenSum = evenArr.reduce((acc, cur) => acc += cur, 0);
    return Math.max(oddSum, evenSum);
}