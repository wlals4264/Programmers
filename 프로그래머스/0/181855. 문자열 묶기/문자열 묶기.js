function solution(strArr) {
    let obj = {}
    strArr.forEach(str => {
        obj[str.length] = (obj[str.length] || 0) + 1;
    })
    return Math.max(...Object.values(obj))
}