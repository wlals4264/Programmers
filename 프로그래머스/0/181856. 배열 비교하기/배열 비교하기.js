function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((acc, cur) => acc += cur);
    const arr2Sum = arr2.reduce((acc, cur) => acc += cur);
    
    if(arr1.length === arr2.length && arr1Sum === arr2Sum) {
        return 0;
    }
    
    if(arr1.length === arr2.length) {
        return arr1Sum > arr2Sum ? 1 : -1
    } else {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
}