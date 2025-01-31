function solution(n) {
    const evenArr = [];
    if(n % 2 !== 0) {
        return (Math.ceil(n/2) * (1 + n))/2;
    } else {
        for(let i = 1; i <= n/2; i++){
            evenArr.push(Math.pow(i * 2, 2));
        }
        return evenArr.reduce((acc, cur) => acc + cur , 0)
    }
}