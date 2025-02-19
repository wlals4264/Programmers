function solution(array) {
    const obj = {};
    const answer = [];
    array.forEach(num => obj[num] ? obj[num]++ : obj[num] = 1)
    const maxCount = Math.max(...Object.values(obj))
    for (const [key, value] of Object.entries(obj)) {
        if (value === maxCount) answer.push(Number(key))
        }
    
    return answer.length === 1 ? answer[0] : -1;
}