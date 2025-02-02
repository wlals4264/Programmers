function solution(arr, queries) {
    // 0 <= i <= 4
    // i = 0, 1, 2, 3, 4
    // k = 1, 1의 배수 
    // arr = [1, 2, 3, 5, 4];
    
    queries.map((query) => {
        const [s, e, k] = query;
        
        for(let i = s; i <= e; i++) {
            if(i === 0) {
                arr[i]++;
            } else if(i % k === 0) {
                arr[i]++; 
            }
            
        };
    })
    
    return arr;
}