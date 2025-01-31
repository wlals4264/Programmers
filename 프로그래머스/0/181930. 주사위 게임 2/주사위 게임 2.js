function solution(a, b, c) {
    const sum1 = (a + b + c);
    const sum2 = (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2));
    const sum3 = (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3));
    
    if(a === b && a === c) {
        return sum1 * sum2 * sum3;
    } else if(a === b && a !== c || a === c && a !== b || b === c && b !== a) {
        return sum1 * sum2;
    } else {
        return sum1;
    }
}