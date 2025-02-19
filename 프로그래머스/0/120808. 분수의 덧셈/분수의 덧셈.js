function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1
    const denom = denom1 * denom2
    
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
     const gcdNum = gcd(numer, denom);
    
    return [numer / gcdNum, denom / gcdNum]
}