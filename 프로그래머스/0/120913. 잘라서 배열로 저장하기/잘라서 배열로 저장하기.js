function solution(my_str, n) {
    const answer = [];
    for (let i = 0; i < my_str.length; i += n){
        char = my_str.slice(i, i + n);
        answer.push(char);
    }
    return answer
}