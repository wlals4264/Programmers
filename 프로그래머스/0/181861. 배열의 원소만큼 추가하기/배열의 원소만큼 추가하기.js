function solution(arr) {
    const result = [];
    arr.forEach(n => {
        for(let i = n; i > 0; i--) {
            result.push(n);
        }
    })
    return result;
}