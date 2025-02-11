function solution(arr) {
    let targetLength = 1;

    while (targetLength < arr.length) {
        targetLength *= 2;
    }

    return [...arr, ...Array(targetLength - arr.length).fill(0)];
}