function solution(a, b) {
    const calculation1 = Number(a + '' + b);
    const calculation2 = Number(b + '' + a);
    
    return calculation1 >= calculation2 ? calculation1 : calculation2
}