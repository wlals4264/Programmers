function solution(n, control) {
    const controlArr = Array.from(control);
    while (controlArr.length > 0){
        let char = controlArr.pop();
        if (char === 'w') {
            n++;
        } else if (char === 's') {
            n--;
        } else if (char === 'd') {
            n += 10;
        } else {
            n -= 10;
        }
    }
    
    return n;
}