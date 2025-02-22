function solution(num_list) {
    const answer = [];
    for(const num of num_list) {
        answer.unshift(num)
    }
    return answer;
}