function solution(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    }
    
    let gcdValue = gcd(a, b);
    let denominator = b / gcdValue;
    
    while (denominator % 2 === 0) denominator /= 2;
    while (denominator % 5 === 0) denominator /= 5;
      
    return denominator === 1 ? 1 : 2;
}