function combination(n, r) {
    if (r === 0 || n === r) return 1;
    r = Math.min(r, n - r); 

    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= (n - i);
        result /= (i + 1);
    }
    
    return result;
}

function solution(balls, share) {
    return combination(balls, share);
}