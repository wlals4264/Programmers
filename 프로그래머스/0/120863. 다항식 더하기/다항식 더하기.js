function solution(polynomial) {
    let xSum = 0; 
    let numSum = 0; 

    polynomial.split(' + ').forEach(term => {
        if (term.includes('x')) { 
            const coef = term === 'x' ? 1 : parseInt(term.replace('x', ''));
            xSum += coef;
        } else { 
            numSum += parseInt(term);
        }
    });

    let result = [];
    if (xSum > 0) result.push(xSum === 1 ? 'x' : `${xSum}x`);
    if (numSum > 0) result.push(numSum);

    return result.join(' + ');
}
