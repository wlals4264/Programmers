function solution(arr) {
    return +arr.every((row, i) => row.every((_, j) => arr[i][j] === arr[j][i]));
}
