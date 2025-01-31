function solution(a, d, included) {
    const arithmeticArr = [];
    
    for (let i = 0; i < included.length; i++) {
        let num = a + d * i;
        arithmeticArr.push(num);
    }
    
    const answerArr = arithmeticArr.filter((num, idx) => {
        return included[idx] && num
    })
    
    return answerArr.reduce((acc, cur) => acc + cur, 0);
}
    