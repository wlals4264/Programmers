function solution(ineq, eq, n, m) {
    let sign = ineq + eq;
    
    switch(sign) {
        case ">=":
            return +(n >= m);
            break;
        case "<=":
            return +(n <= m);
            break;
        case ">!":
            return +(n > m);
            break;
        case "<!":
            return +(n < m);
            break;
    }
}