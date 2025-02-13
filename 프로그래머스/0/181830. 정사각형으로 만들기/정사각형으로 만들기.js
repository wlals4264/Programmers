function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    
    if(row > column) {
        return arr.map(rowArr => [...rowArr, ...Array(row - column).fill(0)]);
    } else {
        return [...arr, ...Array.from({ length: column - row }, () => Array(column).fill(0))];
    }
    
     return arr;
}