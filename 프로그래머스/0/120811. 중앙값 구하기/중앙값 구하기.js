function solution(array) {
    array.sort((a, b) => a - b);
    const index = Math.floor(array.length / 2);
    return array[index];
}