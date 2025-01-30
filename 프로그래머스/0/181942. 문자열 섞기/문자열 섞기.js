function solution(str1, str2) {
    let answer = ''
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i] + str2[i];
        answer += char
    }
    return answer
}