function solution(number) {
    let sum = 0;
    for(const n of number) {
        sum += Number(n);
    }
    
    return sum % 9;
}