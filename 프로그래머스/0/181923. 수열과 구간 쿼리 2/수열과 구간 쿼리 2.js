function solution(arr, queries) {
    const result = [];
    queries.forEach(([s, e, k]) => {
        const mid = [];
        for(let i = s; i <= e; i++) {
            if(arr[i] > k) mid.push(arr[i])
        }
        mid.length === 0 ? result.push(-1) : result.push(Math.min(...mid));
    })
    
    return result;
}