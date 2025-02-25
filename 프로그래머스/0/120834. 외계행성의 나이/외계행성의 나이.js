function solution(age) {
    const PROGRAMMERS_962_Age = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let answer = '';
    const ageArr = age.toString().split('')
    
    ageArr.forEach(n => answer += PROGRAMMERS_962_Age[+n])
    
    return answer;
}