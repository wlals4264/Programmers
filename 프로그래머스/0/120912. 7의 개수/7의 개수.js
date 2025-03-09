function solution(array) {
    return array.flatMap(v => v.toString().split('')).filter(v => v === '7').length
}