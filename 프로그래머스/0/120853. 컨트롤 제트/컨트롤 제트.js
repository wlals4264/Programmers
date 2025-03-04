function solution(s) {
    const arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z') {
            arr.splice(i-1, 1)
        }
    }
    console.log(arr)
    const answerArr = arr.filter(v => v !== 'Z').map(Number)
    return answerArr.length > 0 ? answerArr.reduce((acc,cur) => acc += cur, 0) : 0;
}