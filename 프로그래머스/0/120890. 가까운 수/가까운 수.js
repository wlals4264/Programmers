function solution(array, n) {
    let min = Number.MAX_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;;
    for (let num of array) {
        let diff = Math.abs(n - num)
        if(diff < min || diff === min && num < minNum) {
            min = diff
            minNum = num
        }
    }
    
    return minNum
}